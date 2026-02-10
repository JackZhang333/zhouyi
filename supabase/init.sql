-- 1. 创建摇卦记录表 (divination_records)
CREATE TABLE IF NOT EXISTS public.divination_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    lines INTEGER[] NOT NULL, -- 存储 6,7,8,9 的数组
    original_hexagram_id TEXT NOT NULL,
    changed_hexagram_id TEXT,
    changing_lines INTEGER[], -- 变爻位置数组
    ai_interpretation TEXT,
    notes TEXT,
    tags TEXT[],
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. 创建评论/笔记表 (comments)
CREATE TABLE IF NOT EXISTS public.comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    record_id UUID REFERENCES public.divination_records(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 启用 RLS (Row Level Security)
ALTER TABLE public.divination_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- 4. 设置 divination_records 的安全策略
-- 所有人都可以查看公开的记录
CREATE POLICY "Public records are viewable by everyone" 
ON public.divination_records FOR SELECT 
USING (is_public = true);

-- 用户可以查看自己的所有记录
CREATE POLICY "Users can view their own records" 
ON public.divination_records FOR SELECT 
USING (auth.uid() = user_id);

-- 用户可以创建自己的记录
CREATE POLICY "Users can create their own records" 
ON public.divination_records FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- 用户可以更新自己的记录
CREATE POLICY "Users can update their own records" 
ON public.divination_records FOR UPDATE 
USING (auth.uid() = user_id);

-- 用户可以删除自己的记录
CREATE POLICY "Users can delete their own records" 
ON public.divination_records FOR DELETE 
USING (auth.uid() = user_id);

-- 5. 设置 comments 的安全策略
-- 所有人可以查看公开记录下的评论
CREATE POLICY "Comments on public records are viewable by everyone" 
ON public.comments FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM public.divination_records 
        WHERE divination_records.id = comments.record_id AND is_public = true
    )
);

-- 用户可以管理自己的评论
CREATE POLICY "Users can manage their own comments" 
ON public.comments FOR ALL 
USING (auth.uid() = user_id);

-- 6. 创建自动更新 updated_at 的函数和触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_divination_records_updated_at
    BEFORE UPDATE ON public.divination_records
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
