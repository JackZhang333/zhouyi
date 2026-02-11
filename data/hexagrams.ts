import { Hexagram, TrigramInfo, YaoType } from "@/types";
import { yaoData } from "./yaoData";
import { hexagramTexts } from "./basicData";

// 八卦基础数据
export const trigrams: Record<string, TrigramInfo> = {
  qian: {
    id: "qian",
    name: "乾",
    pinyin: "qián",
    symbol: "☰",
    nature: "天",
    attribute: "刚健",
    lines: [9, 9, 9],
  },
  kun: {
    id: "kun",
    name: "坤",
    pinyin: "kūn",
    symbol: "☷",
    nature: "地",
    attribute: "柔顺",
    lines: [6, 6, 6],
  },
  zhen: {
    id: "zhen",
    name: "震",
    pinyin: "zhèn",
    symbol: "☳",
    nature: "雷",
    attribute: "动",
    lines: [9, 6, 6],
  },
  xun: {
    id: "xun",
    name: "巽",
    pinyin: "xùn",
    symbol: "☴",
    nature: "风",
    attribute: "入",
    lines: [6, 9, 9],
  },
  kan: {
    id: "kan",
    name: "坎",
    pinyin: "kǎn",
    symbol: "☵",
    nature: "水",
    attribute: "陷",
    lines: [6, 9, 6],
  },
  li: {
    id: "li",
    name: "离",
    pinyin: "lí",
    symbol: "☲",
    nature: "火",
    attribute: "丽",
    lines: [9, 6, 9],
  },
  gen: {
    id: "gen",
    name: "艮",
    pinyin: "gèn",
    symbol: "☶",
    nature: "山",
    attribute: "止",
    lines: [6, 6, 9],
  },
  dui: {
    id: "dui",
    name: "兑",
    pinyin: "duì",
    symbol: "☱",
    nature: "泽",
    attribute: "悦",
    lines: [9, 9, 6],
  },
};

// 64卦名称映射
const hexagramNames: Record<number, { id: string; name: string; pinyin: string; symbol: string; upper: string; lower: string }> = {
  1: { id: "qian", name: "乾", pinyin: "qián", symbol: "☰☰", upper: "qian", lower: "qian" },
  2: { id: "kun", name: "坤", pinyin: "kūn", symbol: "☷☷", upper: "kun", lower: "kun" },
  3: { id: "zhun", name: "屯", pinyin: "zhūn", symbol: "☵☳", upper: "kan", lower: "zhen" },
  4: { id: "meng", name: "蒙", pinyin: "méng", symbol: "☶☵", upper: "gen", lower: "kan" },
  5: { id: "xu", name: "需", pinyin: "xū", symbol: "☵☰", upper: "kan", lower: "qian" },
  6: { id: "song", name: "讼", pinyin: "sòng", symbol: "☰☵", upper: "qian", lower: "kan" },
  7: { id: "shi", name: "师", pinyin: "shī", symbol: "☷☵", upper: "kun", lower: "kan" },
  8: { id: "bi", name: "比", pinyin: "bǐ", symbol: "☵☷", upper: "kan", lower: "kun" },
  9: { id: "xiaoxu", name: "小畜", pinyin: "xiǎo xù", symbol: "☴☰", upper: "xun", lower: "qian" },
  10: { id: "lü", name: "履", pinyin: "lǚ", symbol: "☰☱", upper: "qian", lower: "dui" },
  11: { id: "tai", name: "泰", pinyin: "tài", symbol: "☷☰", upper: "kun", lower: "qian" },
  12: { id: "pi", name: "否", pinyin: "pǐ", symbol: "☰☷", upper: "qian", lower: "kun" },
  13: { id: "tongren", name: "同人", pinyin: "tóng rén", symbol: "☲☰", upper: "li", lower: "qian" },
  14: { id: "dayou", name: "大有", pinyin: "dà yǒu", symbol: "☰☲", upper: "qian", lower: "li" },
  15: { id: "qian1", name: "谦", pinyin: "qiān", symbol: "☶☷", upper: "gen", lower: "kun" },
  16: { id: "yu", name: "豫", pinyin: "yù", symbol: "☷☳", upper: "kun", lower: "zhen" },
  17: { id: "sui", name: "随", pinyin: "suí", symbol: "☱☳", upper: "dui", lower: "zhen" },
  18: { id: "gu", name: "蛊", pinyin: "gǔ", symbol: "☶☴", upper: "gen", lower: "xun" },
  19: { id: "lin", name: "临", pinyin: "lín", symbol: "☷☱", upper: "kun", lower: "dui" },
  20: { id: "guan", name: "观", pinyin: "guān", symbol: "☴☷", upper: "xun", lower: "kun" },
  21: { id: "shihe", name: "噬嗑", pinyin: "shì kè", symbol: "☲☳", upper: "li", lower: "zhen" },
  22: { id: "bi1", name: "贲", pinyin: "bì", symbol: "☶☲", upper: "gen", lower: "li" },
  23: { id: "bo", name: "剥", pinyin: "bō", symbol: "☶☷", upper: "gen", lower: "kun" },
  24: { id: "fu", name: "复", pinyin: "fù", symbol: "☷☳", upper: "kun", lower: "zhen" },
  25: { id: "wuwang", name: "无妄", pinyin: "wú wàng", symbol: "☰☳", upper: "qian", lower: "zhen" },
  26: { id: "daxu", name: "大畜", pinyin: "dà xù", symbol: "☶☰", upper: "gen", lower: "qian" },
  27: { id: "yi", name: "颐", pinyin: "yí", symbol: "☶☳", upper: "gen", lower: "zhen" },
  28: { id: "daguo", name: "大过", pinyin: "dà guò", symbol: "☱☴", upper: "dui", lower: "xun" },
  29: { id: "kan", name: "坎", pinyin: "kǎn", symbol: "☵☵", upper: "kan", lower: "kan" },
  30: { id: "li", name: "离", pinyin: "lí", symbol: "☲☲", upper: "li", lower: "li" },
  31: { id: "xian", name: "咸", pinyin: "xián", symbol: "☱☶", upper: "dui", lower: "gen" },
  32: { id: "heng", name: "恒", pinyin: "héng", symbol: "☴☳", upper: "xun", lower: "zhen" },
  33: { id: "dun", name: "遁", pinyin: "dùn", symbol: "☰☶", upper: "qian", lower: "gen" },
  34: { id: "dazhuang", name: "大壮", pinyin: "dà zhuàng", symbol: "☳☰", upper: "zhen", lower: "qian" },
  35: { id: "jin", name: "晋", pinyin: "jìn", symbol: "☲☷", upper: "li", lower: "kun" },
  36: { id: "mingyi", name: "明夷", pinyin: "míng yí", symbol: "☷☲", upper: "kun", lower: "li" },
  37: { id: "jiaren", name: "家人", pinyin: "jiā rén", symbol: "☴☲", upper: "xun", lower: "li" },
  38: { id: "kui", name: "睽", pinyin: "kuí", symbol: "☲☱", upper: "li", lower: "dui" },
  39: { id: "jian", name: "蹇", pinyin: "jiǎn", symbol: "☵☶", upper: "kan", lower: "gen" },
  40: { id: "jie", name: "解", pinyin: "xiè", symbol: "☳☵", upper: "zhen", lower: "kan" },
  41: { id: "sun", name: "损", pinyin: "sǔn", symbol: "☶☱", upper: "gen", lower: "dui" },
  42: { id: "yi1", name: "益", pinyin: "yì", symbol: "☴☳", upper: "xun", lower: "zhen" },
  43: { id: "guai", name: "夬", pinyin: "guài", symbol: "☱☰", upper: "dui", lower: "qian" },
  44: { id: "gou", name: "姤", pinyin: "gòu", symbol: "☰☴", upper: "qian", lower: "xun" },
  45: { id: "cui", name: "萃", pinyin: "cuì", symbol: "☱☷", upper: "dui", lower: "kun" },
  46: { id: "sheng", name: "升", pinyin: "shēng", symbol: "☷☴", upper: "kun", lower: "xun" },
  47: { id: "kun1", name: "困", pinyin: "kùn", symbol: "☱☵", upper: "dui", lower: "kan" },
  48: { id: "jing", name: "井", pinyin: "jǐng", symbol: "☵☴", upper: "kan", lower: "xun" },
  49: { id: "ge", name: "革", pinyin: "gé", symbol: "☱☲", upper: "dui", lower: "li" },
  50: { id: "ding", name: "鼎", pinyin: "dǐng", symbol: "☲☴", upper: "li", lower: "xun" },
  51: { id: "zhen", name: "震", pinyin: "zhèn", symbol: "☳☳", upper: "zhen", lower: "zhen" },
  52: { id: "gen", name: "艮", pinyin: "gèn", symbol: "☶☶", upper: "gen", lower: "gen" },
  53: { id: "jian1", name: "渐", pinyin: "jiàn", symbol: "☴☶", upper: "xun", lower: "gen" },
  54: { id: "guimei", name: "归妹", pinyin: "guī mèi", symbol: "☱☳", upper: "dui", lower: "zhen" },
  55: { id: "feng", name: "丰", pinyin: "fēng", symbol: "☲☳", upper: "li", lower: "zhen" },
  56: { id: "lü1", name: "旅", pinyin: "lǚ", symbol: "☶☲", upper: "gen", lower: "li" },
  57: { id: "xun", name: "巽", pinyin: "xùn", symbol: "☴☴", upper: "xun", lower: "xun" },
  58: { id: "dui", name: "兑", pinyin: "duì", symbol: "☱☱", upper: "dui", lower: "dui" },
  59: { id: "huan", name: "涣", pinyin: "huàn", symbol: "☴☵", upper: "xun", lower: "kan" },
  60: { id: "jie1", name: "节", pinyin: "jié", symbol: "☵☱", upper: "kan", lower: "dui" },
  61: { id: "zhongfu", name: "中孚", pinyin: "zhōng fú", symbol: "☱☴", upper: "dui", lower: "xun" },
  62: { id: "xiaoguo", name: "小过", pinyin: "xiǎo guò", symbol: "☶☳", upper: "gen", lower: "zhen" },
  63: { id: "jiji", name: "既济", pinyin: "jì jì", symbol: "☵☲", upper: "kan", lower: "li" },
  64: { id: "weiji", name: "未济", pinyin: "wèi jì", symbol: "☲☵", upper: "li", lower: "kan" },
};

// 生成64卦完整数据
function generateHexagrams(): Hexagram[] {
  const result: Hexagram[] = [];
  const hexagramMap = new Map<string, string>();

  // 第一遍：生成基础数据并构建查找表
  for (let seq = 1; seq <= 64; seq++) {
    const info = hexagramNames[seq];
    const texts = hexagramTexts[seq];

    if (!info || !texts) continue;

    // 根据上下卦生成六爻
    const upperLines = trigrams[info.upper]?.lines || [6, 6, 6];
    const lowerLines = trigrams[info.lower]?.lines || [6, 6, 6];
    const lines: YaoType[] = [...lowerLines, ...upperLines];

    // 添加到查找表
    hexagramMap.set(linesToKey(lines), info.id);

    // 生成爻辞（简化版）
    const yaoCi = generateYaoCi(seq);
    const yaoCiVernacular = generateYaoCiVernacular(seq);

    const hexagram: Hexagram = {
      id: info.id,
      sequence: seq,
      name: info.name,
      pinyin: info.pinyin,
      symbol: info.symbol,
      lines: lines,
      upperTrigram: info.upper as any,
      lowerTrigram: info.lower as any,
      original: {
        guaCi: texts.guaCi,
        tuanCi: texts.tuanCi,
        xiangCi: texts.xiangCi,
        yaoCi: yaoCi,
        xiaoXiang: generateXiaoXiang(seq),
        wenYan: texts.wenYan,
      },
      vernacular: {
        guaCi: texts.guaCiVernacular,
        tuanCi: texts.tuanCiVernacular,
        xiangCi: texts.xiangCiVernacular,
        yaoCi: yaoCiVernacular,
        xiaoXiang: generateXiaoXiangVernacular(seq),
        wenYan: texts.wenYanVernacular,
      },
      relations: {
        cuoGua: "qian", // 临时值，将在第二遍更新
        zongGua: "qian",
        jiaoGua: "qian",
        huGua: "qian",
      },
      seo: {
        title: `${info.name}卦 - ${info.symbol} | 周易六十四卦详解`,
        description: texts.description,
        keywords: [info.name + "卦", info.symbol, "周易", "易经", "卦辞", "爻辞"],
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${info.name}卦详解 - ${info.symbol}`,
          description: texts.description,
        },
      },
    };

    result.push(hexagram);
  }

  // 第二遍：计算关系卦
  for (const hexagram of result) {
    hexagram.relations = {
      cuoGua: generateCuoGua(hexagram.lines, hexagramMap),
      zongGua: generateZongGua(hexagram.lines, hexagramMap),
      jiaoGua: generateJiaoGua(hexagram.lines, hexagramMap),
      huGua: generateHuGua(hexagram.lines, hexagramMap),
    };
  }

  return result;
}


// 生成爻辞
function generateYaoCi(seq: number): string[] {
  const data = yaoData[seq];
  if (data) {
    return data.map(item => item.original);
  }
  return ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];
}

// 生成爻辞白话
function generateYaoCiVernacular(seq: number): string[] {
  const data = yaoData[seq];
  if (data) {
    return data.map(item => item.vernacular);
  }
  return ["初爻白话解释", "二爻白话解释", "三爻白话解释", "四爻白话解释", "五爻白话解释", "上爻白话解释"];
}

// 生成小象
function generateXiaoXiang(seq: number): string[] {
  const data = yaoData[seq];
  if (data) {
    return data.map(item => item.xiaoXiang);
  }
  return ["小象一", "小象二", "小象三", "小象四", "小象五", "小象六"];
}

// 生成小象白话
function generateXiaoXiangVernacular(seq: number): string[] {
  const data = yaoData[seq];
  if (data) {
    return data.map(item => item.xiaoXiangVernacular);
  }
  return ["小象白话一", "小象白话二", "小象白话三", "小象白话四", "小象白话五", "小象白话六"];
}

// 计算错卦（阴阳全变）- 使用 linesToHexagramId 查找
function generateCuoGua(lines: YaoType[], hexagramMap: Map<string, string>): string {
  const changedLines = lines.map((line) => (line === 9 || line === 7 ? 6 : 9));
  const key = linesToKey(changedLines);
  return hexagramMap.get(key) || "qian";
}

// 计算综卦（上下颠倒）
function generateZongGua(lines: YaoType[], hexagramMap: Map<string, string>): string {
  const reversedLines = [...lines].reverse();
  const key = linesToKey(reversedLines);
  return hexagramMap.get(key) || "qian";
}

// 计算交卦（上下卦交换）
function generateJiaoGua(lines: YaoType[], hexagramMap: Map<string, string>): string {
  const lower = lines.slice(0, 3);
  const upper = lines.slice(3);
  const exchangedLines = [...upper, ...lower];
  const key = linesToKey(exchangedLines);
  return hexagramMap.get(key) || "qian";
}

// 计算互卦（取234爻为下卦，345爻为上卦）
function generateHuGua(lines: YaoType[], hexagramMap: Map<string, string>): string {
  const huLines = [lines[1], lines[2], lines[3], lines[2], lines[3], lines[4]];
  const key = linesToKey(huLines);
  return hexagramMap.get(key) || "qian";
}

// 将六爻转换为 key 用于查找
function linesToKey(lines: YaoType[]): string {
  return lines.map((l) => (l === 7 || l === 9 ? "1" : "0")).join("");
}

// 导出64卦数据
export const hexagrams: Hexagram[] = generateHexagrams();

// 卦象查找函数
export function getHexagramById(id: string): Hexagram | undefined {
  return hexagrams.find((h) => h.id === id);
}

export function getHexagramBySequence(sequence: number): Hexagram | undefined {
  return hexagrams.find((h) => h.sequence === sequence);
}

// 根据六爻查找卦象
export function getHexagramByLines(lines: YaoType[]): Hexagram | undefined {
  return hexagrams.find(
    (h) =>
      h.lines.length === lines.length &&
      h.lines.every((hLine, i) => {
        const inputLine = lines[i];
        // 7(少阳)和9(老阳)都是阳爻
        // 6(老阴)和8(少阴)都是阴爻
        const isInputYang = inputLine === 7 || inputLine === 9;
        // 数据库中存储的卦象使用9表示阳，6表示阴
        const isHLineYang = hLine === 7 || hLine === 9;
        return isInputYang === isHLineYang;
      })
  );
}

// 根据二进制值查找卦象（阳爻=1，阴爻=0，从下到上）
export function getHexagramByBinaryValue(value: number): Hexagram | undefined {
  const lines: YaoType[] = [];
  for (let i = 0; i < 6; i++) {
    const bit = (value >> i) & 1;
    lines.push(bit === 1 ? 9 : 6);
  }
  return getHexagramByLines(lines);
}

// 获取所有卦象
export function getAllHexagrams(): Hexagram[] {
  return [...hexagrams];
}

// 搜索卦象
export function searchHexagrams(query: string): Hexagram[] {
  const lowerQuery = query.toLowerCase();
  return hexagrams.filter(
    (h) =>
      h.name.includes(query) ||
      h.pinyin.toLowerCase().includes(lowerQuery) ||
      h.id.toLowerCase().includes(lowerQuery)
  );
}
