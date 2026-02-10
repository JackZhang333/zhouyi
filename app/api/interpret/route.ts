import { NextRequest, NextResponse } from "next/server";

interface InterpretationRequest {
  hexagram: {
    name: string;
    guaCi: string;
    yaoCi: string[];
  };
  changedHexagram?: {
    name: string;
    guaCi: string;
  } | null;
  question: string;
  changingLines: number[];
}

import { callAIInterpretation } from "@/lib/utils/ai";

export async function POST(request: NextRequest) {
  try {
    const body: InterpretationRequest = await request.json();

    // Check if any API keys are configured (fallback to Kimi)
    const apiKey = process.env.KIMI_API_KEY || process.env.DEEPSEEK_API_KEY || process.env.MINIMAX_API_KEY;

    if (!apiKey) {
      console.warn("No AI API keys are set, using mock response");
      const interpretation = generateMockInterpretation(body);
      return NextResponse.json({ interpretation, isMock: true });
    }

    const interpretation = await callAIInterpretation(body);
    return NextResponse.json({ interpretation });
  } catch (error: any) {
    console.error("Interpretation error:", error);
    return NextResponse.json(
      { error: error.message || "解读失败，请稍后重试" },
      { status: 500 }
    );
  }
}



function generateMockInterpretation({
  hexagram,
  question,
}: InterpretationRequest): string {
  return `### ${hexagram.name}卦 · 智者解读

**卦象概述**：
"${hexagram.name}"卦象征着当前正处于一个重要的转折点。卦辞中提到的"${hexagram.guaCi}"预示着事情的基础已经夯实，但仍需耐心等待时机的成熟。

**针对「${question}」的分析**：
从卦象来看，你所询问的事情展现出积极的势头。目前的阻碍更多是外部环境的暂时波动，而非内在逻辑的错误。只要保持定力，事情会有转机。

**行动建议**：
1. **静以待时**：当前不宜盲目出击，建议在接下来的周期内多做观察，积累资源。
2. **寻求外援**：可以向身边的长辈或行业资深人士请教，外部视角的点拨将非常关键。
3. **修养内在**：利用这段相对平静的时期提升专业技能，为后续的爆发做好准备。

*(注：由于未配置 AI API Key，当前显示为系统预设解读。)*`;
}
