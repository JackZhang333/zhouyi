import type { YaoType, Hexagram } from "@/types";
import { getHexagramByLines, hexagrams } from "@/data/hexagrams";

// Re-export YaoType for convenience
export type { YaoType };

// 铜钱正反面类型：head=字面(3), tail=背面(2)
export type CoinFace = "head" | "tail";

// 详细投掷结果
export interface CoinTossResult {
  coins: [CoinFace, CoinFace, CoinFace]; // 三枚铜钱各自正反
  yaoType: YaoType;                       // 6/7/8/9
}

/**
 * 投掷三枚铜钱，得到一个爻的值
 * 铜钱正面（字）为 3，反面（背）为 2
 * 三枚铜钱总和为 6、7、8、9
 * 6: 老阴 (少阴变爻) --- 变阳
 * 7: 少阳 (不变)    —
 * 8: 少阴 (不变)    - -
 * 9: 老阳 (少阳变爻) ——— 变阴
 */
export function tossCoins(): YaoType {
  return tossCoinsDetailed().yaoType;
}

/**
 * 投掷三枚铜钱，返回每枚铜钱的正反面和爻值
 */
export function tossCoinsDetailed(): CoinTossResult {
  const coinValues = [
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
  ] as const;

  const coins: [CoinFace, CoinFace, CoinFace] = [
    coinValues[0] === 3 ? "head" : "tail",
    coinValues[1] === 3 ? "head" : "tail",
    coinValues[2] === 3 ? "head" : "tail",
  ];

  const sum = coinValues[0] + coinValues[1] + coinValues[2];

  let yaoType: YaoType;
  switch (sum) {
    case 6: yaoType = 6; break; // 老阴 (三反面)
    case 7: yaoType = 7; break; // 少阳 (两反一正)
    case 8: yaoType = 8; break; // 少阴 (两正一反)
    case 9: yaoType = 9; break; // 老阳 (三正面)
    default: yaoType = 7; break;
  }

  return { coins, yaoType };
}

/**
 * 投掷六次，得到六爻
 * 从下到上排列（初爻到上爻）
 */
export function tossSixLines(): YaoType[] {
  const lines: YaoType[] = [];
  for (let i = 0; i < 6; i++) {
    lines.push(tossCoins());
  }
  return lines;
}

/**
 * 判断爻是否为阳爻（显示为 —）
 */
export function isYang(line: YaoType): boolean {
  return line === 7 || line === 9;
}

/**
 * 判断爻是否为变爻（老阴或老阳）
 */
export function isChanging(line: YaoType): boolean {
  return line === 6 || line === 9;
}

/**
 * 获取爻的显示类型
 */
export function getYaoDisplayType(line: YaoType): "yin" | "yang" | "changing-yin" | "changing-yang" {
  if (line === 6) return "changing-yin";
  if (line === 7) return "yang";
  if (line === 8) return "yin";
  return "changing-yang";
}

/**
 * 获取爻的名称
 */
export function getYaoName(line: YaoType): string {
  switch (line) {
    case 6:
      return "老阴";
    case 7:
      return "少阳";
    case 8:
      return "少阴";
    case 9:
      return "老阳";
    default:
      return "未知";
  }
}

/**
 * 获取爻的简短符号
 */
export function getYaoSymbol(line: YaoType): string {
  switch (line) {
    case 6:
      return "⚏"; // 老阴（变爻）
    case 7:
      return "⚊"; // 少阳
    case 8:
      return "⚋"; // 少阴
    case 9:
      return "⚌"; // 老阳（变爻）
    default:
      return "?";
  }
}

/**
 * 获取变爻后的爻值
 */
export function getChangedLine(line: YaoType): YaoType {
  if (line === 6) return 7; // 老阴变少阳
  if (line === 9) return 8; // 老阳变少阴
  return line; // 不变
}

/**
 * 获取变卦的六爻
 */
export function getChangedLines(lines: YaoType[]): YaoType[] {
  return lines.map(getChangedLine);
}

/**
 * 获取变爻的位置（1-6，从下到上）
 */
export function getChangingLinePositions(lines: YaoType[]): number[] {
  const positions: number[] = [];
  lines.forEach((line, index) => {
    if (isChanging(line)) {
      positions.push(index + 1); // 1-based index
    }
  });
  return positions;
}

/**
 * 获取本卦
 */
export function getOriginalHexagram(lines: YaoType[]): Hexagram | undefined {
  return getHexagramByLines(lines);
}

/**
 * 获取变卦
 */
export function getChangedHexagram(lines: YaoType[]): Hexagram | undefined {
  const changedLines = getChangedLines(lines);
  return getHexagramByLines(changedLines);
}

/**
 * 获取爻位名称（初、二、三、四、五、上）
 */
export function getYaoPositionName(position: number): string {
  const names = ["初", "二", "三", "四", "五", "上"];
  return names[position - 1] || "";
}

/**
 * 获取完整的爻称（如初九、六二等）
 */
export function getFullYaoName(position: number, line: YaoType): string {
  const positionName = getYaoPositionName(position);
  if (line === 6 || line === 8) {
    return `${positionName}六`;
  } else {
    return `${positionName}九`;
  }
}

/**
 * 摇卦结果
 */
export interface DivinationResult {
  lines: YaoType[];                    // 六爻结果
  originalHexagram: Hexagram | null;   // 本卦
  changedHexagram: Hexagram | null;    // 变卦（可能为null）
  changingLines: number[];             // 变爻位置
  timestamp: number;                   // 时间戳
}

/**
 * 执行完整摇卦
 */
export function performDivination(): DivinationResult {
  const lines = tossSixLines();
  const originalHexagram = getOriginalHexagram(lines) || null;
  const changedHexagram = getChangedHexagram(lines) || null;
  const changingLines = getChangingLinePositions(lines);

  return {
    lines,
    originalHexagram,
    changedHexagram,
    changingLines,
    timestamp: Date.now(),
  };
}

/**
 * 根据六爻数字生成二进制值（用于快速查找）
 * 阳爻(7,9)=1，阴爻(6,8)=0
 */
export function linesToBinary(lines: YaoType[]): number {
  let value = 0;
  for (let i = 0; i < 6; i++) {
    if (isYang(lines[i])) {
      value |= 1 << i;
    }
  }
  return value;
}

/**
 * 生成随机数（用于动画）
 */
export function getRandomCoinResult(): "head" | "tail" {
  return Math.random() < 0.5 ? "head" : "tail";
}

/**
 * 获取铜钱投掷的动画延迟时间
 */
export function getTossAnimationDuration(): number {
  // Shake(600) + Throw(500) + Spin(800) + Land(700) + Reveal(600) = 3200ms
  return 3200;
}

/**
 * 获取爻象绘制动画时间
 */
export function getYaoDrawDuration(): number {
  return 1000;
}

/**
 * 获取阶段延迟时间
 */
export function getPhaseDelay(): number {
  return 2000;
}
