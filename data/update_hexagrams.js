const fs = require('fs');
const path = require('path');

const ichingData = JSON.parse(fs.readFileSync('./iching_data.json', 'utf8'));
const xiangData = JSON.parse(fs.readFileSync('./xiang_data.json', 'utf8'));

// 1. Map to yaoCi (original)
const yaoCiMap = {};
const yaoCiVernacularMap = {}; // Will keep empty for now unless found
const xiaoXiangMap = {};

ichingData.forEach(item => {
    const seq = item.id;
    // Get yaoCi (lines 1-6)
    const lines = item.lines.slice(0, 6).map(l => l.scripture);
    yaoCiMap[seq] = lines;
});

// 2. Map to xiaoXiang
for (let seq = 1; seq <= 64; seq++) {
    const lines = [];
    for (let line = 1; line <= 6; line++) {
        const key = `iching__${seq}_${line}`;
        lines.push(xiangData[key] || `小象${line}`);
    }
    xiaoXiangMap[seq] = lines;
}

// 3. Read hexagrams.ts
const hexFilePath = './hexagrams.ts';
let content = fs.readFileSync(hexFilePath, 'utf8');

// 4. Update generateYaoCi function
const yaoCiCode = `function generateYaoCi(seq: number): string[] {\n  const yaoCiMap: Record<number, string[]> = ${JSON.stringify(yaoCiMap, null, 4)};\n  return yaoCiMap[seq] || ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];\n}`;
content = content.replace(/function generateYaoCi[\s\S]*?}/, yaoCiCode);

// 5. Update generateXiaoXiang function
const xiaoXiangCode = `function generateXiaoXiang(seq: number): string[] {\n  const xiaoXiangMap: Record<number, string[]> = ${JSON.stringify(xiaoXiangMap, null, 4)};\n  return xiaoXiangMap[seq] || ["小象一", "小象二", "小象三", "小象四", "小象五", "小象六"];\n}`;
content = content.replace(/function generateXiaoXiang[\s\S]*?}/, xiaoXiangCode);

// 6. Write back
fs.writeFileSync(hexFilePath, content);
console.log('Successfully updated hexagrams.ts');
