import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

export function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  const format = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
      setValid(true);
    } catch (e) {
      setError((e as Error).message);
      setValid(false);
      setOutput("");
    }
  }, [input]);

  const minify = useCallback(() => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
      setValid(true);
    } catch (e) {
      setError((e as Error).message);
      setValid(false);
      setOutput("");
    }
  }, [input]);

  const validate = useCallback(() => {
    try {
      JSON.parse(input);
      setError("");
      setValid(true);
      setOutput("");
    } catch (e) {
      setError((e as Error).message);
      setValid(false);
      setOutput("");
    }
  }, [input]);

  const escape = useCallback(() => {
    const result = input.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    setOutput(result);
    setError("");
    setValid(null);
  }, [input]);

  const unescape = useCallback(() => {
    const result = input.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    setOutput(result);
    setError("");
    setValid(null);
  }, [input]);

  const copy = useCallback(async () => {
    const text = output || input;
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output, input]);

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[200px] resize-y"
        placeholder={t('{"key": "value"}', '{"key": "value"}')}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Format", "格式化")}
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Minify", "压缩")}
        </button>
        <button
          onClick={validate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Validate", "验证")}
        </button>
        <button
          onClick={escape}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Escape", "转义")}
        </button>
        <button
          onClick={unescape}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          disabled={!input.trim()}
        >
          {t("Unescape", "反转义")}
        </button>
      </div>

      {valid !== null && (
        <div className={`text-sm font-medium ${valid ? "text-green-600" : "text-red-600"}`}>
          {valid ? `✓ ${t("Valid JSON", "有效的JSON")}` : `✗ ${error}`}
        </div>
      )}

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">{t("Output", "输出")}</span>
            <button
              onClick={copy}
              className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {copied ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
          <pre className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm overflow-auto max-h-[400px] whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
