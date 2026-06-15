import { useState, useCallback, useEffect, useRef } from "react";
import { t } from "../../lib/i18n/react";

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const match = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!match) return null;
  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s: number;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    const v = Math.round(l * 255);
    return { r: v, g: v, b: v };
  }

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return {
    r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, h) * 255),
    b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  };
}

function parseRgb(str: string): { r: number; g: number; b: number } | null {
  const match = str.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (!match) return null;
  return { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]) };
}

function parseHsl(str: string): { h: number; s: number; l: number } | null {
  const match = str.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (!match) return null;
  return { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) };
}

export function ColorConverter() {
  const [color, setColor] = useState("#2563eb");
  const [hex, setHex] = useState("#2563eb");
  const [rgb, setRgb] = useState("rgb(37, 99, 235)");
  const [hsl, setHsl] = useState("hsl(221, 83%, 53%)");
  const [copiedHex, setCopiedHex] = useState(false);
  const [copiedRgb, setCopiedRgb] = useState(false);
  const [copiedHsl, setCopiedHsl] = useState(false);

  const sourceRef = useRef<string>("hex");

  const updateFromRgb = useCallback((r: number, g: number, b: number) => {
    setHex(rgbToHex(r, g, b));
    setRgb(`rgb(${r}, ${g}, ${b})`);
    const hslVal = rgbToHsl(r, g, b);
    setHsl(`hsl(${hslVal.h}, ${hslVal.s}%, ${hslVal.l}%)`);
    setColor(rgbToHex(r, g, b));
  }, []);

  const updateFromHsl = useCallback((h: number, s: number, l: number) => {
    const rgbVal = hslToRgb(h, s, l);
    setHex(rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b));
    setRgb(`rgb(${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b})`);
    setHsl(`hsl(${h}, ${s}%, ${l}%)`);
    setColor(rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b));
  }, []);

  const handleHexChange = useCallback(
    (value: string) => {
      setHex(value);
      const parsed = hexToRgb(value);
      if (parsed) {
        updateFromRgb(parsed.r, parsed.g, parsed.b);
      }
    },
    [updateFromRgb]
  );

  const handleRgbChange = useCallback(
    (value: string) => {
      setRgb(value);
      const parsed = parseRgb(value);
      if (parsed && parsed.r <= 255 && parsed.g <= 255 && parsed.b <= 255) {
        updateFromRgb(parsed.r, parsed.g, parsed.b);
      }
    },
    [updateFromRgb]
  );

  const handleHslChange = useCallback(
    (value: string) => {
      setHsl(value);
      const parsed = parseHsl(value);
      if (parsed && parsed.h <= 360 && parsed.s <= 100 && parsed.l <= 100) {
        updateFromHsl(parsed.h, parsed.s, parsed.l);
      }
    },
    [updateFromHsl]
  );

  const handleColorPickerChange = useCallback(
    (value: string) => {
      setColor(value);
      const parsed = hexToRgb(value);
      if (parsed) {
        updateFromRgb(parsed.r, parsed.g, parsed.b);
      }
    },
    [updateFromRgb]
  );

  const copy = useCallback(async (text: string, setter: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 1500);
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={color}
          onChange={(e) => handleColorPickerChange(e.target.value)}
          className="w-14 h-14 rounded-lg border border-slate-300 cursor-pointer p-1"
        />
        <div
          className="w-14 h-14 rounded-lg border border-slate-300"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">{t("HEX", "HEX")}</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="flex-1 p-2.5 border border-slate-300 rounded-lg font-mono text-sm"
            />
            <button
              onClick={() => copy(hex, setCopiedHex)}
              className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
            >
              {copiedHex ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">{t("RGB", "RGB")}</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={rgb}
              onChange={(e) => handleRgbChange(e.target.value)}
              className="flex-1 p-2.5 border border-slate-300 rounded-lg font-mono text-sm"
            />
            <button
              onClick={() => copy(rgb, setCopiedRgb)}
              className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
            >
              {copiedRgb ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-500 uppercase">{t("HSL", "HSL")}</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={hsl}
              onChange={(e) => handleHslChange(e.target.value)}
              className="flex-1 p-2.5 border border-slate-300 rounded-lg font-mono text-sm"
            />
            <button
              onClick={() => copy(hsl, setCopiedHsl)}
              className="px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm shrink-0"
            >
              {copiedHsl ? t("Copied!", "已复制！") : t("Copy", "复制")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
