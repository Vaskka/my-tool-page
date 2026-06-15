import { useState, useCallback } from "react";

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
        placeholder='{"key": "value"}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={format}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          Format
        </button>
        <button
          onClick={minify}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          Minify
        </button>
        <button
          onClick={validate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!input.trim()}
        >
          Validate
        </button>
        <button
          onClick={escape}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          disabled={!input.trim()}
        >
          Escape
        </button>
        <button
          onClick={unescape}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          disabled={!input.trim()}
        >
          Unescape
        </button>
      </div>

      {valid !== null && (
        <div className={`text-sm font-medium ${valid ? "text-green-600" : "text-red-600"}`}>
          {valid ? "✓ Valid JSON" : `✗ ${error}`}
        </div>
      )}

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Output</span>
            <button
              onClick={copy}
              className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
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
