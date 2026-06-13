import { useState, useCallback, useMemo } from "react";

export function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("");
  const [testString, setTestString] = useState("");
  const [error, setError] = useState("");

  const handleFlagToggle = useCallback(
    (flag: string) => {
      setFlags((prev) =>
        prev.includes(flag) ? prev.replace(flag, "") : prev + flag
      );
    },
    []
  );

  const results = useMemo(() => {
    if (!pattern || !testString) return null;
    try {
      const regex = new RegExp(pattern, flags);
      const matches = [...testString.matchAll(regex)];
      if (matches.length === 0) return { count: 0, matches: [], highlighted: testString };

      const highlighted = testString.replace(regex, (match) =>
        `<mark class="bg-yellow-200 rounded px-0.5">${match}</mark>`
      );

      return {
        count: matches.length,
        matches: matches.map((m) => m[0]),
        highlighted,
      };
    } catch (e) {
      setError((e as Error).message);
      return null;
    }
  }, [pattern, flags, testString]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-slate-600 mb-1">Pattern</label>
          <input
            type="text"
            className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm"
            placeholder="/pattern/"
            value={pattern}
            onChange={(e) => {
              setPattern(e.target.value);
              setError("");
            }}
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Flags</label>
          <div className="flex gap-1">
            {["g", "i", "m"].map((flag) => (
              <button
                key={flag}
                onClick={() => handleFlagToggle(flag)}
                className={`px-3 py-2 text-sm font-mono rounded-lg border transition-colors ${
                  flags.includes(flag)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                }`}
              >
                {flag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[200px] resize-y"
        placeholder="Test string..."
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
      />

      {error && <div className="text-sm text-red-600">{error}</div>}

      {results && (
        <div className="space-y-3">
          <div className="flex gap-4 text-sm">
            <span className="font-medium">
              Matches: <span className="text-blue-600">{results.count}</span>
            </span>
          </div>

          {results.count > 0 && (
            <>
              <div className="p-3 border border-slate-300 rounded-lg bg-white text-sm leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{ __html: results.highlighted }}
                />
              </div>
              <details className="text-sm">
                <summary className="cursor-pointer text-slate-600 hover:text-slate-800">
                  Match list ({results.count})
                </summary>
                <ul className="mt-2 space-y-1 pl-4 list-disc">
                  {results.matches.map((m, i) => (
                    <li key={i} className="font-mono break-all">
                      {m}
                    </li>
                  ))}
                </ul>
              </details>
            </>
          )}
        </div>
      )}
    </div>
  );
}
