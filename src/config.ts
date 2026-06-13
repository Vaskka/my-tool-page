export const siteTitle = "DevToolsBox";
export const siteDescription =
  "Free online developer tools — JSON formatter, Base64 encoder, QR code generator, timestamp converter, and more. No sign-up required.";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "About", href: "/about/" },
];

export interface ToolMeta {
  title: string;
  description: string;
  slug: string;
  category: string;
  keywords: string[];
}

export const allTools: ToolMeta[] = [
  {
    title: "JSON Formatter",
    description: "Format, validate, and beautify JSON data instantly. Parse and fix malformed JSON with syntax highlighting.",
    slug: "json-formatter",
    category: "Developer",
    keywords: ["json formatter", "json beautifier", "json validator", "format json"],
  },
  {
    title: "Base64 Encoder / Decoder",
    description: "Encode text to Base64 or decode Base64 strings back to plain text. Supports UTF-8 and binary data.",
    slug: "base64-encoder",
    category: "Developer",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "decode base64"],
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes from URLs, text, or any data. Customizable size and color. Free, no sign-up needed.",
    slug: "qr-code-generator",
    category: "Utility",
    keywords: ["qr code generator", "qr code maker", "create qr code", "free qr code"],
  },
  {
    title: "URL Encoder / Decoder",
    description: "Encode special characters for URLs or decode percent-encoded URLs back to readable text.",
    slug: "url-encoder",
    category: "Developer",
    keywords: ["url encode", "url decode", "url encoder online", "percent encoding"],
  },
  {
    title: "Image Compressor",
    description: "Compress JPEG, PNG, and WebP images online. Reduce file size without losing quality. 100% client-side.",
    slug: "image-compressor",
    category: "Image",
    keywords: ["compress image", "image compressor", "reduce image size", "compress jpg"],
  },
  {
    title: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.",
    slug: "timestamp-converter",
    category: "Developer",
    keywords: ["timestamp converter", "unix timestamp", "epoch converter", "timestamp to date"],
  },
  {
    title: "Markdown Previewer",
    description: "Write and preview Markdown in real-time. See how your Markdown renders as HTML instantly.",
    slug: "markdown-previewer",
    category: "Developer",
    keywords: ["markdown preview", "markdown editor", "markdown to html", "md preview"],
  },
  {
    title: "Regex Tester",
    description: "Test regular expressions against text with real-time matching. See matches, groups, and replacements.",
    slug: "regex-tester",
    category: "Developer",
    keywords: ["regex tester", "regex test", "regular expression tester", "regex online"],
  },
  {
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs. Get reading time estimates for your text.",
    slug: "word-counter",
    category: "Text",
    keywords: ["word counter", "character counter", "word count", "count words"],
  },
  {
    title: "Password Generator",
    description: "Generate strong, secure passwords with customizable length, symbols, numbers, and case options.",
    slug: "password-generator",
    category: "Utility",
    keywords: ["password generator", "strong password", "random password", "secure password"],
  },
  {
    title: "UUID Generator",
    description: "Generate random UUIDs (v4) and GUIDs. Copy with one click. Perfect for developer testing.",
    slug: "uuid-generator",
    category: "Developer",
    keywords: ["uuid generator", "guid generator", "generate uuid", "uuid v4"],
  },
  {
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text input.",
    slug: "hash-generator",
    category: "Developer",
    keywords: ["md5 generator", "sha256", "hash generator", "sha1", "sha512 online"],
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate Lorem Ipsum placeholder text for your designs. Customize paragraph count and length.",
    slug: "lorem-ipsum",
    category: "Text",
    keywords: ["lorem ipsum", "placeholder text", "dummy text", "lorem ipsum generator"],
  },
  {
    title: "JWT Decoder",
    description: "Decode JWT tokens and inspect the header, payload, and signature. No data is sent to any server.",
    slug: "jwt-decoder",
    category: "Developer",
    keywords: ["jwt decoder", "jwt parser", "decode jwt", "jwt token decoder"],
  },
  {
    title: "Text Deduplicator",
    description: "Remove duplicate lines from text. Sort alphabetically, keep first occurrence, or remove all duplicates.",
    slug: "text-deduplicator",
    category: "Text",
    keywords: ["remove duplicates", "deduplicate text", "unique lines", "text dedupe"],
  },
  {
    title: "Color Converter",
    description: "Convert colors between HEX, RGB, HSL, and HSV formats. Pick colors visually with the color picker.",
    slug: "color-converter",
    category: "Utility",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker"],
  },
  {
    title: "HTML Entity Encoder / Decoder",
    description: "Encode special HTML characters to entities and decode HTML entities back to readable text.",
    slug: "html-entity-encoder",
    category: "Developer",
    keywords: ["html entity encoder", "html entity decoder", "html encode", "escape html"],
  },
  {
    title: "Image to Base64",
    description: "Convert images to Base64 data URIs. Embed images directly in HTML, CSS, or JSON without external files.",
    slug: "image-to-base64",
    category: "Image",
    keywords: ["image to base64", "convert image to base64", "base64 image", "img to base64"],
  },
  {
    title: "Case Converter",
    description: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.",
    slug: "case-converter",
    category: "Text",
    keywords: ["case converter", "uppercase", "lowercase", "title case", "camel case"],
  },
  {
    title: "Text Diff Checker",
    description: "Compare two texts and find differences instantly. See what was added, removed, or changed line by line.",
    slug: "text-diff",
    category: "Developer",
    keywords: ["text diff", "diff checker", "compare text", "text compare", "diff tool"],
  },
];

export const toolCategories = ["Developer", "Text", "Image", "Utility"] as const;
