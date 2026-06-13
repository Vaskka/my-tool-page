import { useState, useRef, useCallback } from "react";
import QRCode from "qrcode";

export function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(() => {
    if (!canvasRef.current || !text.trim()) {
      setError("Please enter text or URL");
      return;
    }
    setError("");
    QRCode.toCanvas(canvasRef.current, text, {
      width: size,
      color: { dark: fg, light: bg },
    }).catch((e: Error) => setError(e.message));
  }, [text, size, fg, bg]);

  const download = useCallback(() => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  }, []);

  return (
    <div className="space-y-4">
      <input
        type="text"
        className="w-full p-3 border border-slate-300 rounded-lg"
        placeholder="Enter URL or text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Size: {size}px
          </label>
          <input
            type="range"
            min={100}
            max={500}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Foreground</label>
            <input
              type="color"
              value={fg}
              onChange={(e) => setFg(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border border-slate-300"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Background</label>
            <input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border border-slate-300"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={generate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={!text.trim()}
        >
          Generate QR Code
        </button>
        <button
          onClick={download}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Download PNG
        </button>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <div className="flex justify-center p-4 border border-slate-300 rounded-lg bg-white">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
