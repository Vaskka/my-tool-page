import { useState, useCallback } from "react";

const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const DECODE_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&#x27;": "'",
};

function encodeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => ENTITY_MAP[char] || char);
}

function decodeHtml(str: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

const COMMON_ENTITIES = [
  { char: "&", entity: "&amp;", name: "Ampersand" },
  { char: "<", entity: "&lt;", name: "Less than" },
  { char: ">", entity: "&gt;", name: "Greater than" },
  { char: '"', entity: "&quot;", name: "Double quote" },
  { char: "'", entity: "&#39;", name: "Single quote" },
  { char: "©", entity: "&copy;", name: "Copyright" },
  { char: "®", entity: "&reg;", name: "Registered" },
  { char: "™", entity: "&trade;", name: "Trademark" },
  { char: "€", entity: "&euro;", name: "Euro" },
  { char: "£", entity: "&pound;", name: "Pound" },
  { char: "¥", entity: "&yen;", name: "Yen" },
  { char: " ", entity: "&nbsp;", name: "Non-breaking space" },
];

export function HtmlEntityEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = useCallback(() => {
    setOutput(encodeHtml(input));
  }, [input]);

  const decode = useCallback(() => {
    setOutput(decodeHtml(input));
  }, [input]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="space-y-5">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[120px] resize-y"
        placeholder="Enter text to encode or HTML entities to decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-2">
        <button
          onClick={encode}
          disabled={!input.trim()}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Encode
        </button>
        <button
          onClick={decode}
          disabled={!input.trim()}
          className="px-5 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decode
        </button>
      </div>

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Result</span>
            <button
              onClick={copy}
              className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm break-all whitespace-pre-wrap max-h-[300px] overflow-auto">
            {output}
          </div>
        </div>
      )}

      <div className="border-t border-slate-200 pt-4">
        <h3 className="text-sm font-semibold text-slate-600 mb-2">Common HTML Entities</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 text-slate-500 font-medium">Character</th>
                <th className="text-left py-2 text-slate-500 font-medium">Entity</th>
                <th className="text-left py-2 text-slate-500 font-medium">Name</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_ENTITIES.map((ent) => (
                <tr key={ent.entity} className="border-b border-slate-100">
                  <td className="py-2 font-mono text-slate-700">{ent.char}</td>
                  <td className="py-2 font-mono text-blue-600">{ent.entity}</td>
                  <td className="py-2 text-slate-500">{ent.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
