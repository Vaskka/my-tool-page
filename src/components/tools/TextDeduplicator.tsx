import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

type SortMode = "remove-duplicates" | "sort-asc" | "sort-desc" | null;

export function TextDeduplicator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("remove-duplicates");
  const [trimWhitespace, setTrimWhitespace] = useState(true);
  const [stats, setStats] = useState<{ original: number; unique: number; removed: number } | null>(null);
  const [copied, setCopied] = useState(false);

  const process = useCallback(() => {
    let lines = input.split("\n");
    if (trimWhitespace) {
      lines = lines.map((l) => l.trim()).filter((l) => l !== "");
    }

    const originalCount = lines.length;
    let processed: string[];

    if (sortMode === "remove-duplicates") {
      const seen = new Set<string>();
      processed = lines.filter((l) => {
        if (seen.has(l)) return false;
        seen.add(l);
        return true;
      });
    } else if (sortMode === "sort-asc") {
      const seen = new Set(lines);
      processed = Array.from(seen).sort((a, b) => a.localeCompare(b));
    } else if (sortMode === "sort-desc") {
      const seen = new Set(lines);
      processed = Array.from(seen).sort((a, b) => b.localeCompare(a));
    } else {
      processed = lines;
    }

    setOutput(processed.join("\n"));
    setStats({
      original: originalCount,
      unique: processed.length,
      removed: originalCount - processed.length,
    });
  }, [input, sortMode, trimWhitespace]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[180px] resize-y"
        placeholder={t("Paste your text here, one entry per line...", "在此粘贴文本，每行一个条目...")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-3">
        <div className="flex flex-wrap gap-2">
          {([
            { label: t("Remove duplicates", "去除重复"), value: "remove-duplicates" as SortMode },
            { label: t("Sort A-Z", "按字母排序（A-Z）"), value: "sort-asc" as SortMode },
            { label: t("Sort Z-A", "按字母排序（Z-A）"), value: "sort-desc" as SortMode },
          ]).map((opt) => (
            <label
              key={opt.value}
              className={`px-3 py-1.5 text-sm rounded-lg border cursor-pointer transition-colors ${
                sortMode === opt.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200"
              }`}
            >
              <input
                type="radio"
                name="sortMode"
                className="sr-only"
                checked={sortMode === opt.value}
                onChange={() => setSortMode(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={trimWhitespace}
            onChange={(e) => setTrimWhitespace(e.target.checked)}
            className="accent-blue-600 w-4 h-4"
          />
          {t("Trim whitespace", "去除首尾空格")}
        </label>
      </div>

      <button
        onClick={process}
        disabled={!input.trim()}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t("Process", "处理")}
      </button>

      {stats && (
        <div className="flex gap-4 text-sm text-slate-500">
          <span>{t("Original:", "原始：")} {stats.original}</span>
          <span>{t("Unique:", "唯一：")} {stats.unique}</span>
          <span>{t("Duplicates removed:", "已去除重复：")} {stats.removed}</span>
        </div>
      )}

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
            className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[180px] resize-y bg-slate-50"
            value={output}
          />
        </div>
      )}
    </div>
  );
}
