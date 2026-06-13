import { useState, useCallback } from "react";

export function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [isMs, setIsMs] = useState(false);
  const [dateResult, setDateResult] = useState<Date | null>(null);
  const [datePicker, setDatePicker] = useState("");
  const [timePicker, setTimePicker] = useState("");
  const [tsResult, setTsResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToDate = useCallback(() => {
    const num = Number(timestamp);
    if (!timestamp.trim() || isNaN(num)) {
      setError("Please enter a valid number");
      setDateResult(null);
      return;
    }
    setError("");
    const ms = isMs ? num : num * 1000;
    setDateResult(new Date(ms));
  }, [timestamp, isMs]);

  const convertToTimestamp = useCallback(() => {
    if (!datePicker) {
      setError("Please select a date");
      return;
    }
    setError("");
    const dtStr = timePicker
      ? `${datePicker}T${timePicker}`
      : `${datePicker}T00:00:00`;
    const date = new Date(dtStr);
    setTsResult(String(isMs ? date.getTime() : Math.floor(date.getTime() / 1000)));
  }, [datePicker, timePicker, isMs]);

  const copyResult = useCallback(async () => {
    if (!tsResult) return;
    await navigator.clipboard.writeText(tsResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [tsResult]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-700">
          Timestamp → Date
        </h3>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded-lg font-mono"
          placeholder="Enter timestamp..."
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={isMs}
            onChange={(e) => setIsMs(e.target.checked)}
            className="rounded"
          />
          Milliseconds
        </label>
        <button
          onClick={convertToDate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!timestamp.trim()}
        >
          Convert to Date
        </button>

        {dateResult && (
          <div className="space-y-2 p-4 border border-slate-300 rounded-lg bg-slate-50">
            <p className="text-sm font-mono">
              <span className="text-slate-500">ISO:</span>{" "}
              {dateResult.toISOString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">UTC:</span>{" "}
              {dateResult.toUTCString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">Local:</span>{" "}
              {dateResult.toLocaleString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">Locale Date:</span>{" "}
              {dateResult.toLocaleDateString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">Locale Time:</span>{" "}
              {dateResult.toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>

      <hr className="border-slate-200" />

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-700">
          Date → Timestamp
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Date</label>
            <input
              type="date"
              value={datePicker}
              onChange={(e) => setDatePicker(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Time</label>
            <input
              type="time"
              value={timePicker}
              onChange={(e) => setTimePicker(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={convertToTimestamp}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!datePicker}
          >
            Convert to Timestamp
          </button>
          {tsResult && (
            <>
              <span className="font-mono text-sm px-3 py-1 bg-slate-100 rounded-lg">
                {tsResult}
              </span>
              <button
                onClick={copyResult}
                className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </>
          )}
        </div>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
    </div>
  );
}
