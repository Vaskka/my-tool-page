import { useState, useCallback, useRef } from "react";

export function ImageToBase64() {
  const [base64, setBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [copiedBase64, setCopiedBase64] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedImg, setCopiedImg] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
      setPreviewUrl(result);

      const img = new Image();
      img.onload = () => {
        setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  }, []);

  const copy = useCallback(async (text: string, setter: (v: boolean) => void) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  const copyAsCss = useCallback(() => {
    const mime = base64.split(";")[0].split(":")[1] || "image/png";
    copy(`url(${base64})`, setCopiedCss);
  }, [base64, copy]);

  const copyAsImgTag = useCallback(() => {
    copy(`<img src="${base64}" alt="${fileName}" />`, setCopiedImg);
  }, [base64, fileName, copy]);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
          }}
          className="text-sm text-slate-700 file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
        />
      </div>

      {previewUrl && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="font-mono text-xs">{fileName}</span>
            {dimensions && (
              <span>
                {dimensions.width} x {dimensions.height}px
              </span>
            )}
            <span>{Math.round(base64.length / 1024)} KB</span>
          </div>

          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-full max-h-[300px] rounded-lg border border-slate-200 object-contain"
          />

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase">Base64 Data URI</span>
              <div className="flex gap-2">
                <button
                  onClick={() => copy(base64, setCopiedBase64)}
                  className="px-3 py-1 text-xs bg-slate-600 text-white rounded hover:bg-slate-700 transition-colors"
                >
                  {copiedBase64 ? "Copied!" : "Copy Base64"}
                </button>
                <button
                  onClick={copyAsCss}
                  className="px-3 py-1 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
                >
                  {copiedCss ? "Copied!" : "Copy as CSS"}
                </button>
                <button
                  onClick={copyAsImgTag}
                  className="px-3 py-1 text-xs bg-slate-500 text-white rounded hover:bg-slate-600 transition-colors"
                >
                  {copiedImg ? "Copied!" : "Copy as IMG"}
                </button>
              </div>
            </div>
            <textarea
              readOnly
              value={base64}
              className="w-full p-3 border border-slate-300 rounded-lg font-mono text-xs resize-y min-h-[100px] max-h-[200px] bg-slate-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}
