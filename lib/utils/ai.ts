export interface InterpretationRequest {
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
    model?: string; // Optional model selection
}

export async function callAIInterpretation(data: InterpretationRequest) {
    const provider = data.model || "kimi";
    let apiKey = "";
    let baseUrl = "";
    let modelName = "";

    switch (provider) {
        case "kimi":
            apiKey = process.env.KIMI_API_KEY || "";
            baseUrl = "https://api.moonshot.cn/v1";
            modelName = "kimi-k2-turbo-preview";
            break;
        case "deepseek":
            apiKey = process.env.DEEPSEEK_API_KEY || "";
            baseUrl = "https://api.deepseek.com/v1";
            modelName = "deepseek-chat";
            break;
        case "minimax":
            apiKey = process.env.MINIMAX_API_KEY || "";
            baseUrl = "https://api.minimax.chat/v1";
            modelName = "abab6.5-chat";
            break;
        default:
            apiKey = process.env.KIMI_API_KEY || "";
            baseUrl = "https://api.moonshot.cn/v1";
            modelName = "moonshot-v1-8k";
    }

    if (!apiKey) {
        throw new Error(`${provider.toUpperCase()} API key not configured`);
    }

    const prompt = buildPrompt(data);

    try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: modelName,
                messages: [
                    {
                        role: "system",
                        content: "你是一位精通周易与中国传统文化的智者，擅长以辩证、睿智且通俗易懂的方式解析卦象，并结合现代生活提供极具参考价值的行为建议。",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || `${provider.toUpperCase()} API call failed`);
        }

        const result = await response.json();
        return result.choices[0].message.content;
    } catch (error) {
        console.error("AI Interpretation error:", error);
        throw error;
    }
}

function buildPrompt({
    hexagram,
    changedHexagram,
    question,
    changingLines,
}: InterpretationRequest): string {
    let prompt = `请作为周易智者，为我解读以下卦象：

【本卦】：${hexagram.name}卦
【卦辞】：${hexagram.guaCi}
`;

    if (changingLines.length > 0) {
        prompt += `【变爻位置】：第${changingLines.sort().join("、")}爻\n`;
        prompt += `【变爻爻辞】：\n`;
        changingLines.sort().forEach((pos) => {
            prompt += `  - 第${pos}爻：${hexagram.yaoCi[pos - 1]}\n`;
        });
    }

    if (changedHexagram) {
        prompt += `
【变卦】：${changedHexagram.name}卦
【变卦卦辞】：${changedHexagram.guaCi}
`;
    }

    prompt += `
【所求问题】：${question}

请根据以上信息，提供深度、富有启发性的解读（Markdown格式）：

1. **卦象意蕴**：解析本卦的核心象征意义及其反映的当下局势本质。
2. **多维解析**：结合用户问题，分析其中的机遇、挑战与潜在变数。
3. **变卦启示**（如有）：分析事情发展的趋势及变卦带来的最终提示。
4. **智者建议**：提供3-5点具体、可操作的行为参考，帮助用户应对现状。

要求：辞达意诚，切中要害，避免空谈，字数控制在600字以内。`;

    return prompt;
}
