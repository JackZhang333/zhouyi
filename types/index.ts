// 爻类型：6(老阴), 7(少阳), 8(少阴), 9(老阳)
export type YaoType = 6 | 7 | 8 | 9;

// 爻的显示类型
export type YaoDisplayType = 'yin' | 'yang' | 'changing-yin' | 'changing-yang';

// 八卦
export type Bagua = 'qian' | 'kun' | 'zhen' | 'xun' | 'kan' | 'li' | 'gen' | 'dui';

// 卦象结构
export interface Hexagram {
  id: string;              // 卦的唯一标识（如 "qian"）
  sequence: number;        // 序号 1-64
  name: string;            // 卦名（如 "乾"）
  pinyin: string;          // 拼音（如 "qián"）
  symbol: string;          // 卦象符号（如 "☰"）

  // 卦象（六爻，从下到上）
  lines: YaoType[];        // [9,9,9,9,9,9] 表示六阳爻

  // 上卦下卦信息
  upperTrigram: Bagua;     // 上卦
  lowerTrigram: Bagua;     // 下卦

  // 原文
  original: {
    guaCi: string;         // 卦辞原文
    tuanCi: string;        // 彖传原文
    xiangCi: string;       // 大象原文
    yaoCi: string[];       // 六爻爻辞原文 [初九, 九二, ...]
    xiaoXiang: string[];   // 小象原文
    wenYan?: string;       // 文言（乾坤两卦特有）
  };

  // 白话解释
  vernacular: {
    guaCi: string;         // 卦辞白话
    tuanCi: string;        // 彖传白话
    xiangCi: string;       // 大象白话
    yaoCi: string[];       // 六爻爻辞白话
    xiaoXiang: string[];   // 小象白话
    wenYan?: string;       // 文言白话
  };

  // 关系卦
  relations: {
    cuoGua: string;        // 错卦ID
    zongGua: string;       // 综卦ID
    jiaoGua: string;       // 交卦ID
    huGua: string;         // 互卦ID
  };

  // SEO/GEO优化字段
  seo: {
    title: string;         // 页面标题
    description: string;   // 页面描述
    keywords: string[];    // 关键词
    structuredData: object; // JSON-LD结构化数据
  };
}

// 八卦信息
export interface TrigramInfo {
  id: Bagua;
  name: string;
  pinyin: string;
  symbol: string;
  nature: string;          // 自然象征（天、地、雷、风、水、火、山、泽）
  attribute: string;       // 属性
  lines: [YaoType, YaoType, YaoType]; // 三爻
}

// 摇卦记录
export interface DivinationRecord {
  id: string;
  user_id?: string;
  question: string;        // 所求事物
  lines: YaoType[];        // 六爻结果
  original_hexagram_id: string;  // 本卦ID
  changed_hexagram_id: string | null;  // 变卦ID（可选）
  changing_lines: number[];      // 变爻位置（1-6）
  ai_interpretation?: string;    // AI解读结果
  notes?: string;          // 用户笔记
  tags?: string[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

// 评论
export interface Comment {
  id: string;
  record_id: string;
  user_id: string;
  user_email?: string;
  content: string;
  created_at: string;
}

// 摇卦状态
export interface DivinationState {
  currentLines: YaoType[];
  currentStep: number;     // 当前摇卦步骤 0-6
  isDivining: boolean;
  question: string;
  aiInterpretation: string;
  recordId?: string;
}

// AI解读请求
export interface InterpretationRequest {
  hexagram: Hexagram;
  changedHexagram?: Hexagram;
  question: string;
  changingLines: number[];
}

// AI解读响应
export interface InterpretationResponse {
  interpretation: string;
}

// 分享卡片数据
export interface ShareCardData {
  record: DivinationRecord;
  originalHexagram: Hexagram;
  changedHexagram?: Hexagram;
}
