import { useState, useCallback } from "react";
import CryptoJS from "crypto-js";
import { t } from "../../lib/i18n/react";

type HashAlgo = "MD5" | "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";

const HASH_FUNCTIONS: Record<HashAlgo, (text: string) => string> = {
  "MD5": (t) => CryptoJS.MD5(t).toString(),
  "SHA-1": (t) => CryptoJS.SHA1(t).toString(),
  "SHA-256": (t) => CryptoJS.SHA256(t).toString(),
  "SHA-384": (t) => CryptoJS.SHA384(t).toString(),
  "SHA-512": (t) => CryptoJS.SHA512(t).toString(),
};

export function HashGenerator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Partial<Record<HashAlgo, string>>>({});
  const [copiedAlgo, setCopiedAlgo] = useState<HashAlgo | null>(null);

  const hashAll = useCallback(() => {
    if (!input.trim()) return;
    const newResults: Partial<Record<HashAlgo, string>> = {};
    for (const [algo, fn] of Object.entries(HASH_FUNCTIONS)) {
      newResults[algo as HashAlgo] = fn(input);
    }
    setResults(newResults);
  }, [input]);

  const hashOne = useCallback(
    (algo: HashAlgo) => {
      if (!input.trim()) return;
      setResults((prev) => ({ ...prev, [algo]: HASH_FUNCTIONS[algo](input) }));
    },
    [input]
  );

  const copy = useCallback(async (text: string, algo: HashAlgo) => {
    await navigator.clipboard.writeText(text);
    setCopiedAlgo(algo);
    setTimeout(() => setCopiedAlgo(null), 1500);
  }, []);

  return (
    <div className="space-y-5">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[120px] resize-y"
        placeholder={t("Enter text to hash...", "输入要哈希的文本...")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={hashAll}
          disabled={!input.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t("Hash All", "计算全部")}
        </button>
        {Object.keys(HASH_FUNCTIONS).map((algo) => (
          <button
            key={algo}
            onClick={() => hashOne(algo as HashAlgo)}
            disabled={!input.trim()}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {algo}
          </button>
        ))}
      </div>

      {Object.keys(results).length > 0 && (
        <div className="space-y-3">
          {Object.entries(results).map(([algo, hash]) => (
            <div key={algo} className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">{algo}</label>
              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value={hash}
                  className="flex-1 p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm text-slate-600"
                />
                <button
                  onClick={() => copy(hash, algo as HashAlgo)}
                  className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
                >
                  {copiedAlgo === algo ? t("Copied!", "已复制！") : t("Copy", "复制")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
