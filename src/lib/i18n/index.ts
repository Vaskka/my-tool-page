export type Locale = "en" | "zh";

export const dict: Record<string, { en: string; zh: string }> = {
  // ── Site ────────────────────────────────────────────
  "site.title": {
    en: "DevToolsBox",
    zh: "开发者工具箱",
  },
  "site.description": {
    en: "Free online developer tools — JSON formatter, Base64 encoder, QR code generator, timestamp converter, and more. No sign-up required.",
    zh: "免费在线开发者工具 — JSON格式化、Base64编码器、二维码生成器、时间戳转换器等。无需注册。",
  },

  // ── Header / Footer ────────────────────────────────
  "nav.home":     { en: "Home",             zh: "首页" },
  "nav.about":    { en: "About",            zh: "关于" },
  "footer.privacy": { en: "Privacy Policy",  zh: "隐私政策" },
  "footer.terms":   { en: "Terms of Service", zh: "服务条款" },

  // ── Home page ──────────────────────────────────────
  "home.heading":  { en: "Free Online Developer Tools", zh: "免费在线开发者工具" },
  "home.subtitle": {
    en: "Free online developer tools — JSON formatter, Base64 encoder, QR code generator, timestamp converter, and more. No sign-up required.",
    zh: "免费在线开发者工具 — JSON格式化、Base64编码器、二维码生成器、时间戳转换器等。无需注册。",
  },
  "home.category.developer": { en: "Developer Tools", zh: "开发工具" },
  "home.category.text":      { en: "Text Tools",      zh: "文本工具" },
  "home.category.image":     { en: "Image Tools",     zh: "图片工具" },
  "home.category.utility":   { en: "Utility Tools",   zh: "实用工具" },

  // ── Tool Layout ────────────────────────────────────
  "tool.howToUse": {
    en: "How to use {tool}",
    zh: "如何使用 {tool}",
  },
  "tool.privacyNotice": {
    en: "This {tool} runs entirely in your browser. No data is uploaded to any server. Your privacy is completely protected.",
    zh: "此{tool}完全在您的浏览器中运行。不会将任何数据上传到任何服务器。您的隐私受到完全保护。",
  },

  // ── About page ─────────────────────────────────────
  "about.heading":              { en: "About DevToolsBox", zh: "关于开发者工具箱" },
  "about.description": {
    en: "Learn about DevToolsBox — a collection of free online developer and utility tools. All tools run locally in your browser.",
    zh: "了解开发者工具箱 — 一个免费的在线开发者和实用工具集合。所有工具均在您的浏览器本地运行。",
  },
  "about.p1": {
    en: "DevToolsBox is a collection of free online tools for developers, designers, and everyday users. Our mission is to provide fast, reliable, and privacy-focused utilities that work directly in your browser — no sign-ups, no server uploads, no hassle.",
    zh: "开发者工具箱是一个面向开发者、设计师和日常用户的免费在线工具集合。我们的使命是提供快速、可靠且注重隐私的实用工具，直接在您的浏览器中运行 — 无需注册，无需上传到服务器，无任何麻烦。",
  },
  "about.whyHeading":            { en: "Why Use Our Tools?", zh: "为什么使用我们的工具？" },
  "about.why1":                  { en: "100% Client-Side: All tools run entirely in your browser. Your data never leaves your device.", zh: "100%客户端运行：所有工具完全在您的浏览器中运行。您的数据永远不会离开您的设备。" },
  "about.why2":                  { en: "Free & No Sign-Up: Every tool is completely free. No registration required.", zh: "免费且无需注册：每个工具完全免费使用，无需注册。" },
  "about.why3":                  { en: "Fast & Lightweight: Optimized for performance, with minimal page load times.", zh: "快速轻量：针对性能进行了优化，页面加载时间极短。" },
  "about.why4":                  { en: "Regular Updates: We continuously add new tools and improve existing ones.", zh: "定期更新：我们不断添加新工具并改进现有工具。" },
  "about.toolsHeading":          { en: "Our Tools",          zh: "我们的工具" },
  "about.toolsDesc":             { en: "We offer tools across several categories:", zh: "我们提供多种类别的工具：" },
  "about.toolsDev":              { en: "Developer Tools: JSON formatter, Base64 encoder, regex tester, JWT decoder, and more.", zh: "开发工具：JSON格式化器、Base64编码器、正则表达式测试器、JWT解码器等。" },
  "about.toolsText":             { en: "Text Tools: Word counter, case converter, lorem ipsum generator, text deduplicator.", zh: "文本工具：字数统计器、大小写转换器、Lorem Ipsum生成器、文本去重器。" },
  "about.toolsImage":            { en: "Image Tools: Image compressor, image to Base64 converter.", zh: "图片工具：图片压缩器、图片转Base64。" },
  "about.toolsUtility":          { en: "Utility Tools: QR code generator, password generator, UUID generator, color converter.", zh: "实用工具：二维码生成器、密码生成器、UUID生成器、颜色转换器。" },
  "about.contactHeading":        { en: "Contact", zh: "联系我们" },
  "about.contactText":           { en: "Have suggestions for new tools? Found a bug? Please send an email to", zh: "有新工具建议？发现了Bug？请发送邮件至" },

  // ── Privacy page ───────────────────────────────────
  "privacy.title":       { en: "Privacy Policy", zh: "隐私政策" },
  "privacy.description": { en: "DevToolsBox privacy policy. We do not collect, store, or share any personal data.", zh: "开发者工具箱隐私政策。我们不收集、存储或分享任何个人数据。" },
  "privacy.heading":     { en: "Privacy Policy", zh: "隐私政策" },
  "privacy.updated":     { en: "Last updated:", zh: "最后更新日期：" },
  "privacy.noDataTitle": { en: "1. No Data Collection", zh: "1. 无数据收集" },
  "privacy.noData": {
    en: "DevToolsBox does not collect, store, process, or share any personal data. All tools on this site run entirely in your browser using client-side JavaScript. No information you enter into any tool is ever sent to our servers.",
    zh: "开发者工具箱不收集、存储、处理或分享任何个人数据。本站所有工具均使用客户端JavaScript在您的浏览器中运行。您在任何工具中输入的任何信息都不会发送到我们的服务器。",
  },
  "privacy.cookiesTitle": { en: "2. Cookies & Advertising", zh: "2. Cookie与广告" },
  "privacy.cookies1": {
    en: "We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting",
    zh: "我们使用Google AdSense展示广告。Google使用Cookie根据您之前访问本站和其他网站的情况投放广告。您可以通过访问以下链接选择退出个性化广告：",
  },
  "privacy.cookies2": {
    en: "Third-party vendors, including Google, use cookies to serve ads based on your prior visits. Google's use of the DoubleClick cookie enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.",
    zh: "包括Google在内的第三方供应商使用Cookie根据您的历史访问记录投放广告。Google使用DoubleClick Cookie使其及其合作伙伴能够根据您访问本网站和/或互联网上其他网站的情况投放广告。",
  },
  "privacy.analyticsTitle": { en: "3. Analytics", zh: "3. 数据分析" },
  "privacy.analytics": {
    en: "We may use Google Analytics to understand how visitors interact with our site. Google Analytics collects anonymous usage data such as pages visited, time on site, and browser type. No personally identifiable information is collected.",
    zh: "我们可能会使用Google Analytics来了解访问者如何与我们的网站互动。Google Analytics收集匿名使用数据，例如访问的页面、网站停留时间和浏览器类型。不会收集任何个人身份信息。",
  },
  "privacy.linksTitle": { en: "4. External Links", zh: "4. 外部链接" },
  "privacy.links": {
    en: "Our site may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites.",
    zh: "我们的网站可能包含指向外部网站的链接。我们不对这些第三方网站的隐私做法或内容负责。",
  },
  "privacy.contactTitle": { en: "5. Contact", zh: "5. 联系方式" },
  "privacy.contact": {
    en: "If you have questions about this privacy policy, please contact us at admin@vtoolmp.com.",
    zh: "如果您对本隐私政策有任何疑问，请通过 admin@vtoolmp.com 联系我们。",
  },

  // ── Terms page ─────────────────────────────────────
  "terms.title":       { en: "Terms of Service", zh: "服务条款" },
  "terms.description": { en: "DevToolsBox terms of service. Use our tools at your own discretion.", zh: "开发者工具箱服务条款。请自行决定使用我们的工具。" },
  "terms.heading":     { en: "Terms of Service", zh: "服务条款" },
  "terms.updated":     { en: "Last updated:", zh: "最后更新日期：" },
  "terms.acceptTitle": { en: "1. Acceptance of Terms", zh: "1. 接受条款" },
  "terms.accept": {
    en: "By using DevToolsBox, you agree to these terms of service. If you do not agree, please do not use our website.",
    zh: "使用开发者工具箱即表示您同意这些服务条款。如果您不同意，请不要使用我们的网站。",
  },
  "terms.serviceTitle": { en: "2. Service Description", zh: "2. 服务说明" },
  "terms.service": {
    en: "DevToolsBox provides free online developer and utility tools. All tools are provided \"as is\" without warranty of any kind. We process all data client-side in your browser, meaning your input never reaches our servers.",
    zh: "开发者工具箱提供免费的在线开发者和实用工具。所有工具均按\"原样\"提供，不作任何形式的保证。我们在您的浏览器中客户端处理所有数据，这意味着您的输入永远不会到达我们的服务器。",
  },
  "terms.userTitle": { en: "3. User Responsibilities", zh: "3. 用户责任" },
  "terms.user": {
    en: "You agree not to use our tools for any illegal or unauthorized purpose. You must not misuse or attempt to disrupt our services.",
    zh: "您同意不将我们的工具用于任何非法或未经授权的目的。您不得滥用或试图干扰我们的服务。",
  },
  "terms.ipTitle": { en: "4. Intellectual Property", zh: "4. 知识产权" },
  "terms.ip": {
    en: "The content, design, and tools on DevToolsBox are protected by copyright. You may not copy, modify, or redistribute our tools without permission.",
    zh: "开发者工具箱上的内容、设计和工具受版权保护。未经许可，您不得复制、修改或重新分发我们的工具。",
  },
  "terms.liabilityTitle": { en: "5. Limitation of Liability", zh: "5. 责任限制" },
  "terms.liability": {
    en: "DevToolsBox and its operators shall not be liable for any damages arising from the use or inability to use our tools. You use our services at your own risk.",
    zh: "开发者工具箱及其运营者不对因使用或无法使用我们的工具而造成的任何损害承担责任。您使用我们的服务需自行承担风险。",
  },
  "terms.changesTitle": { en: "6. Changes to Terms", zh: "6. 条款变更" },
  "terms.changes": {
    en: "We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.",
    zh: "我们保留随时修改这些条款的权利。变更后继续使用本网站即表示接受新条款。",
  },

  // ── Tool metadata ──────────────────────────────────
  // JSON Formatter
  "tool.json-formatter.title":       { en: "JSON Formatter",          zh: "JSON格式化器" },
  "tool.json-formatter.description": { en: "Format, validate, and beautify JSON data instantly. Parse and fix malformed JSON with syntax highlighting.", zh: "即时格式化、验证和美化JSON数据。使用语法高亮解析和修复格式错误的JSON。" },

  // Base64 Encoder
  "tool.base64-encoder.title":       { en: "Base64 Encoder / Decoder", zh: "Base64编码/解码器" },
  "tool.base64-encoder.description": { en: "Encode text to Base64 or decode Base64 strings back to plain text. Supports UTF-8 and binary data.", zh: "将文本编码为Base64或将Base64字符串解码回纯文本。支持UTF-8和二进制数据。" },

  // QR Code Generator
  "tool.qr-code-generator.title":       { en: "QR Code Generator", zh: "二维码生成器" },
  "tool.qr-code-generator.description": { en: "Generate QR codes from URLs, text, or any data. Customizable size and color. Free, no sign-up needed.", zh: "从URL、文本或任何数据生成二维码。可自定义大小和颜色。免费使用，无需注册。" },

  // URL Encoder
  "tool.url-encoder.title":       { en: "URL Encoder / Decoder", zh: "URL编码/解码器" },
  "tool.url-encoder.description": { en: "Encode special characters for URLs or decode percent-encoded URLs back to readable text.", zh: "为URL编码特殊字符或将百分比编码的URL解码回可读文本。" },

  // Image Compressor
  "tool.image-compressor.title":       { en: "Image Compressor", zh: "图片压缩器" },
  "tool.image-compressor.description": { en: "Compress JPEG, PNG, and WebP images online. Reduce file size without losing quality. 100% client-side.", zh: "在线压缩JPEG、PNG和WebP图片。减小文件大小而不损失质量。100%客户端运行。" },

  // Timestamp Converter
  "tool.timestamp-converter.title":       { en: "Timestamp Converter", zh: "时间戳转换器" },
  "tool.timestamp-converter.description": { en: "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.", zh: "将Unix时间戳转换为人类可读的日期，反之亦然。支持秒和毫秒。" },

  // Markdown Previewer
  "tool.markdown-previewer.title":       { en: "Markdown Previewer", zh: "Markdown预览器" },
  "tool.markdown-previewer.description": { en: "Write and preview Markdown in real-time. See how your Markdown renders as HTML instantly.", zh: "实时编写和预览Markdown。即时查看Markdown渲染为HTML的效果。" },

  // Regex Tester
  "tool.regex-tester.title":       { en: "Regex Tester", zh: "正则表达式测试器" },
  "tool.regex-tester.description": { en: "Test regular expressions against text with real-time matching. See matches, groups, and replacements.", zh: "使用实时匹配测试正则表达式。查看匹配结果、分组和替换。" },

  // Word Counter
  "tool.word-counter.title":       { en: "Word Counter", zh: "字数统计器" },
  "tool.word-counter.description": { en: "Count words, characters, sentences, and paragraphs. Get reading time estimates for your text.", zh: "统计字数、字符数、句子数和段落数。获取文本的阅读时间估算。" },

  // Password Generator
  "tool.password-generator.title":       { en: "Password Generator", zh: "密码生成器" },
  "tool.password-generator.description": { en: "Generate strong, secure passwords with customizable length, symbols, numbers, and case options.", zh: "生成强密码，可自定义长度、符号、数字和大小写选项。" },

  // UUID Generator
  "tool.uuid-generator.title":       { en: "UUID Generator", zh: "UUID生成器" },
  "tool.uuid-generator.description": { en: "Generate random UUIDs (v4) and GUIDs. Copy with one click. Perfect for developer testing.", zh: "生成随机UUID（v4）和GUID。一键复制。非常适合开发者测试。" },

  // Hash Generator
  "tool.hash-generator.title":       { en: "Hash Generator", zh: "哈希生成器" },
  "tool.hash-generator.description": { en: "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text input.", zh: "从任何文本输入生成MD5、SHA-1、SHA-256、SHA-384和SHA-512哈希值。" },

  // Lorem Ipsum
  "tool.lorem-ipsum.title":       { en: "Lorem Ipsum Generator", zh: "Lorem Ipsum生成器" },
  "tool.lorem-ipsum.description": { en: "Generate Lorem Ipsum placeholder text for your designs. Customize paragraph count and length.", zh: "为您的设计生成Lorem Ipsum占位文本。可自定义段落数量和长度。" },

  // JWT Decoder
  "tool.jwt-decoder.title":       { en: "JWT Decoder", zh: "JWT解码器" },
  "tool.jwt-decoder.description": { en: "Decode JWT tokens and inspect the header, payload, and signature. No data is sent to any server.", zh: "解码JWT令牌并检查Header、Payload和Signature。不会向任何服务器发送数据。" },

  // Text Deduplicator
  "tool.text-deduplicator.title":       { en: "Text Deduplicator", zh: "文本去重器" },
  "tool.text-deduplicator.description": { en: "Remove duplicate lines from text. Sort alphabetically, keep first occurrence, or remove all duplicates.", zh: "从文本中删除重复行。可字母排序、保留首次出现或删除所有重复项。" },

  // Color Converter
  "tool.color-converter.title":       { en: "Color Converter", zh: "颜色转换器" },
  "tool.color-converter.description": { en: "Convert colors between HEX, RGB, HSL, and HSV formats. Pick colors visually with the color picker.", zh: "在HEX、RGB、HSL和HSV格式之间转换颜色。通过颜色选择器可视化选择颜色。" },

  // HTML Entity Encoder
  "tool.html-entity-encoder.title":       { en: "HTML Entity Encoder / Decoder", zh: "HTML实体编码/解码器" },
  "tool.html-entity-encoder.description": { en: "Encode special HTML characters to entities and decode HTML entities back to readable text.", zh: "将特殊HTML字符编码为实体，并将HTML实体解码回可读文本。" },

  // Image to Base64
  "tool.image-to-base64.title":       { en: "Image to Base64", zh: "图片转Base64" },
  "tool.image-to-base64.description": { en: "Convert images to Base64 data URIs. Embed images directly in HTML, CSS, or JSON without external files.", zh: "将图片转换为Base64数据URI。无需外部文件即可将图片直接嵌入HTML、CSS或JSON中。" },

  // Case Converter
  "tool.case-converter.title":       { en: "Case Converter", zh: "大小写转换器" },
  "tool.case-converter.description": { en: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.", zh: "将文本转换为大写、小写、标题大小写、句首大小写、驼峰命名、下划线命名等。" },

  // Text Diff
  "tool.text-diff.title":       { en: "Text Diff Checker", zh: "文本差异检查器" },
  "tool.text-diff.description": { en: "Compare two texts and find differences instantly. See what was added, removed, or changed line by line.", zh: "比较两个文本并即时查找差异。逐行查看添加、删除或更改的内容。" },
};

// ── React component string keys ─────────────────────
export const reactStrings: Record<string, { en: string; zh: string }> = {
  // Common
  "common.copy":           { en: "Copy",            zh: "复制" },
  "common.copied":         { en: "Copied!",         zh: "已复制！" },
  "common.copiedAll":      { en: "Copied All!",     zh: "已全部复制！" },
  "common.copyAll":        { en: "Copy All",        zh: "全部复制" },
  "common.result":         { en: "Result",          zh: "结果" },
  "common.output":         { en: "Output",          zh: "输出" },
  "common.input":          { en: "Input",           zh: "输入" },
  "common.copyText":       { en: "Copy Text",       zh: "复制文本" },
  "common.copyHTML":       { en: "Copy HTML",       zh: "复制HTML" },
  "common.download":       { en: "Download",        zh: "下载" },
  "common.generate":       { en: "Generate",        zh: "生成" },
  "common.process":        { en: "Process",         zh: "处理" },
  "common.encode":         { en: "Encode",          zh: "编码" },
  "common.decode":         { en: "Decode",          zh: "解码" },
  "common.format":         { en: "Format",          zh: "格式化" },
  "common.minify":         { en: "Minify",          zh: "压缩" },
  "common.validate":       { en: "Validate",        zh: "验证" },
  "common.escape":         { en: "Escape",          zh: "转义" },
  "common.unescape":       { en: "Unescape",        zh: "反转义" },
  "common.copyBase64":     { en: "Copy Base64",     zh: "复制Base64" },
  "common.copyAsCSS":      { en: "Copy as CSS",     zh: "复制为CSS" },
  "common.copyAsIMG":      { en: "Copy as IMG",     zh: "复制为IMG" },
  "common.copyAll":        { en: "Copy All",        zh: "全部复制" },
  "common.copiedAll":      { en: "Copied All!",     zh: "已全部复制！" },

  // Base64Encoder
  "base64.placeholder":    { en: "Enter text to encode/decode...", zh: "输入要编码/解码的文本..." },
  "base64.invalid":        { en: "Invalid Base64 input",           zh: "无效的Base64输入" },

  // CaseConverter
  "case.placeholder":      { en: "Enter text to convert...",       zh: "输入要转换的文本..." },

  // ColorConverter - labels are kept as is (HEX/RGB/HSL are standard)

  // HashGenerator
  "hash.placeholder":      { en: "Enter text to hash...",        zh: "输入要哈希的文本..." },
  "hash.hashAll":          { en: "Hash All",                     zh: "计算全部" },

  // HtmlEntityEncoder
  "htmlentity.placeholder": { en: "Enter text to encode or HTML entities to decode...", zh: "输入要编码的文本或要解码的HTML实体..." },
  "htmlentity.common":      { en: "Common HTML Entities",                              zh: "常用HTML实体" },
  "htmlentity.character":   { en: "Character",                                        zh: "字符" },
  "htmlentity.entity":      { en: "Entity",                                           zh: "实体" },
  "htmlentity.name":        { en: "Name",                                             zh: "名称" },
  "htmlentity.ampersand":   { en: "Ampersand",      zh: "与号" },
  "htmlentity.lessThan":    { en: "Less than",      zh: "小于号" },
  "htmlentity.greaterThan": { en: "Greater than",   zh: "大于号" },
  "htmlentity.doubleQuote": { en: "Double quote",   zh: "双引号" },
  "htmlentity.singleQuote": { en: "Single quote",   zh: "单引号" },
  "htmlentity.copyright":   { en: "Copyright",      zh: "版权" },
  "htmlentity.registered":  { en: "Registered",     zh: "注册商标" },
  "htmlentity.trademark":   { en: "Trademark",      zh: "商标" },
  "htmlentity.euro":        { en: "Euro",           zh: "欧元" },
  "htmlentity.pound":       { en: "Pound",          zh: "英镑" },
  "htmlentity.yen":         { en: "Yen",            zh: "日元" },
  "htmlentity.nbsp":        { en: "Non-breaking space", zh: "不间断空格" },

  // ImageCompressor
  "imgcomp.original":       { en: "Original:",                zh: "原始：" },
  "imgcomp.quality":        { en: "Quality:",                 zh: "质量：" },
  "imgcomp.maxWidth":       { en: "Max Width (px)",           zh: "最大宽度 (px)" },
  "imgcomp.maxHeight":      { en: "Max Height (px)",          zh: "最大高度 (px)" },
  "imgcomp.compress":       { en: "Compress",                zh: "压缩" },
  "imgcomp.compressing":    { en: "Compressing...",          zh: "压缩中..." },
  "imgcomp.compressed":     { en: "Compressed: ",            zh: "已压缩：" },
  "imgcomp.download":       { en: "Download Compressed Image", zh: "下载压缩图片" },
  "imgcomp.originalAlt":    { en: "Original",                zh: "原始图片" },
  "imgcomp.compressedAlt":  { en: "Compressed",              zh: "压缩后图片" },

  // ImageToBase64
  "img2b64.preview":        { en: "Preview",           zh: "预览" },
  "img2b64.dataURI":        { en: "Base64 Data URI",   zh: "Base64数据URI" },

  // JsonFormatter
  "json.placeholder":       { en: "{\"key\": \"value\"}", zh: "{\"key\": \"value\"}" },
  "json.valid":             { en: "Valid JSON",          zh: "有效的JSON" },

  // JwtDecoder
  "jwt.placeholder":       { en: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0...", zh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0..." },
  "jwt.enterToken":         { en: "Please enter a JWT token",                          zh: "请输入JWT令牌" },
  "jwt.invalidFormat":      { en: "Invalid JWT format. Expected 3 parts separated by dots (header.payload.signature)", zh: "无效的JWT格式。期望由点分隔的3个部分（header.payload.signature）" },
  "jwt.headerDecodeFail":   { en: "Failed to decode JWT header",                       zh: "JWT Header解码失败" },
  "jwt.payloadDecodeFail":  { en: "Failed to decode JWT payload",                      zh: "JWT Payload解码失败" },
  "jwt.header":             { en: "Header",                                            zh: "Header" },
  "jwt.payload":            { en: "Payload",                                           zh: "Payload" },

  // LoremIpsum
  "lorem.paragraphs":       { en: "Paragraphs:", zh: "段落数：" },
  "lorem.startWith":        { en: "Start with \"Lorem ipsum dolor sit amet...\"", zh: "以\"Lorem ipsum dolor sit amet...\"开头" },
  "lorem.paragraphsCount":  { en: "paragraphs", zh: "段落" },
  "lorem.wordsCount":       { en: "words",     zh: "词" },

  // MarkdownPreviewer
  "md.markdown":            { en: "Markdown",            zh: "Markdown" },
  "md.placeholder":         { en: "# Markdown here...",  zh: "# 在此输入Markdown..." },

  // PasswordGenerator
  "pwd.length":             { en: "Length:",             zh: "长度：" },
  "pwd.uppercase":          { en: "Uppercase",           zh: "大写字母" },
  "pwd.lowercase":          { en: "Lowercase",           zh: "小写字母" },
  "pwd.numbers":            { en: "Numbers",             zh: "数字" },
  "pwd.symbols":            { en: "Symbols",             zh: "符号" },
  "pwd.generate":           { en: "Generate Password",   zh: "生成密码" },
  "pwd.strength":           { en: "Strength:",           zh: "强度：" },
  "pwd.weak":               { en: "Weak",                zh: "弱" },
  "pwd.medium":             { en: "Medium",              zh: "中等" },
  "pwd.strong":             { en: "Strong",              zh: "强" },
  "pwd.veryStrong":         { en: "Very Strong",         zh: "非常强" },

  // QrCodeGenerator
  "qr.placeholder":         { en: "Enter URL or text...",    zh: "输入URL或文本..." },
  "qr.size":                { en: "Size:",                   zh: "尺寸：" },
  "qr.foreground":          { en: "Foreground",              zh: "前景色" },
  "qr.background":          { en: "Background",              zh: "背景色" },
  "qr.generate":            { en: "Generate QR Code",        zh: "生成二维码" },
  "qr.downloadPNG":         { en: "Download PNG",            zh: "下载PNG" },
  "qr.empty":               { en: "Please enter text or URL", zh: "请输入文本或URL" },

  // RegexTester
  "regex.pattern":          { en: "Pattern",                 zh: "正则表达式" },
  "regex.flags":            { en: "Flags",                   zh: "标志" },
  "regex.testString":       { en: "Test string...",          zh: "测试字符串..." },
  "regex.matches":          { en: "Matches:",                zh: "匹配数：" },
  "regex.matchList":        { en: "Match list",              zh: "匹配列表" },

  // TextDeduplicator
  "dedup.placeholder":      { en: "Paste your text here, one entry per line...", zh: "在此粘贴文本，每行一个条目..." },
  "dedup.removeDup":        { en: "Remove duplicates",     zh: "去除重复" },
  "dedup.sortAZ":           { en: "Sort A-Z",              zh: "按字母排序（A-Z）" },
  "dedup.sortZA":           { en: "Sort Z-A",              zh: "按字母排序（Z-A）" },
  "dedup.trim":             { en: "Trim whitespace",       zh: "去除首尾空格" },
  "dedup.original":         { en: "Original:",             zh: "原始：" },
  "dedup.unique":           { en: "Unique:",               zh: "唯一：" },
  "dedup.removed":          { en: "Duplicates removed:",   zh: "已去除重复：" },

  // TextDiff
  "diff.originalText":      { en: "Original Text",          zh: "原始文本" },
  "diff.originalPlaceholder": { en: "Paste original text...", zh: "粘贴原始文本..." },
  "diff.modifiedText":      { en: "Modified Text",          zh: "修改后文本" },
  "diff.modifiedPlaceholder": { en: "Paste modified text...", zh: "粘贴修改后的文本..." },
  "diff.compare":           { en: "Compare Now",            zh: "开始对比" },
  "diff.linesAdded":        { en: "lines added",            zh: "行已添加" },
  "diff.linesRemoved":      { en: "lines removed",          zh: "行已删除" },
  "diff.noDiff":            { en: "No differences found.",  zh: "未发现差异。" },

  // TimestampConverter
  "ts.tsToDate":            { en: "Timestamp to Date",      zh: "时间戳转日期" },
  "ts.tsPlaceholder":       { en: "Enter timestamp...",     zh: "输入时间戳..." },
  "ts.milliseconds":        { en: "Milliseconds",           zh: "毫秒" },
  "ts.convertToDate":       { en: "Convert to Date",        zh: "转换为日期" },
  "ts.iso":                 { en: "ISO:",                   zh: "ISO：" },
  "ts.utc":                 { en: "UTC:",                   zh: "UTC：" },
  "ts.local":               { en: "Local:",                 zh: "本地：" },
  "ts.localeDate":          { en: "Locale Date:",           zh: "本地日期：" },
  "ts.localeTime":          { en: "Locale Time:",           zh: "本地时间：" },
  "ts.dateToTs":            { en: "Date to Timestamp",      zh: "日期转时间戳" },
  "ts.date":                { en: "Date",                   zh: "日期" },
  "ts.time":                { en: "Time",                   zh: "时间" },
  "ts.convertToTs":         { en: "Convert to Timestamp",   zh: "转换为时间戳" },
  "ts.invalidNumber":       { en: "Please enter a valid number", zh: "请输入有效的数字" },
  "ts.selectDate":          { en: "Please select a date",   zh: "请选择日期" },

  // UrlEncoder
  "url.placeholder":        { en: "Enter text or URL to encode/decode...", zh: "输入要编码/解码的文本或URL..." },
  "url.encodeURL":          { en: "Encode URL",                           zh: "URL编码" },
  "url.decodeURL":          { en: "Decode URL",                           zh: "URL解码" },
  "url.invalid":            { en: "Invalid URL-encoded input",            zh: "无效的URL编码输入" },

  // UuidGenerator
  "uuid.single":            { en: "Generate Single UUID",   zh: "生成单个UUID" },
  "uuid.generate":          { en: "Generate UUID",          zh: "生成UUID" },
  "uuid.multiple":          { en: "Generate Multiple UUIDs", zh: "生成多个UUID" },
  "uuid.count":             { en: "Count:",                 zh: "数量：" },
  "uuid.generated":         { en: "UUIDs generated",        zh: "个UUID已生成" },
  "uuid.footer":            { en: "UUID v4  randomly generated. Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where y is 8, 9, A, or B.", zh: "UUID v4 随机生成。格式：xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx，其中y为8、9、A或B。" },

  // WordCounter
  "wc.input":               { en: "Input",                  zh: "输入" },
  "wc.placeholder":         { en: "Type or paste text here...", zh: "在此输入或粘贴文本..." },
  "wc.words":               { en: "Words",                  zh: "字数" },
  "wc.characters":          { en: "Characters",             zh: "字符数" },
  "wc.charsNoSpaces":       { en: "Chars (no spaces)",      zh: "字符数（不含空格）" },
  "wc.readingTime":         { en: "Reading time",           zh: "阅读时间" },
  "wc.sentences":           { en: "Sentences",              zh: "句子数" },
  "wc.paragraphs":          { en: "Paragraphs",             zh: "段落数" },
  "wc.lines":               { en: "Lines",                  zh: "行数" },
  "wc.min":                 { en: "min",                    zh: "分钟" },
};

/**
 * Get a translated string.
 * For server/build usage, always returns English (default).
 * For client usage, reads window.__LOCALE__ to determine language.
 */
export function t(key: string): string {
  const entry = dict[key] || reactStrings[key];
  if (!entry) return key;

  if (typeof window !== "undefined" && (window as any).__LOCALE__ === "zh") {
    return entry.zh;
  }
  return entry.en;
}

/**
 * Get locale-specific string (for use in React).
 */
export function getLocalizedString(en: string, zh: string): string {
  if (typeof window !== "undefined" && (window as any).__LOCALE__ === "zh") {
    return zh;
  }
  return en;
}
