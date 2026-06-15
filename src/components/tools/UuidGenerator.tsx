import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

export function UuidGenerator() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const generateOne = useCallback(() => {
    const id = crypto.randomUUID();
    setUuid(id);
  }, []);

  const copy = useCallback(async () => {
    if (!uuid) return;
    await navigator.clipboard.writeText(uuid);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [uuid]);

  const generateMultiple = useCallback(() => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) {
      list.push(crypto.randomUUID());
    }
    setUuids(list);
  }, [count]);

  const copyOne = useCallback(async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  }, []);

  const copyAll = useCallback(async () => {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1500);
  }, [uuids]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{t("Generate Single UUID", "生成单个UUID")}</h3>
        <button
          onClick={generateOne}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {t("Generate UUID", "生成UUID")}
        </button>

        {uuid && (
          <div className="flex items-center gap-2">
            <div className="flex-1 p-3 bg-slate-100 border border-slate-300 rounded-lg font-mono text-lg break-all select-all">
              {uuid}
            </div>
            <button
              onClick={copy}
              className="px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
            >
              {copied ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 pt-6 space-y-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{t("Generate Multiple UUIDs", "生成多个UUID")}</h3>
        <div className="flex items-center gap-3">
          <label className="text-sm text-slate-700">
            {t("Count:", "数量：")}
            <input
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => {
                const v = Math.min(50, Math.max(1, Number(e.target.value) || 1));
                setCount(v);
              }}
              className="ml-2 w-20 px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
            />
          </label>
          <button
            onClick={generateMultiple}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            {t("Generate", "生成")}
          </button>
        </div>

        {uuids.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{uuids.length} {t("UUIDs generated", "个UUID已生成")}</span>
              <button
                onClick={copyAll}
                className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                {copiedAll ? t("Copied All!", "已全部复制！") : t("Copy All", "全部复制")}
              </button>
            </div>
            <div className="space-y-1 max-h-[300px] overflow-auto">
              {uuids.map((u, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded">
                  <span className="text-xs text-slate-400 w-6 text-right">{i + 1}</span>
                  <code className="flex-1 text-sm font-mono text-slate-700 break-all">{u}</code>
                  <button
                    onClick={() => copyOne(u, i)}
                    className="px-2 py-0.5 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors shrink-0"
                  >
                    {copiedIndex === i ? t("Copied!", "已复制！") : t("Copy", "复制")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-400">
          {t("UUID v4 \u2014 randomly generated. Format:", "UUID v4 随机生成。格式：")}{" "}
          <code className="bg-slate-100 px-1 rounded">xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx</code>
          {" "}{t("where", "，其中")}{" "}
          <code className="bg-slate-100 px-1 rounded">y</code>
          {" "}{t("is 8, 9, A, or B.", "y为8、9、A或B。")}
        </p>
      </div>
    </div>
  );
}
