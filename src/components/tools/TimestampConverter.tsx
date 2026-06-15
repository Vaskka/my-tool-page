import { useState, useCallback } from "react";
import { t } from "../../lib/i18n/react";

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
      setError(t("Please enter a valid number", "请输入有效的数字"));
      setDateResult(null);
      return;
    }
    setError("");
    const ms = isMs ? num : num * 1000;
    setDateResult(new Date(ms));
  }, [timestamp, isMs]);

  const convertToTimestamp = useCallback(() => {
    if (!datePicker) {
      setError(t("Please select a date", "请选择日期"));
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
          {t("Timestamp to Date", "时间戳转日期")}
        </h3>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded-lg font-mono"
          placeholder={t("Enter timestamp...", "输入时间戳...")}
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
          {t("Milliseconds", "毫秒")}
        </label>
        <button
          onClick={convertToDate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!timestamp.trim()}
        >
          {t("Convert to Date", "转换为日期")}
        </button>

        {dateResult && (
          <div className="space-y-2 p-4 border border-slate-300 rounded-lg bg-slate-50">
            <p className="text-sm font-mono">
              <span className="text-slate-500">{t("ISO:", "ISO：")}</span>{" "}
              {dateResult.toISOString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">{t("UTC:", "UTC：")}</span>{" "}
              {dateResult.toUTCString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">{t("Local:", "本地：")}</span>{" "}
              {dateResult.toLocaleString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">{t("Locale Date:", "本地日期：")}</span>{" "}
              {dateResult.toLocaleDateString()}
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-500">{t("Locale Time:", "本地时间：")}</span>{" "}
              {dateResult.toLocaleTimeString()}
            </p>
          </div>
        )}
      </div>

      <hr className="border-slate-200" />

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-700">
          {t("Date to Timestamp", "日期转时间戳")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
              <label className="block text-sm text-slate-600 mb-1">{t("Date", "日期")}</label>
            <input
              type="date"
              value={datePicker}
              onChange={(e) => setDatePicker(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg"
            />
          </div>
          <div>
              <label className="block text-sm text-slate-600 mb-1">{t("Time", "时间")}</label>
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
            {t("Convert to Timestamp", "转换为时间戳")}
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
                {copied ? t("Copied!", "已复制！") : t("Copy", "复制")}
              </button>
            </>
          )}
        </div>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
    </div>
  );
}
