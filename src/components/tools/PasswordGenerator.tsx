import { useState, useCallback } from "react";

const CHAR_SETS: Record<string, string> = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?/~`",
};

function getStrength(password: string, types: number): { label: string; color: string; width: string } {
  const len = password.length;
  if (len < 8 || types < 2) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
  if (len < 12 || types < 3) return { label: "Medium", color: "bg-yellow-500", width: "w-2/4" };
  if (len < 16 || types < 4) return { label: "Strong", color: "bg-green-500", width: "w-3/4" };
  return { label: "Very Strong", color: "bg-emerald-500", width: "w-full" };
}

export function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleOption = useCallback((key: string) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  }, []);

  const generate = useCallback(() => {
    const activeSets = Object.entries(options)
      .filter(([, v]) => v)
      .map(([k]) => CHAR_SETS[k])
      .join("");

    if (!activeSets) {
      setPassword("");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += activeSets[array[i] % activeSets.length];
    }
    setPassword(result);
  }, [length, options]);

  const copy = useCallback(async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [password]);

  const activeTypes = Object.values(options).filter(Boolean).length;
  const strength = password ? getStrength(password, activeTypes) : null;

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">Length: {length}</label>
        </div>
        <input
          type="range"
          min={4}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>4</span>
          <span>64</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {Object.entries(options).map(([key, val]) => (
          <label key={key} className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={val}
              onChange={() => toggleOption(key)}
              className="accent-blue-600 w-4 h-4"
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      <button
        onClick={generate}
        disabled={activeTypes === 0}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Generate Password
      </button>

      {password && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 p-3 bg-slate-100 border border-slate-300 rounded-lg font-mono text-lg break-all select-all">
              {password}
            </div>
            <button
              onClick={copy}
              className="px-4 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-slate-500">Strength:</span>
              <span className={`text-xs font-semibold ${strength?.color.replace("bg-", "text-")}`}>
                {strength?.label}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full ${strength?.color} ${strength?.width} rounded-full transition-all duration-300`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
