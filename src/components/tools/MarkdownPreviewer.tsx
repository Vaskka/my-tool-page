import { useState, useCallback } from "react";
import { marked } from "marked";

export function MarkdownPreviewer() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const html = marked.parse(text) as string;

  const copyHtml = useCallback(async () => {
    if (!html) return;
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [html]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">Markdown</span>
        <button
          onClick={copyHtml}
          disabled={!text}
          className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy HTML"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <textarea
          className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[400px] resize-y"
          placeholder="# Markdown here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          className="w-full p-3 border border-slate-300 rounded-lg bg-white min-h-[400px] overflow-auto prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
