import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import { t } from "../../lib/i18n/react";

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedUrl, setCompressedUrl] = useState("");
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useState(0.7);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1920);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setOriginalSize(f.size);
    setOriginalUrl(URL.createObjectURL(f));
    setCompressedUrl("");
    setCompressedSize(0);
    setError("");
  }, []);

  const compress = useCallback(async () => {
    if (!file) return;
    setLoading(true);
    setError("");
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: Math.max(maxWidth, maxHeight),
        useWebWorker: true,
        quality,
      };
      const compressed = await imageCompression(file, options);
      setCompressedSize(compressed.size);
      setCompressedUrl(URL.createObjectURL(compressed));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, [file, quality, maxWidth, maxHeight]);

  const download = useCallback(() => {
    if (!compressedUrl || !file) return;
    const a = document.createElement("a");
    a.href = compressedUrl;
    a.download = `compressed_${file.name}`;
    a.click();
  }, [compressedUrl, file]);

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="w-full p-3 border border-slate-300 rounded-lg"
      />

      {originalUrl && (
        <div className="space-y-2">
          <p className="text-sm text-slate-600">
            {t("Original:", "原始：")} {formatBytes(originalSize)}
          </p>
          <img
            src={originalUrl}
            alt={t("Original", "原始图片")}
            className="max-w-full max-h-64 rounded-lg border border-slate-200"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            {t("Quality:", "质量：")} {quality}
          </label>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.1}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">{t("Max Width (px)", "最大宽度 (px)")}</label>
          <input
            type="number"
            value={maxWidth}
            onChange={(e) => setMaxWidth(Number(e.target.value) || 1920)}
            className="w-full p-2 border border-slate-300 rounded-lg"
            placeholder="1920"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">{t("Max Height (px)", "最大高度 (px)")}</label>
          <input
            type="number"
            value={maxHeight}
            onChange={(e) => setMaxHeight(Number(e.target.value) || 1920)}
            className="w-full p-2 border border-slate-300 rounded-lg"
            placeholder="1920"
          />
        </div>
      </div>

      <button
        onClick={compress}
        disabled={!file || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {loading ? t("Compressing...", "压缩中...") : t("Compress", "压缩")}
      </button>

      {error && <div className="text-sm text-red-600">{error}</div>}

      {compressedUrl && (
        <div className="space-y-2">
          <p className="text-sm text-slate-600">
            {t("Compressed: ", "已压缩：")}{formatBytes(compressedSize)} (
            {originalSize > 0
              ? ((1 - compressedSize / originalSize) * 100).toFixed(1) + "% saved"
              : ""}
            )
          </p>
          <img
            src={compressedUrl}
            alt={t("Compressed", "压缩后图片")}
            className="max-w-full max-h-64 rounded-lg border border-slate-200"
          />
          <button
            onClick={download}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {t("Download Compressed Image", "下载压缩图片")}
          </button>
        </div>
      )}
    </div>
  );
}
