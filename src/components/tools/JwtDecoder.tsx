import { useState, useCallback } from "react";

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }
  try {
    const decoded = atob(base64);
    return JSON.parse(decoded);
  } catch {
    throw new Error("Failed to decode Base64URL string");
  }
}

export function JwtDecoder() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState<object | null>(null);
  const [payload, setPayload] = useState<object | null>(null);
  const [error, setError] = useState("");
  const [copiedHeader, setCopiedHeader] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const decode = useCallback(() => {
    setError("");
    setHeader(null);
    setPayload(null);

    const trimmed = input.trim();
    if (!trimmed) {
      setError("Please enter a JWT token");
      return;
    }

    const parts = trimmed.split(".");
    if (parts.length !== 3) {
      setError("Invalid JWT format. Expected 3 parts separated by dots (header.payload.signature)");
      return;
    }

    try {
      const decodedHeader = base64UrlDecode(parts[0]);
      setHeader(decodedHeader);
    } catch {
      setError("Failed to decode JWT header");
      return;
    }

    try {
      const decodedPayload = base64UrlDecode(parts[1]);
      setPayload(decodedPayload);
    } catch {
      setError("Failed to decode JWT payload");
    }
  }, [input]);

  const copy = useCallback(async (text: string, setter: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  return (
    <div className="space-y-5">
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg font-mono text-sm min-h-[120px] resize-y"
        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={decode}
        disabled={!input.trim()}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Decode
      </button>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">{error}</div>
      )}

      {header && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Header</span>
            <button
              onClick={() => copy(JSON.stringify(header, null, 2), setCopiedHeader)}
              className="px-3 py-1 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
            >
              {copiedHeader ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="p-3 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm text-slate-700 overflow-auto max-h-[300px] whitespace-pre-wrap">
            {JSON.stringify(header, null, 2)}
          </pre>
        </div>
      )}

      {payload && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Payload</span>
            <button
              onClick={() => copy(JSON.stringify(payload, null, 2), setCopiedPayload)}
              className="px-3 py-1 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
            >
              {copiedPayload ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="p-3 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm text-slate-700 overflow-auto max-h-[300px] whitespace-pre-wrap">
            {JSON.stringify(payload, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
