-- Add hexagram_id column to comments table
ALTER TABLE public.comments 
ADD COLUMN IF NOT EXISTS hexagram_id TEXT;

-- Add updated_at column to comments table (it was missing from the original schema)
ALTER TABLE public.comments 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_comments_hexagram_id ON public.comments(hexagram_id);

-- Update RLS policy to allow viewing hexagram comments
-- First drop the existing policy to replace it (if possible, otherwise, we create a new one)
DROP POLICY IF EXISTS "Comments on public records are viewable by everyone" ON public.comments;

-- Create new policy that includes hexagram comments (assuming they are always public)
CREATE POLICY "Public comments are viewable by everyone" 
ON public.comments FOR SELECT 
USING (
    (hexagram_id IS NOT NULL) OR 
    (
        record_id IS NOT NULL AND EXISTS (
            SELECT 1 FROM public.divination_records 
            WHERE divination_records.id = comments.record_id AND is_public = true
        )
    )
);
