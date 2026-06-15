import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

export function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = useCallback(() => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }, [input]);

  const decode = useCallback(() => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError("");
    } catch (e) {
      setError(t("Invalid Base64 input", "无效的Base64输入"));
      setOutput("");
    }
  }, [input]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[150px] resize-y"
        placeholder={t("Enter text to encode/decode...", "输入要编码/解码的文本...")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={encode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Encode", "编码")}
        </button>
        <button
          onClick={decode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Decode", "解码")}
        </button>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

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
          <textarea
            readOnly
            className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm min-h-[100px] resize-y"
            value={output}
          />
        </div>
      )}
    </div>
  );
}
