import { Hexagram, YaoType, TrigramInfo } from "@/types";
import { hexagrams, trigrams, getHexagramByLines } from "@/data/hexagrams";

/**
 * 计算错卦（阴阳全变）
 * 所有阳爻变阴爻，阴爻变阳爻
 */
export function calculateCuoGua(hexagram: Hexagram): Hexagram | undefined {
  const changedLines = hexagram.lines.map((line) =>
    line === 9 || line === 7 ? 6 : 9
  ) as YaoType[];
  return getHexagramByLines(changedLines);
}

/**
 * 计算综卦（上下颠倒）
 * 六爻顺序完全颠倒
 */
export function calculateZongGua(hexagram: Hexagram): Hexagram | undefined {
  const reversedLines = [...hexagram.lines].reverse() as YaoType[];
  return getHexagramByLines(reversedLines);
}

/**
 * 计算交卦（上下卦交换）
 * 上卦变下卦，下卦变上卦
 */
export function calculateJiaoGua(hexagram: Hexagram): Hexagram | undefined {
  const lower = hexagram.lines.slice(0, 3);
  const upper = hexagram.lines.slice(3);
  const exchangedLines = [...upper, ...lower] as YaoType[];
  return getHexagramByLines(exchangedLines);
}

/**
 * 计算互卦（取234爻为下卦，345爻为上卦）
 */
export function calculateHuGua(hexagram: Hexagram): Hexagram | undefined {
  const huLines = [
    hexagram.lines[1],
    hexagram.lines[2],
    hexagram.lines[3],
    hexagram.lines[2],
    hexagram.lines[3],
    hexagram.lines[4],
  ] as YaoType[];
  return getHexagramByLines(huLines);
}

/**
 * 获取卦的所有关系卦
 */
export function getHexagramRelations(hexagram: Hexagram) {
  return {
    cuoGua: calculateCuoGua(hexagram),
    zongGua: calculateZongGua(hexagram),
    jiaoGua: calculateJiaoGua(hexagram),
    huGua: calculateHuGua(hexagram),
  };
}

/**
 * 获取上卦信息
 */
export function getUpperTrigram(hexagram: Hexagram): TrigramInfo | undefined {
  return trigrams[hexagram.upperTrigram];
}

/**
 * 获取下卦信息
 */
export function getLowerTrigram(hexagram: Hexagram): TrigramInfo | undefined {
  return trigrams[hexagram.lowerTrigram];
}

/**
 * 获取卦的五行属性（简化版）
 */
export function getWuxing(trigramId: string): string {
  const wuxingMap: Record<string, string> = {
    qian: "金",
    kun: "土",
    zhen: "木",
    xun: "木",
    kan: "水",
    li: "火",
    gen: "土",
    dui: "金",
  };
  return wuxingMap[trigramId] || "未知";
}

/**
 * 获取卦的方位
 */
export function getDirection(trigramId: string): string {
  const directionMap: Record<string, string> = {
    qian: "西北",
    kun: "西南",
    zhen: "东",
    xun: "东南",
    kan: "北",
    li: "南",
    gen: "东北",
    dui: "西",
  };
  return directionMap[trigramId] || "未知";
}

/**
 * 获取卦的六亲（简化版）
 */
export function getLiuQin(hexagram: Hexagram): string[] {
  // 简化处理，实际应根据日主计算
  return ["父母", "兄弟", "子孙", "妻财", "官鬼", "父母"];
}

/**
 * 判断卦是否为八纯卦（上下卦相同）
 */
export function isChunGua(hexagram: Hexagram): boolean {
  return hexagram.upperTrigram === hexagram.lowerTrigram;
}

/**
 * 判断卦是否游魂卦
 */
export function isYouHunGua(hexagram: Hexagram): boolean {
  // 游魂卦：第四爻为变爻的卦
  // 简化判断：世爻在四爻
  return false; // 需要更复杂的计算
}

/**
 * 判断卦是否归魂卦
 */
export function isGuiHunGua(hexagram: Hexagram): boolean {
  // 归魂卦：第三爻为变爻的卦
  // 简化判断：世爻在三爻
  return false; // 需要更复杂的计算
}

/**
 * 获取卦的简单解释
 */
export function getSimpleMeaning(hexagram: Hexagram): string {
  const meanings: Record<string, string> = {
    qian: "天行健，君子以自强不息",
    kun: "地势坤，君子以厚德载物",
    zhun: "云雷屯，君子以经纶",
    meng: "山下出泉，君子以果行育德",
    xu: "云上于天，君子以饮食宴乐",
    song: "天与水违行，君子以作事谋始",
    shi: "地中有水，君子以容民畜众",
    bi: "地上有水，先王以建万国",
    xiaoxu: "风行天上，君子以懿文德",
    lü: "上天下泽，君子以辨上下",
    tai: "天地交，后以财成天地之道",
    pi: "天地不交，君子以俭德辟难",
    tongren: "天与火，君子以类族辨物",
    dayou: "火在天上，君子以遏恶扬善",
    qian2: "地中有山，君子以裒多益寡",
    yu: "雷出地奋，先王以作乐崇德",
    sui: "泽中有雷，君子以向晦入宴息",
    gu: "山下有风，君子以振民育德",
    lin: "泽上有地，君子以教思无穷",
    guan: "风行地上，先王以省方观民",
    shihe: "雷电，先王以明罚敕法",
    bi2: "山下有火，君子以明庶政",
    bo: "山附于地，上以厚下安宅",
    fu: "雷在地中，先王以至日闭关",
    wuwang: "天下雷行，先王以茂对时",
    daxu: "天在山中，君子以多识前言往行",
    yi: "山下有雷，君子以慎言语节饮食",
    daguo: "泽灭木，君子以独立不惧",
    kan: "水洊至，君子以常德行习教事",
    li: "明两作，大人以继明照于四方",
    xian: "山上有泽，君子以虚受人",
    heng: "雷风，君子以立不易方",
    dun: "天下有山，君子以远小人",
    dazhuang: "雷在天上，君子以非礼弗履",
    jin: "明出地上，君子以自昭明德",
    mingyi: "明入地中，君子以莅众用晦",
    jiaren: "风自火出，君子以言有物行有恒",
    kui: "上火下泽，君子以同而异",
    jian2: "山上有水，君子以反身修德",
    jie: "雷雨作，君子以赦过宥罪",
    sun: "山下有泽，君子以惩忿窒欲",
    yi2: "风雷，君子以见善则迁",
    guai: "泽上于天，君子以施禄及下",
    gou: "天下有风，后以施命诰四方",
    cui: "泽上于地，君子以除戎器",
    sheng: "地中生木，君子以顺德积小",
    kun2: "泽无水，君子以致命遂志",
    jing: "木上有水，君子以劳民劝相",
    ge: "泽中有火，君子以治历明时",
    ding: "木上有火，君子以正位凝命",
    zhen2: "洊雷，君子以恐惧修省",
    gen2: "兼山，君子以思不出其位",
    jian3: "山上有木，君子以居贤德善俗",
    guimei: "泽上有雷，君子以永终知敝",
    feng: "雷电皆至，君子以折狱致刑",
    lü2: "山上有火，君子以明慎用刑",
    xun2: "随风，君子以申命行事",
    dui2: "丽泽，君子以朋友讲习",
    huan: "风行水上，先王以享于帝立庙",
    jie2: "泽上有水，君子以制数度议德行",
    zhongfu: "泽上有风，君子以议狱缓死",
    xiaoguo: "山上有雷，君子以行过乎恭",
    jiji: "水在火上，君子以思患预防",
    weiji: "火在水上，君子以慎辨物居方",
  };

  return meanings[hexagram.id] || hexagram.vernacular.xiangCi;
}

/**
 * 搜索卦象
 */
export function searchHexagrams(query: string): Hexagram[] {
  if (!query.trim()) return hexagrams;

  const lowerQuery = query.toLowerCase().trim();

  return hexagrams.filter((h) => {
    // 按名称搜索
    if (h.name.includes(query)) return true;
    // 按拼音搜索
    if (h.pinyin.toLowerCase().includes(lowerQuery)) return true;
    // 按ID搜索
    if (h.id.toLowerCase().includes(lowerQuery)) return true;
    // 按卦辞搜索
    if (h.original.guaCi.includes(query)) return true;
    // 按描述搜索
    if (h.vernacular.guaCi.includes(query)) return true;

    return false;
  });
}

/**
 * 按分类获取卦象
 */
export function getHexagramsByCategory(category: "all" | "chun" | "tong" | "yi"): Hexagram[] {
  switch (category) {
    case "chun": // 八纯卦
      return hexagrams.filter((h) => isChunGua(h));
    case "tong": // 通行本顺序（默认）
      return [...hexagrams].sort((a, b) => a.sequence - b.sequence);
    case "yi": // 以易排序
      // 可以按其他方式排序
      return hexagrams;
    default:
      return hexagrams;
  }
}

/**
 * 获取八卦信息
 */
export function getAllTrigrams(): TrigramInfo[] {
  return Object.values(trigrams);
}

/**
 * 根据三爻获取八卦
 */
export function getTrigramByLines(lines: [YaoType, YaoType, YaoType]): TrigramInfo | undefined {
  return Object.values(trigrams).find(
    (t) => t.lines[0] === lines[0] && t.lines[1] === lines[1] && t.lines[2] === lines[2]
  );
}
