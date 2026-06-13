import { useState, useCallback, useEffect, useRef } from "react";
import { diffLines } from "diff";

interface LineChange {
  value: string;
  added?: boolean;
  removed?: boolean;
}

export function TextDiff() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [changes, setChanges] = useState<LineChange[]>([]);
  const [stats, setStats] = useState({ added: 0, removed: 0 });
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedModified, setCopiedModified] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const compare = useCallback(() => {
    if (!original.trim() && !modified.trim()) {
      setChanges([]);
      setStats({ added: 0, removed: 0 });
      return;
    }

    const result = diffLines(original, modified);

    const lineChanges: LineChange[] = [];
    let addedCount = 0;
    let removedCount = 0;

    for (const part of result) {
      const lines = part.value.split("\n");
      // Remove trailing empty string from split
      if (lines[lines.length - 1] === "") {
        lines.pop();
      }
      for (const line of lines) {
        lineChanges.push({
          value: line,
          added: part.added || undefined,
          removed: part.removed || undefined,
        });
        if (part.added) addedCount++;
        if (part.removed) removedCount++;
      }
    }

    setChanges(lineChanges);
    setStats({ added: addedCount, removed: removedCount });
  }, [original, modified]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(compare, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [original, modified, compare]);

  const copy = useCallback(async (text: string, setter: (v: boolean) => void) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-500 uppercase">Original Text</label>
            <button
              onClick={() => copy(original, setCopiedOriginal)}
              className="px-2 py-0.5 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
            >
              {copiedOriginal ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[200px] resize-y"
            placeholder="Paste original text..."
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-500 uppercase">Modified Text</label>
            <button
              onClick={() => copy(modified, setCopiedModified)}
              className="px-2 py-0.5 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
            >
              {copiedModified ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[200px] resize-y"
            placeholder="Paste modified text..."
            value={modified}
            onChange={(e) => setModified(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={compare}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Compare Now
      </button>

      {(stats.added > 0 || stats.removed > 0) && (
        <div className="flex gap-4 text-sm">
          <span className="text-green-700 font-medium">+{stats.added} lines added</span>
          <span className="text-red-700 font-medium">-{stats.removed} lines removed</span>
        </div>
      )}

      {changes.length > 0 && (
        <div className="border border-slate-300 rounded-lg overflow-hidden">
          <div className="font-mono text-sm max-h-[500px] overflow-auto">
            {changes.map((change, i) => {
              let bg = "bg-slate-50";
              let prefix = "  ";
              if (change.added) {
                bg = "bg-green-100";
                prefix = "+ ";
              } else if (change.removed) {
                bg = "bg-red-100";
                prefix = "- ";
              }
              return (
                <div key={i} className={`flex ${bg} border-b border-slate-200 last:border-b-0`}>
                  <span className="w-8 text-right text-xs text-slate-400 px-2 py-1 select-none shrink-0 border-r border-slate-200">
                    {i + 1}
                  </span>
                  <span className="w-6 text-center text-xs px-1 py-1 select-none shrink-0 font-semibold">
                    {prefix}
                  </span>
                  <span className="flex-1 px-2 py-1 whitespace-pre-wrap break-all">
                    {change.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {original && modified && changes.length === 0 && (
        <p className="text-sm text-slate-400 text-center py-4">No differences found.</p>
      )}
    </div>
  );
}
