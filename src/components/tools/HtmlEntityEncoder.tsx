import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const DECODE_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&#x27;": "'",
};

function encodeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => ENTITY_MAP[char] || char);
}

function decodeHtml(str: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

const COMMON_ENTITIES = [
  { char: "&", entity: "&amp;", name: t("Ampersand", "与号") },
  { char: "<", entity: "&lt;", name: t("Less than", "小于号") },
  { char: ">", entity: "&gt;", name: t("Greater than", "大于号") },
  { char: '"', entity: "&quot;", name: t("Double quote", "双引号") },
  { char: "'", entity: "&#39;", name: t("Single quote", "单引号") },
  { char: "©", entity: "&copy;", name: t("Copyright", "版权") },
  { char: "®", entity: "&reg;", name: t("Registered", "注册商标") },
  { char: "™", entity: "&trade;", name: t("Trademark", "商标") },
  { char: "€", entity: "&euro;", name: t("Euro", "欧元") },
  { char: "£", entity: "&pound;", name: t("Pound", "英镑") },
  { char: "¥", entity: "&yen;", name: t("Yen", "日元") },
  { char: " ", entity: "&nbsp;", name: t("Non-breaking space", "不间断空格") },
];

export function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = useCallback(() => {
    setOutput(encodeHtml(input));
  }, [input]);

  const decode = useCallback(() => {
    setOutput(decodeHtml(input));
  }, [input]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="space-y-5">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[120px] resize-y"
        placeholder={t("Enter text to encode or HTML entities to decode...", "输入要编码的文本或要解码的HTML实体...")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          onClick={encode}
          disabled={!input.trim()}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("Encode", "编码")}
        </button>
        <button
          onClick={decode}
          disabled={!input.trim()}
          className="px-5 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("Decode", "解码")}
        </button>
      </div>

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">{t("Result", "结果")}</span>
            <button
              onClick={copy}
              className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {copied ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm break-all whitespace-pre-wrap max-h-[300px] overflow-auto">
            {output}
          </div>
        </div>
      )}

      <div className="border-t border-slate-200 pt-4">
        <h3 className="text-sm font-semibold text-slate-600 mb-2">{t("Common HTML Entities", "常用HTML实体")}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 text-slate-500 font-medium">{t("Character", "字符")}</th>
                <th className="text-left py-2 text-slate-500 font-medium">{t("Entity", "实体")}</th>
                <th className="text-left py-2 text-slate-500 font-medium">{t("Name", "名称")}</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_ENTITIES.map((ent) => (
                <tr key={ent.entity} className="border-b border-slate-100">
                  <td className="py-2 font-mono text-slate-700">{ent.char}</td>
                  <td className="py-2 font-mono text-blue-600">{ent.entity}</td>
                  <td className="py-2 text-slate-500">{ent.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
