import { useState, useCallback, useMemo } from "react";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est",
  "laborum", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam",
  "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae",
  "nunc", "sed", "velit", "dignissim", "sodales", "ultrices", "turpis", "egestas",
  "integer", "enim", "neque", "volutpat", "ac", "tincidunt", "vitae", "semper",
  "quis", "lectus", "nulla", "at", "volutpat", "diam", "mauris", "cursus", "mattis",
  "molestie", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo",
  "elit", "at", "imperdiet", "dui", "accumsan", "porttitor", "praesent", "semper",
  "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus"
];

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSentence(wordPool: string[], minWords: number, maxWords: number): string {
  const count = minWords + Math.floor(Math.random() * (maxWords - minWords + 1));
  const words: string[] = [];
  for (let i = 0; i < count; i++) {
    words.push(pickRandom(wordPool));
  }
  return capitalize(words[0]) + words.slice(1).join(" ") + ".";
}

function generateParagraph(wordPool: string[], startWithLorem: boolean): string {
  const sentenceCount = 3 + Math.floor(Math.random() * 5);
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(generateSentence(wordPool, 5, 15));
  }
  if (startWithLorem) {
    sentences[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }
  return sentences.join(" ");
}

export function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(5);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const paras: string[] = [];
    for (let i = 0; i < paragraphs; i++) {
      paras.push(generateParagraph(LOREM_WORDS, startWithLorem && i === 0));
    }
    setOutput(paras.join("\n\n"));
  }, [paragraphs, startWithLorem]);

  const copy = useCallback(async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [output]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4">
        <label className="text-sm text-slate-700">
          Paragraphs:
          <input
            type="number"
            min={1}
            max={50}
            value={paragraphs}
            onChange={(e) => {
              const v = Math.min(50, Math.max(1, Number(e.target.value) || 1));
              setParagraphs(v);
            }}
            className="ml-2 w-20 px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="accent-blue-600 w-4 h-4"
          />
          Start with "Lorem ipsum dolor sit amet..."
        </label>
      </div>

      <button
        onClick={generate}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Generate
      </button>

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              {output.split("\n\n").length} paragraphs, {output.split(/\s+/).length} words
            </span>
            <button
              onClick={copy}
              className="px-3 py-1 text-sm bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-700 leading-relaxed max-h-[400px] overflow-auto whitespace-pre-wrap">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
