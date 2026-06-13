import { useState, useMemo, useCallback } from "react";

export function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    if (!text) {
      return {
        words: 0,
        chars: 0,
        charsNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        lines: 0,
        readingTime: 0,
      };
    }

    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0).length;
    const paragraphs = text
      .split(/\n\s*\n/)
      .filter((p) => p.trim().length > 0).length || (text.trim() ? 1 : 0);
    const lines = text.split(/\n/).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));

    return { words, chars, charsNoSpaces, sentences, paragraphs, lines, readingTime };
  }, [text]);

  const copy = useCallback(async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">Input</span>
        <button
          onClick={copy}
          disabled={!text}
          className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy Text"}
        </button>
      </div>

      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[250px] resize-y"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.words}</div>
          <div className="text-xs text-slate-500">Words</div>
        </div>
        <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.chars}</div>
          <div className="text-xs text-slate-500">Characters</div>
        </div>
        <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.charsNoSpaces}</div>
          <div className="text-xs text-slate-500">Chars (no spaces)</div>
        </div>
        <div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.readingTime} min</div>
          <div className="text-xs text-slate-500">Reading time</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-2 text-center text-sm">
          <span className="font-medium">{stats.sentences}</span>
          <span className="text-slate-500 block text-xs">Sentences</span>
        </div>
        <div className="p-2 text-center text-sm">
          <span className="font-medium">{stats.paragraphs}</span>
          <span className="text-slate-500 block text-xs">Paragraphs</span>
        </div>
        <div className="p-2 text-center text-sm">
          <span className="font-medium">{stats.lines}</span>
          <span className="text-slate-500 block text-xs">Lines</span>
        </div>
      </div>
    </div>
  );
}
