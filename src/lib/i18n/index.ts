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

  // ── Tool page content sections ─────────────────────
  "tool.aboutHeading": { en: "About {tool}", zh: "关于{tool}" },
  "tool.howToUseHeading": { en: "How to Use", zh: "使用方法" },
  "tool.tipsHeading": { en: "Tips & Best Practices", zh: "提示与最佳实践" },

  // JSON Formatter
  "tool.json-formatter.intro": { en: "Our JSON Formatter helps developers and data analysts quickly convert messy, minified, or unreadable JSON into a clean, indented, human-readable format. It also validates JSON syntax and pinpoints exactly where errors occur, making debugging faster and easier. This tool is 100% client-side — your data never leaves your browser, ensuring maximum privacy and security.", zh: "我们的JSON格式化器帮助开发者和数据分析师快速将混乱、压缩或难以阅读的JSON转换为整洁、缩进、人类可读的格式。它还可以验证JSON语法并精确定位错误发生的位置，使调试更快速、更轻松。此工具100%在客户端运行——您的数据永不离开浏览器，确保最大隐私和安全性。" },
  "tool.json-formatter.step1": { en: "Paste your JSON string into the input textarea above.", zh: "将您的JSON字符串粘贴到上方的输入文本区域。" },
  "tool.json-formatter.step2": { en: "Click the 'Format' button to beautify with 2-space indentation.", zh: "点击\"格式化\"按钮，使用2空格缩进美化。" },
  "tool.json-formatter.step3": { en: "Use 'Validate' to check if the JSON is syntactically correct.", zh: "使用\"验证\"检查JSON语法是否正确。" },
  "tool.json-formatter.step4": { en: "Click 'Minify' to compress the JSON into a single line for production use.", zh: "点击\"压缩\"将JSON压缩为单行用于生产环境。" },
  "tool.json-formatter.step5": { en: "Copy the result to your clipboard with the Copy button.", zh: "使用复制按钮将结果复制到剪贴板。" },
  "tool.json-formatter.tip1": { en: "You can paste JSON from any source — API responses, config files, or database exports.", zh: "您可以从任何来源粘贴JSON——API响应、配置文件或数据库导出。" },
  "tool.json-formatter.tip2": { en: "The validator shows the exact line and character where errors occur.", zh: "验证器显示错误发生的确切行和字符位置。" },
  "tool.json-formatter.tip3": { en: "Minified JSON is ideal for reducing file size in production environments.", zh: "压缩后的JSON非常适合减少生产环境中的文件大小。" },
  "tool.json-formatter.tip4": { en: "This tool also works as a JSON prettifier for large, complex nested objects.", zh: "此工具也可作为JSON美化器用于大型复杂的嵌套对象。" },

  // Base64 Encoder
  "tool.base64-encoder.intro": { en: "Base64 encoding converts binary data or text into a radix-64 ASCII string format, commonly used for embedding images directly in HTML/CSS, transmitting data in APIs, or storing binary content in text-only databases. Our tool handles both encoding and decoding with full UTF-8 support, ensuring accurate conversion for international characters and emoji. All processing runs locally in your browser — nothing is sent to any server.", zh: "Base64编码将二进制数据或文本转换为radix-64 ASCII字符串格式，通常用于在HTML/CSS中直接嵌入图片、在API中传输数据或在纯文本数据库中存储二进制内容。我们的工具支持编码和解码，完整支持UTF-8，确保国际字符和表情符号的准确转换。所有处理均在您的浏览器本地运行——不会向任何服务器发送任何内容。" },
  "tool.base64-encoder.step1": { en: "Enter or paste the text you want to encode/decode in the input field above.", zh: "在上方输入字段中输入或粘贴要编码/解码的文本。" },
  "tool.base64-encoder.step2": { en: "Click 'Encode' to convert your text to Base64 format.", zh: "点击\"编码\"将文本转换为Base64格式。" },
  "tool.base64-encoder.step3": { en: "Click 'Decode' to convert a Base64 string back to plain text.", zh: "点击\"解码\"将Base64字符串转换回纯文本。" },
  "tool.base64-encoder.step4": { en: "Copy the result using the Copy button.", zh: "使用复制按钮复制结果。" },
  "tool.base64-encoder.step5": { en: "Use the output in your HTML, CSS, API requests, or data URIs.", zh: "在HTML、CSS、API请求或数据URI中使用输出结果。" },
  "tool.base64-encoder.tip1": { en: "Base64 encoding increases data size by approximately 33%.", zh: "Base64编码会使数据大小增加约33%。" },
  "tool.base64-encoder.tip2": { en: "For image embedding, the Image to Base64 tool on this site offers a dedicated UI.", zh: "对于图片嵌入，本站的图片转Base64工具提供了专门的界面。" },
  "tool.base64-encoder.tip3": { en: "Base64 is commonly used in JSON Web Tokens (JWT) and data URL schemes.", zh: "Base64常用于JSON Web Tokens（JWT）和数据URL方案。" },
  "tool.base64-encoder.tip4": { en: "UTF-8 support means Chinese characters, emojis, and special symbols encode correctly.", zh: "UTF-8支持意味着中文字符、表情符号和特殊符号可以正确编码。" },

  // QR Code Generator
  "tool.qr-code-generator.intro": { en: "Generate high-quality QR codes instantly for any URL, text, Wi-Fi credentials, or contact information. Our QR code generator allows full customization of size (100 to 500 pixels) and colors, ensuring your QR codes match your brand. Download your generated QR code as a PNG image, ready for printing or digital use. No watermark, no sign-up, completely free.", zh: "即时生成高质量的二维码，适用于任何URL、文本、Wi-Fi凭证或联系信息。我们的二维码生成器支持完全自定义尺寸（100到500像素）和颜色，确保您的二维码与您的品牌匹配。可下载生成的二维码为PNG图片，适用于打印或数字用途。无水印、无需注册、完全免费。" },
  "tool.qr-code-generator.step1": { en: "Enter your URL, text, or data into the input field above.", zh: "在上方输入框中输入URL、文本或数据。" },
  "tool.qr-code-generator.step2": { en: "Adjust the size slider (100 to 500 pixels) to set the QR code dimensions.", zh: "调整尺寸滑块（100到500像素）设定二维码尺寸。" },
  "tool.qr-code-generator.step3": { en: "Optionally customize foreground and background colors using the color pickers.", zh: "可选择使用颜色选择器自定义前景色和背景色。" },
  "tool.qr-code-generator.step4": { en: "Click 'Generate QR Code' to create your QR code on the canvas.", zh: "点击\"生成二维码\"在画布上创建二维码。" },
  "tool.qr-code-generator.step5": { en: "Click 'Download PNG' to save the QR code image to your device.", zh: "点击\"下载PNG\"将二维码图片保存到您的设备。" },
  "tool.qr-code-generator.tip1": { en: "QR codes can store URLs, plain text, phone numbers, and Wi-Fi login credentials.", zh: "二维码可以存储URL、纯文本、电话号码和Wi-Fi登录凭证。" },
  "tool.qr-code-generator.tip2": { en: "For print use, set the size to 300px or larger for best scanning reliability.", zh: "用于打印时，将尺寸设置为300px或更大以获得最佳扫描可靠性。" },
  "tool.qr-code-generator.tip3": { en: "Dark foreground on light background provides the best contrast for scanning.", zh: "深色前景配浅色背景提供最佳扫描对比度。" },
  "tool.qr-code-generator.tip4": { en: "You can test your QR code by scanning it with your phone's camera before downloading.", zh: "下载前可以用手机相机扫描测试生成的二维码。" },

  // URL Encoder
  "tool.url-encoder.intro": { en: "URL encoding (also called percent-encoding) converts special characters into a format safe for transmission in URLs. Characters like spaces, ampersands, question marks, and non-ASCII symbols are replaced with a '%' followed by their hex value. Our URL encoder/decoder handles the complete encoding process, making your URLs compatible with all web browsers and servers. Processing is done entirely in your browser.", zh: "URL编码（也称百分比编码）将特殊字符转换为适合在URL中传输的安全格式。空格、&符号、问号和非ASCII符号等字符会被替换为\"%\"加上其十六进制值。我们的URL编码/解码器处理完整的编码过程，使您的URL与所有网络浏览器和服务器兼容。所有处理完全在您的浏览器中完成。" },
  "tool.url-encoder.step1": { en: "Paste your URL or text into the input field above.", zh: "将URL或文本粘贴到上方的输入框中。" },
  "tool.url-encoder.step2": { en: "Click 'Encode URL' to convert special characters to percent-encoded format.", zh: "点击\"URL编码\"将特殊字符转换为百分比编码格式。" },
  "tool.url-encoder.step3": { en: "Click 'Decode URL' to convert a percent-encoded URL back to readable text.", zh: "点击\"URL解码\"将百分比编码的URL转换回可读文本。" },
  "tool.url-encoder.step4": { en: "Copy the encoded or decoded result using the Copy button.", zh: "使用复制按钮复制编码或解码后的结果。" },
  "tool.url-encoder.step5": { en: "Use the output directly in links, API calls, or HTML href attributes.", zh: "直接在链接、API调用或HTML href属性中使用输出结果。" },
  "tool.url-encoder.tip1": { en: "URL encoding is different from HTML entity encoding — use the appropriate tool for each.", zh: "URL编码与HTML实体编码不同——请为每种情况使用相应的工具。" },
  "tool.url-encoder.tip2": { en: "Query parameters with special characters (like &, =, spaces) must be URL-encoded.", zh: "包含特殊字符（如&、=、空格）的查询参数必须进行URL编码。" },
  "tool.url-encoder.tip3": { en: "Decoding is useful for understanding what a complex URL actually contains.", zh: "解码有助于理解复杂URL实际包含的内容。" },
  "tool.url-encoder.tip4": { en: "All modern browsers automatically encode URLs, but manual encoding is needed for API development.", zh: "所有现代浏览器都会自动编码URL，但API开发需要手动编码。" },

  // Image Compressor
  "tool.image-compressor.intro": { en: "Compress your images to dramatically reduce file size while maintaining visual quality. Whether you're optimizing images for a website, preparing email attachments, or saving storage space, our image compressor handles JPEG, PNG, and WebP formats. Adjust the quality slider to find the perfect balance between file size and image clarity. Maximum privacy — all compression runs locally in your browser.", zh: "压缩您的图片以大幅减小文件大小，同时保持视觉质量。无论您是优化网站图片、准备电子邮件附件还是节省存储空间，我们的图片压缩器都支持JPEG、PNG和WebP格式。调整质量滑块以找到文件大小和图片清晰度之间的完美平衡。最大隐私保护——所有压缩均在您的浏览器本地运行。" },
  "tool.image-compressor.step1": { en: "Upload an image by clicking the file input or dragging an image onto it.", zh: "点击文件上传区域或将图片拖拽到其中来上传图片。" },
  "tool.image-compressor.step2": { en: "Adjust the quality slider (lower values = smaller file but lower quality).", zh: "调整质量滑块（较低值 = 文件更小但质量更低）。" },
  "tool.image-compressor.step3": { en: "Optionally set maximum width/height to resize the image during compression.", zh: "可选择设置最大宽度/高度，在压缩过程中调整图片尺寸。" },
  "tool.image-compressor.step4": { en: "Click 'Compress' to process the image — wait for the compression to complete.", zh: "点击\"压缩\"处理图片——等待压缩完成。" },
  "tool.image-compressor.step5": { en: "Compare original and compressed sizes, then click 'Download Compressed Image' to save.", zh: "比较原始和压缩后的大小，然后点击\"下载压缩图片\"保存。" },
  "tool.image-compressor.tip1": { en: "A quality setting of 0.7 typically reduces file size by 60-80% with minimal visible difference.", zh: "质量设为0.7通常可将文件大小减少60-80%，视觉差异极小。" },
  "tool.image-compressor.tip2": { en: "For web use, compressing images below 100KB significantly improves page load speed.", zh: "对于网页使用，将图片压缩到100KB以下可显著提高页面加载速度。" },
  "tool.image-compressor.tip3": { en: "Set max width/height to 1200px for blog images — larger is rarely needed.", zh: "博客图片设置最大宽高为1200px——很少需要更大尺寸。" },
  "tool.image-compressor.tip4": { en: "This tool is especially useful for photographers, bloggers, and e-commerce site owners.", zh: "此工具对摄影师、博主和电商网站所有者特别有用。" },

  // Timestamp Converter
  "tool.timestamp-converter.intro": { en: "Unix timestamps (also called Epoch time) represent the number of seconds or milliseconds since January 1, 1970. They are widely used in databases, APIs, and logging systems for storing date/time information in a compact, timezone-independent format. Our converter works bidirectionally — convert timestamps to readable dates and vice versa — supporting both second and millisecond precision.", zh: "Unix时间戳（也称Epoch时间）表示自1970年1月1日以来经过的秒数或毫秒数。它们广泛用于数据库、API和日志系统中，以紧凑、与时区无关的格式存储日期/时间信息。我们的转换器支持双向转换——将时间戳转换为可读日期，反之亦然——同时支持秒和毫秒精度。" },
  "tool.timestamp-converter.step1": { en: "Enter a Unix timestamp (seconds or milliseconds) in the input field above.", zh: "在上方输入框中输入Unix时间戳（秒或毫秒）。" },
  "tool.timestamp-converter.step2": { en: "Select whether your timestamp is in seconds or milliseconds.", zh: "选择您的时间戳是秒还是毫秒。" },
  "tool.timestamp-converter.step3": { en: "Click 'Convert to Date' to see the human-readable date in multiple formats (UTC, ISO, local time).", zh: "点击\"转换为日期\"查看多种格式的可读日期（UTC、ISO、本地时间）。" },
  "tool.timestamp-converter.step4": { en: "Or use the date picker to select a date and generate its Unix timestamp.", zh: "或使用日期选择器选择日期并生成其Unix时间戳。" },
  "tool.timestamp-converter.step5": { en: "Copy either the timestamp or the formatted date as needed.", zh: "根据需要复制时间戳或格式化日期。" },
  "tool.timestamp-converter.tip1": { en: "Most JavaScript timestamps use milliseconds (13 digits). Most Unix systems use seconds (10 digits).", zh: "大多数JavaScript时间戳使用毫秒（13位数字）。大多数Unix系统使用秒（10位数字）。" },
  "tool.timestamp-converter.tip2": { en: "ISO 8601 format (e.g., 2026-06-15T12:34:56Z) is the most portable for cross-system use.", zh: "ISO 8601格式（如2026-06-15T12:34:56Z）最适合跨系统使用。" },
  "tool.timestamp-converter.tip3": { en: "Unix timestamps ignore timezones entirely — they represent the same moment everywhere.", zh: "Unix时间戳完全忽略时区——它们在任何地方都代表同一时刻。" },
  "tool.timestamp-converter.tip4": { en: "This tool helps debug API responses, database records, and log file entries.", zh: "此工具有助于调试API响应、数据库记录和日志文件条目。" },

  // Markdown Previewer
  "tool.markdown-previewer.intro": { en: "Markdown is a lightweight markup language used to format text with simple, readable syntax. It's the standard for README files on GitHub, documentation, blog posts, and technical writing. Our Markdown Previewer provides a live, split-pane editing experience — type Markdown on the left and see the rendered HTML on the right instantly as you type. Copy the HTML output for use anywhere.", zh: "Markdown是一种轻量级标记语言，使用简单易读的语法格式化文本。它是GitHub上README文件、文档、博客文章和技术写作的标准格式。我们的Markdown预览器提供实时分屏编辑体验——在左侧输入Markdown，右侧即时显示渲染后的HTML。可复制HTML输出在任何地方使用。" },
  "tool.markdown-previewer.step1": { en: "Type or paste Markdown text in the left textarea.", zh: "在左侧文本区域输入或粘贴Markdown文本。" },
  "tool.markdown-previewer.step2": { en: "Watch the right panel display the rendered HTML in real time as you type.", zh: "在输入时观察右侧面板实时显示渲染后的HTML。" },
  "tool.markdown-previewer.step3": { en: "Use standard Markdown syntax: # for headings, ** for bold, []() for links, etc.", zh: "使用标准Markdown语法：#表示标题，**表示粗体，[]()表示链接等。" },
  "tool.markdown-previewer.step4": { en: "Click 'Copy HTML' to copy the rendered HTML to your clipboard.", zh: "点击\"复制HTML\"将渲染后的HTML复制到剪贴板。" },
  "tool.markdown-previewer.step5": { en: "Paste the HTML into your website, CMS, or blog platform.", zh: "将HTML粘贴到您的网站、CMS或博客平台。" },
  "tool.markdown-previewer.tip1": { en: "Supported syntax includes headings, lists, code blocks, tables, links, images, and blockquotes.", zh: "支持的语法包括标题、列表、代码块、表格、链接、图片和引用块。" },
  "tool.markdown-previewer.tip2": { en: "Markdown is much faster to write than HTML for structured documents.", zh: "对于结构化文档，Markdown编写速度比HTML快得多。" },
  "tool.markdown-previewer.tip3": { en: "The preview updates on every keystroke — no need to click any button to see changes.", zh: "预览会在每次按键时更新——无需点击任何按钮即可看到变化。" },
  "tool.markdown-previewer.tip4": { en: "Commonly used by developers for project documentation and by writers for draft articles.", zh: "开发者常用于编写项目文档，写作者常用于草拟文章。" },

  // Regex Tester
  "tool.regex-tester.intro": { en: "Regular expressions (regex) are powerful pattern-matching tools used to search, validate, and manipulate text. They're essential for form validation, data extraction, log parsing, and text processing. Our Regex Tester lets you build and test regex patterns against sample text in real time. See all matches highlighted instantly, with support for common flags like global (g), case-insensitive (i), and multiline (m).", zh: "正则表达式（regex）是用于搜索、验证和操作文本的强大模式匹配工具。它们对于表单验证、数据提取、日志解析和文本处理至关重要。我们的正则表达式测试器让您可以实时编写和测试正则表达式的模式。即时查看所有匹配结果高亮显示，支持常用标志如global（g）、不区分大小写（i）和多行（m）。" },
  "tool.regex-tester.step1": { en: "Enter your regex pattern in the pattern input field above.", zh: "在上方模式输入框中输入正则表达式。" },
  "tool.regex-tester.step2": { en: "Optionally add flags (g for global, i for case-insensitive, m for multiline).", zh: "可选择添加标志（g表示全局匹配，i表示不区分大小写，m表示多行）。" },
  "tool.regex-tester.step3": { en: "Paste the text you want to test against in the textarea.", zh: "在文本区域粘贴要测试的文本。" },
  "tool.regex-tester.step4": { en: "Matches are displayed in real time as you type.", zh: "匹配结果会在输入时实时显示。" },
  "tool.regex-tester.step5": { en: "View the total match count and a list of all captured groups.", zh: "查看总匹配数和所有捕获组的列表。" },
  "tool.regex-tester.tip1": { en: "Use parentheses () to create capture groups for extracting specific parts of a match.", zh: "使用括号()创建捕获组来提取匹配的特定部分。" },
  "tool.regex-tester.tip2": { en: "The dot . matches any character except newline. Use [\\s\\S] to match truly any character.", zh: "点号.匹配除换行符外的任何字符。使用[\\s\\S]匹配真正的任意字符。" },
  "tool.regex-tester.tip3": { en: "Common patterns: \\d+ for numbers, [A-Za-z]+ for words, ^ for start, $ for end of line.", zh: "常见模式：\\d+用于数字，[A-Za-z]+用于单词，^表示行首，$表示行尾。" },

  // Word Counter
  "tool.word-counter.intro": { en: "Quickly analyze any text to get accurate word, character, sentence, and paragraph counts. Whether you're checking an essay against a word limit, measuring social media post length, or estimating reading time for a blog article, our Word Counter provides instant statistics as you type. All analysis happens locally in your browser for complete privacy.", zh: "快速分析任何文本，获取准确的字数、字符数、句子数和段落数。无论您是要对照字数限制检查文章、测量社交媒体帖子长度，还是估算博客文章的阅读时间，我们的字数统计器都能在您输入时提供即时统计数据。所有分析均在您的浏览器本地进行，完全保护隐私。" },
  "tool.word-counter.step1": { en: "Type or paste your text into the textarea above.", zh: "在上方文本区域输入或粘贴您的文本。" },
  "tool.word-counter.step2": { en: "View real-time statistics: word count, character count (with and without spaces), sentences, and paragraphs.", zh: "查看实时统计数据：字数、字符数（含空格和不含空格）、句子数和段落数。" },
  "tool.word-counter.step3": { en: "Check the estimated reading time based on average reading speed.", zh: "基于平均阅读速度查看预估阅读时间。" },
  "tool.word-counter.step4": { en: "The statistics update automatically as you add or remove text.", zh: "统计数据会随着您添加或删除文本自动更新。" },
  "tool.word-counter.step5": { en: "Use the Copy button to copy your text if needed.", zh: "如需复制文本，请使用复制按钮。" },
  "tool.word-counter.tip1": { en: "Reading time is estimated at 200 words per minute, the average adult reading speed.", zh: "阅读时间按每分钟200字估算，这是成人平均阅读速度。" },
  "tool.word-counter.tip2": { en: "Character count without spaces is useful for SMS, tweets, and meta descriptions with character limits.", zh: "不含空格的字符数对SMS、推文和有字符限制的元描述很有用。" },
  "tool.word-counter.tip3": { en: "Sentence count helps writers maintain varied sentence lengths for better readability.", zh: "句子数帮助写作者保持多样化的句子长度以提高可读性。" },
  "tool.word-counter.tip4": { en: "Many content platforms have minimum word requirements — use this tool to verify you meet them.", zh: "许多内容平台有最低字数要求——使用此工具验证是否达标。" },

  // Password Generator
  "tool.password-generator.intro": { en: "Create cryptographically secure passwords instantly. Our Password Generator uses your browser's built-in crypto API to generate truly random passwords, not pseudo-random algorithms. Customize the length (4 to 64 characters) and choose which character types to include — uppercase, lowercase, numbers, and symbols. Each password is generated locally and never transmitted anywhere.", zh: "即时创建加密安全的密码。我们的密码生成器使用您浏览器内置的crypto API生成真正的随机密码，而非伪随机算法。可自定义长度（4到64个字符）并选择包含的字符类型——大写字母、小写字母、数字和符号。每个密码都在本地生成，绝不会传输到任何地方。" },
  "tool.password-generator.step1": { en: "Use the slider to set your desired password length (16 characters is recommended for most uses).", zh: "使用滑块设置所需的密码长度（大多数情况下建议使用16个字符）。" },
  "tool.password-generator.step2": { en: "Check or uncheck character type options: uppercase, lowercase, numbers, and symbols.", zh: "勾选或取消勾选字符类型选项：大写字母、小写字母、数字和符号。" },
  "tool.password-generator.step3": { en: "Click 'Generate' to create a new random password.", zh: "点击\"生成\"创建新的随机密码。" },
  "tool.password-generator.step4": { en: "View the password strength indicator — aim for 'Strong'.", zh: "查看密码强度指示——争取达到\"强\"级别。" },
  "tool.password-generator.step5": { en: "Click 'Copy' to copy the password to your clipboard for pasting into a password field or manager.", zh: "点击\"复制\"将密码复制到剪贴板，以便粘贴到密码字段或密码管理器中。" },
  "tool.password-generator.tip1": { en: "Password strength is based on length and character diversity — longer with all types = strongest.", zh: "密码强度基于长度和字符多样性——更长且包含所有类型 = 最强。" },
  "tool.password-generator.tip2": { en: "Use at least 16 characters with mixed types for important accounts (email, banking).", zh: "重要账户（邮箱、银行）请使用至少16个字符并混合类型。" },
  "tool.password-generator.tip3": { en: "Consider using a password manager like Bitwarden or 1Password for storing generated passwords.", zh: "考虑使用Bitwarden或1Password等密码管理器存储生成的密码。" },
  "tool.password-generator.tip4": { en: "Generated passwords are not stored anywhere — copy them immediately or generate a new one.", zh: "生成的密码不会被存储在任何地方——请立即复制或生成新密码。" },

  // UUID Generator
  "tool.uuid-generator.intro": { en: "UUIDs (Universally Unique Identifiers) are 128-bit values used to uniquely identify records, files, or objects in distributed systems. They're a fundamental building block in database design, API development, and software architecture. Our UUID Generator creates version 4 (random) UUIDs using your browser's crypto.randomUUID() API for true randomness. Generate single or bulk UUIDs instantly.", zh: "UUID（通用唯一标识符）是128位的值，用于唯一标识分布式系统中的记录、文件或对象。它们是数据库设计、API开发和软件架构中的基本构建块。我们的UUID生成器使用浏览器的crypto.randomUUID() API创建版本4（随机）UUID，确保真正的随机性。可即时生成单个或批量UUID。" },
  "tool.uuid-generator.step1": { en: "Click 'Generate UUID' to create a single random UUID (v4).", zh: "点击\"生成UUID\"创建单个随机UUID（v4）。" },
  "tool.uuid-generator.step2": { en: "The UUID appears immediately in the output field — click 'Copy' to copy it.", zh: "UUID立即显示在输出字段中——点击\"复制\"进行复制。" },
  "tool.uuid-generator.step3": { en: "To generate multiple UUIDs at once, enter a quantity (1 to 50) and click 'Generate Multiple'.", zh: "要一次生成多个UUID，输入数量（1到50）并点击\"生成多个UUID\"。" },
  "tool.uuid-generator.step4": { en: "Each UUID follows the standard 8-4-4-4-12 hexadecimal format.", zh: "每个UUID遵循标准的8-4-4-4-12十六进制格式。" },
  "tool.uuid-generator.step5": { en: "Use generated UUIDs as database primary keys, API request IDs, or unique file identifiers.", zh: "将生成的UUID用作数据库主键、API请求ID或唯一文件标识符。" },
  "tool.uuid-generator.tip1": { en: "UUID v4 is random — not based on time or machine ID — making it suitable for privacy-sensitive use cases.", zh: "UUID v4是随机生成的——不基于时间或机器ID——使其适用于隐私敏感场景。" },
  "tool.uuid-generator.tip2": { en: "UUIDs are 36 characters with hyphens. Consider removing hyphens if your system requires compact format.", zh: "UUID带连字符共36个字符。如果您的系统需要紧凑格式，可考虑移除连字符。" },
  "tool.uuid-generator.tip3": { en: "The collision probability of UUID v4 is astronomically low — effectively zero for practical applications.", zh: "UUID v4的碰撞概率极低——在实际应用中几乎为零。" },
  "tool.uuid-generator.tip4": { en: "This tool uses the native crypto.randomUUID() method, ensuring cryptographically secure randomness.", zh: "此工具使用原生的crypto.randomUUID()方法，确保加密安全的随机性。" },

  // Hash Generator
  "tool.hash-generator.intro": { en: "Cryptographic hash functions convert any text input into a fixed-length string that uniquely identifies the original data. Hashes are essential for password storage, file integrity verification, digital signatures, and data deduplication. Our Hash Generator supports five algorithms: MD5, SHA-1, SHA-256, SHA-384, and SHA-512. All hashing runs entirely in your browser for maximum privacy.", zh: "加密哈希函数将任何文本输入转换为固定长度的字符串，唯一标识原始数据。哈希对于密码存储、文件完整性验证、数字签名和数据去重至关重要。我们的哈希生成器支持五种算法：MD5、SHA-1、SHA-256、SHA-384和SHA-512。所有哈希计算完全在您的浏览器中运行，确保最大隐私。" },
  "tool.hash-generator.step1": { en: "Enter or paste the text you want to hash into the input field above.", zh: "在上方输入框中输入或粘贴要哈希的文本。" },
  "tool.hash-generator.step2": { en: "Click one of the hash algorithm buttons: MD5, SHA-1, SHA-256, SHA-384, or SHA-512.", zh: "点击其中一个哈希算法按钮：MD5、SHA-1、SHA-256、SHA-384或SHA-512。" },
  "tool.hash-generator.step3": { en: "The corresponding hash value appears immediately in the output field.", zh: "对应的哈希值会立即显示在输出字段中。" },
  "tool.hash-generator.step4": { en: "Click 'Copy' to copy the hash to your clipboard.", zh: "点击\"复制\"将哈希值复制到剪贴板。" },
  "tool.hash-generator.step5": { en: "Use different algorithms as needed — SHA-256 is the current industry standard for most applications.", zh: "根据需要选择不同算法——SHA-256是大多数应用的当前行业标准。" },
  "tool.hash-generator.tip1": { en: "MD5 and SHA-1 are considered cryptographically broken — use SHA-256 or stronger for security purposes.", zh: "MD5和SHA-1被认为在密码学上已破解——用于安全目的请使用SHA-256或更强的算法。" },
  "tool.hash-generator.tip2": { en: "SHA-256 produces a 256-bit (64 character hex) hash, commonly used in blockchain and TLS certificates.", zh: "SHA-256生成256位（64个十六进制字符）的哈希值，常用于区块链和TLS证书。" },
  "tool.hash-generator.tip3": { en: "Even a single character change in the input produces a completely different hash value.", zh: "即使输入中只有一个字符的改变，也会产生完全不同的哈希值。" },
  "tool.hash-generator.tip4": { en: "This tool is useful for verifying file downloads by comparing hash values.", zh: "此工具可通过比较哈希值来验证文件下载的完整性。" },

  // Lorem Ipsum Generator
  "tool.lorem-ipsum.intro": { en: "Lorem Ipsum is the industry standard dummy text used by designers and developers to fill layouts before real content is available. It dates back to the 1500s and uses scrambled Latin text that reads naturally without distracting viewers. Our Lorem Ipsum Generator lets you create customized placeholder text with adjustable paragraph count — perfect for wireframes, mockups, and template development.", zh: "Lorem Ipsum是设计师和开发者在真实内容尚未就位前用来填充布局的行业标准虚拟文本。它可追溯到16世纪，使用乱序的拉丁文本，读起来自然且不会分散读者注意力。我们的Lorem Ipsum生成器可让您创建可调整段落数量的自定义占位文本——非常适合线框、模型和模板开发。" },
  "tool.lorem-ipsum.step1": { en: "Set the number of paragraphs you need using the number input (1 to 50).", zh: "使用数字输入框设置所需的段落数（1到50）。" },
  "tool.lorem-ipsum.step2": { en: "Optionally check 'Start with Lorem Ipsum...' to begin with the classic opening phrase.", zh: "可选择勾选\"以Lorem ipsum dolor sit amet...开头\"来使用经典开篇短语。" },
  "tool.lorem-ipsum.step3": { en: "Click 'Generate' to create your placeholder text.", zh: "点击\"生成\"创建占位文本。" },
  "tool.lorem-ipsum.step4": { en: "The generated text appears in the output area — click 'Copy' to copy it.", zh: "生成的文本显示在输出区域——点击\"复制\"进行复制。" },
  "tool.lorem-ipsum.step5": { en: "Paste the text into your design tool, CMS, or development environment.", zh: "将文本粘贴到您的设计工具、CMS或开发环境中。" },
  "tool.lorem-ipsum.tip1": { en: "Lorem Ipsum has been the printing industry's standard dummy text since the 1500s.", zh: "Lorem Ipsum自16世纪以来一直是印刷行业的虚拟文本标准。" },
  "tool.lorem-ipsum.tip2": { en: "Designers prefer Lorem Ipsum over repeating text because it looks like readable English at a glance.", zh: "设计师更喜欢Lorem Ipsum而非重复文本，因为它乍一看像是可读的英文。" },
  "tool.lorem-ipsum.tip3": { en: "Use 3-5 paragraphs for a typical article layout, 1 paragraph for a card or snippet.", zh: "典型文章布局使用3-5段，卡片或片段使用1段。" },
  "tool.lorem-ipsum.tip4": { en: "Avoid using real content during design — Lorem Ipsum helps focus reviewers on layout, not copy.", zh: "设计时避免使用真实内容——Lorem Ipsum有助于评审者关注布局而非文案。" },

  // JWT Decoder
  "tool.jwt-decoder.intro": { en: "JSON Web Tokens (JWT) are a compact, URL-safe method for transmitting claims between parties. They're widely used for authentication and authorization in modern web applications. Our JWT Decoder lets you decode the header and payload of any JWT token, displaying them as formatted JSON for easy inspection. All decoding occurs locally in your browser — your tokens are never sent to any server, maintaining complete security.", zh: "JSON Web Token（JWT）是一种紧凑且URL安全的方法，用于在各方之间传输声明。它们广泛用于现代Web应用中的身份验证和授权。我们的JWT解码器可解码任何JWT令牌的Header和Payload，将其显示为格式化的JSON便于检查。所有解码均在您的浏览器本地进行——您的令牌永远不会发送到任何服务器，保持完全安全。" },
  "tool.jwt-decoder.step1": { en: "Paste your JWT token into the input field above.", zh: "将JWT令牌粘贴到上方的输入框中。" },
  "tool.jwt-decoder.step2": { en: "Click 'Decode' to parse the token.", zh: "点击\"解码\"解析令牌。" },
  "tool.jwt-decoder.step3": { en: "View the decoded header (algorithm, token type) in the first code block.", zh: "在第一个代码块中查看解码后的Header（算法、令牌类型）。" },
  "tool.jwt-decoder.step4": { en: "View the decoded payload (claims, user data, expiration) in the second code block.", zh: "在第二个代码块中查看解码后的Payload（声明、用户数据、过期时间）。" },
  "tool.jwt-decoder.step5": { en: "Verify the token structure: a valid JWT has three parts separated by dots (header.payload.signature).", zh: "验证令牌结构：有效的JWT有三个由点分隔的部分（header.payload.signature）。" },
  "tool.jwt-decoder.tip1": { en: "JWTs are Base64URL-encoded, not encrypted — the payload can be read by anyone with the token.", zh: "JWT是Base64URL编码而非加密——持有令牌的任何人都可以读取Payload。" },
  "tool.jwt-decoder.tip2": { en: "The signature verifies the token hasn't been tampered with but this tool does not verify signatures.", zh: "签名可验证令牌未被篡改，但此工具不验证签名。" },
  "tool.jwt-decoder.tip3": { en: "Check the 'exp' claim in the payload to see if the token has expired.", zh: "检查Payload中的\"exp\"声明以查看令牌是否已过期。" },
  "tool.jwt-decoder.tip4": { en: "Never paste production JWT tokens into online tools that send data to a server — ours is client-side only.", zh: "切勿将生产环境JWT令牌粘贴到会向服务器发送数据的在线工具中——我们的工具仅在客户端运行。" },

  // Text Deduplicator
  "tool.text-deduplicator.intro": { en: "Clean up your text data by removing duplicate lines instantly. Whether you're processing email lists, cleaning up log files, or preparing unique data for import, our Text Deduplicator handles it efficiently. Options include removing duplicates while preserving order, alphabetical sorting, reverse sorting, and automatic whitespace trimming. All processing is done locally in your browser.", zh: "通过即时删除重复行来清理您的文本数据。无论您是在处理邮件列表、清理日志文件还是准备导入的唯一数据，我们的文本去重器都能高效处理。选项包括去重保留顺序、按字母排序、反向排序和自动去除首尾空格。所有处理均在您的浏览器本地完成。" },
  "tool.text-deduplicator.step1": { en: "Paste your text (one item per line) into the textarea above.", zh: "将文本（每行一个条目）粘贴到上方的文本区域。" },
  "tool.text-deduplicator.step2": { en: "Choose processing options: remove duplicates, sort alphabetically, sort reverse, or trim whitespace.", zh: "选择处理选项：去除重复、按字母排序（A-Z）、按字母排序（Z-A）或去除首尾空格。" },
  "tool.text-deduplicator.step3": { en: "Click 'Process' to apply the selected operation.", zh: "点击\"处理\"应用所选操作。" },
  "tool.text-deduplicator.step4": { en: "View statistics: original line count, unique line count, and number of duplicates removed.", zh: "查看统计数据：原始行数、唯一行数和已去除的重复行数。" },
  "tool.text-deduplicator.step5": { en: "Click 'Copy' to copy the deduplicated result.", zh: "点击\"复制\"复制去重后的结果。" },
  "tool.text-deduplicator.tip1": { en: "Case-sensitive deduplication means 'Apple' and 'apple' are treated as different lines.", zh: "区分大小写的去重意味着'Apple'和'apple'被视为不同的行。" },
  "tool.text-deduplicator.tip2": { en: "Trimming whitespace is useful for data copied from spreadsheets or exported from databases.", zh: "去除首尾空格对从电子表格复制或从数据库导出的数据很有用。" },
  "tool.text-deduplicator.tip3": { en: "Alphabetical sorting helps quickly identify patterns or anomalies in your data.", zh: "按字母排序有助于快速识别数据中的模式或异常。" },
  "tool.text-deduplicator.tip4": { en: "This tool is ideal for cleaning mailing lists, removing duplicate URLs, or preparing unique ID lists.", zh: "此工具非常适合清理邮件列表、删除重复URL或准备唯一ID列表。" },

  // Color Converter
  "tool.color-converter.intro": { en: "Color formats vary across design tools, CSS, and programming languages. Our Color Converter provides instant conversion between HEX, RGB, HSL, and HSV formats, along with a visual color picker. Whether you're translating a designer's HEX value to RGB for your code, or experimenting with HSL adjustments, this tool makes color format conversion effortless.", zh: "颜色格式因设计工具、CSS和编程语言而异。我们的颜色转换器提供HEX、RGB、HSL和HSV格式之间的即时转换，并配有可视化颜色选择器。无论您是将设计师的HEX值转换为代码中的RGB，还是尝试HSL调整，此工具都能让颜色格式转换变得轻松简单。" },
  "tool.color-converter.step1": { en: "Use the color picker to visually select a color, or type a value into any format field.", zh: "使用颜色选择器可视化选择颜色，或在任何格式字段中键入数值。" },
  "tool.color-converter.step2": { en: "HEX values use the #RRGGBB format (e.g., #2563eb).", zh: "HEX值使用#RRGGBB格式（例如#2563eb）。" },
  "tool.color-converter.step3": { en: "RGB values use the rgb(R, G, B) format with values from 0 to 255.", zh: "RGB值使用rgb(R, G, B)格式，数值从0到255。" },
  "tool.color-converter.step4": { en: "HSL values use hsl(H, S%, L%) with hue in degrees and saturation/lightness as percentages.", zh: "HSL值使用hsl(H, S%, L%)格式，色相为度数，饱和度/亮度为百分比。" },
  "tool.color-converter.step5": { en: "Click the Copy button next to any format to copy that value to your clipboard.", zh: "点击任何格式旁边的复制按钮，将该值复制到剪贴板。" },
  "tool.color-converter.tip1": { en: "HSL is often more intuitive for adjusting colors — hue rotates the color wheel, saturation controls vividness.", zh: "HSL通常更直观地调整颜色——色相旋转色轮，饱和度控制鲜艳度。" },
  "tool.color-converter.tip2": { en: "HEX is the most compact format and is widely used in CSS and HTML.", zh: "HEX是最紧凑的格式，广泛用于CSS和HTML中。" },
  "tool.color-converter.tip3": { en: "RGB is the standard format used in programming languages like JavaScript and Python.", zh: "RGB是JavaScript和Python等编程语言中使用的标准格式。" },
  "tool.color-converter.tip4": { en: "The color preview swatch updates in real time as you modify any field.", zh: "颜色预览色块会在您修改任何字段时实时更新。" },

  // HTML Entity Encoder
  "tool.html-entity-encoder.intro": { en: "HTML entities are special character sequences that represent reserved XML/HTML characters. For example, '<' becomes '&lt;' and '>' becomes '&gt;'. Encoding is essential when displaying code snippets in web pages, preventing XSS attacks, and embedding special characters in HTML content. Our encoder/decoder handles all common HTML entities safely and accurately.", zh: "HTML实体是表示保留XML/HTML字符的特殊字符序列。例如，'<'变为'&lt;'，'>'变为'&gt;'。编码对于在网页中显示代码片段、防止XSS攻击以及在HTML内容中嵌入特殊字符至关重要。我们的编码/解码器安全准确地处理所有常见的HTML实体。" },
  "tool.html-entity-encoder.step1": { en: "Paste your text into the input field above.", zh: "将文本粘贴到上方的输入框中。" },
  "tool.html-entity-encoder.step2": { en: "Click 'Encode' to convert special characters (&, <, >, \", ') into HTML entities.", zh: "点击\"编码\"将特殊字符（&、<、>、\"、'）转换为HTML实体。" },
  "tool.html-entity-encoder.step3": { en: "Click 'Decode' to convert HTML entities back to readable text.", zh: "点击\"解码\"将HTML实体转换回可读文本。" },
  "tool.html-entity-encoder.step4": { en: "Copy the result using the Copy button.", zh: "使用复制按钮复制结果。" },
  "tool.html-entity-encoder.step5": { en: "A reference table below shows common HTML entities and their corresponding characters.", zh: "下方的参考表显示了常见的HTML实体及其对应字符。" },
  "tool.html-entity-encoder.tip1": { en: "HTML encoding is different from URL encoding — use the appropriate tool for your use case.", zh: "HTML编码与URL编码不同——请为您的具体场景使用相应的工具。" },
  "tool.html-entity-encoder.tip2": { en: "Encoding is critical when displaying user-submitted content to prevent cross-site scripting (XSS).", zh: "显示用户提交的内容时，编码对于防止跨站脚本（XSS）至关重要。" },
  "tool.html-entity-encoder.tip3": { en: "Named entities (like &amp; for &) are more readable than numeric entities (like &#38; for &).", zh: "命名实体（如&amp;表示&）比数字实体（如&#38;表示&）更易读。" },
  "tool.html-entity-encoder.tip4": { en: "This tool is useful for bloggers, forum moderators, and web developers working with user-generated content.", zh: "此工具对博客作者、论坛管理员和处理用户生成内容的Web开发人员很有用。" },

  // Image to Base64
  "tool.image-to-base64.intro": { en: "Convert any image to a Base64 data URI string that can be embedded directly in HTML, CSS, or JSON. Data URIs eliminate the need for separate image files, reducing HTTP requests and simplifying email templates and single-file HTML documents. The tool provides output in multiple formats — raw Base64, CSS background-image format, and HTML img tag format — ready to paste into your project.", zh: "将任何图片转换为可直接嵌入HTML、CSS或JSON中的Base64数据URI字符串。数据URI消除了对单独图片文件的需求，减少HTTP请求，并简化了电子邮件模板和单文件HTML文档。该工具提供多种输出格式——原始Base64、CSS背景图片格式和HTML img标签格式——可直接粘贴到您的项目中。" },
  "tool.image-to-base64.step1": { en: "Upload an image by clicking the file input above.", zh: "点击上方的文件上传区域上传图片。" },
  "tool.image-to-base64.step2": { en: "The image preview and Base64 string appear automatically.", zh: "图片预览和Base64字符串会自动显示。" },
  "tool.image-to-base64.step3": { en: "Use the Copy buttons to copy the Base64 string in your preferred format.", zh: "使用复制按钮以您偏好的格式复制Base64字符串。" },
  "tool.image-to-base64.step4": { en: "The displayed Base64 string length and original image dimensions help you assess the output.", zh: "显示的Base64字符串长度和原始图片尺寸有助于您评估输出。" },
  "tool.image-to-base64.step5": { en: "Paste the data URI directly into your HTML, CSS, or JSON code.", zh: "将数据URI直接粘贴到您的HTML、CSS或JSON代码中。" },
  "tool.image-to-base64.tip1": { en: "Base64-encoded images are approximately 33% larger than the original binary file.", zh: "Base64编码的图片大约比原始二进制文件大33%。" },
  "tool.image-to-base64.tip2": { en: "Data URIs are best for small images (icons, logos) — avoid embedding large photos as Base64.", zh: "数据URI最适合小图片（图标、Logo）——避免将大照片嵌入为Base64。" },
  "tool.image-to-base64.tip3": { en: "CSS background-image format: url(data:image/png;base64,...) — ready for stylesheets.", zh: "CSS背景图片格式：url(data:image/png;base64,...)——可直接用于样式表。" },
  "tool.image-to-base64.tip4": { en: "Email templates commonly use Base64 images to ensure images display without external hosting.", zh: "电子邮件模板通常使用Base64图片，确保图片显示不需要外部托管。" },

  // Case Converter
  "tool.case-converter.intro": { en: "Convert text between nine common case formats with a single click. Whether you're standardizing database column names to snake_case, formatting programming variables to camelCase, or preparing a title in Title Case, our Case Converter handles all conversions instantly. Each case format serves a specific purpose in writing, programming, and data processing.", zh: "一键在九种常见大小写格式之间转换文本。无论您是将数据库列名标准化为snake_case、将编程变量格式化为camelCase，还是准备Title Case格式的标题，我们的转换器都能即时处理所有转换。每种大小写格式在写作、编程和数据处理中都有特定的用途。" },
  "tool.case-converter.step1": { en: "Type or paste your text into the textarea above.", zh: "在上方文本区域输入或粘贴您的文本。" },
  "tool.case-converter.step2": { en: "Choose a case format: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, or CONSTANT_CASE.", zh: "选择一种大小写格式：全大写、全小写、标题大小写、句首大小写、驼峰命名、帕斯卡命名、下划线命名、中横线命名或常量命名。" },
  "tool.case-converter.step3": { en: "The converted text appears immediately — click 'Copy' to copy the result.", zh: "转换后的文本立即显示——点击\"复制\"复制结果。" },
  "tool.case-converter.step4": { en: "Try different formats to see how your text transforms in each.", zh: "尝试不同格式，查看文本在每种格式中的转换效果。" },
  "tool.case-converter.step5": { en: "Use the result directly in your code, document, or database.", zh: "直接在代码、文档或数据库中使用转换结果。" },
  "tool.case-converter.tip1": { en: "camelCase: first word lowercase, subsequent words capitalized — standard for JavaScript variables.", zh: "camelCase：首单词小写，后续单词首字母大写——JavaScript变量的标准格式。" },
  "tool.case-converter.tip2": { en: "PascalCase: all words capitalized — used for React components and C# class names.", zh: "PascalCase：所有单词首字母大写——用于React组件和C#类名。" },
  "tool.case-converter.tip3": { en: "snake_case: words separated by underscores — standard for Python, Ruby, and SQL column names.", zh: "snake_case：单词间用下划线分隔——Python、Ruby和SQL列名的标准。" },
  "tool.case-converter.tip4": { en: "kebab-case: words separated by hyphens — used in CSS class names and URL slugs.", zh: "kebab-case：单词间用连字符分隔——用于CSS类名和URL slug。" },

  // Text Diff Checker
  "tool.text-diff.intro": { en: "Compare two versions of text side by side and instantly see every change — additions (green), deletions (red), and unchanged lines (gray). Our Text Diff Checker is essential for code review, document version tracking, configuration comparison, and any scenario where you need to understand exactly what changed between two versions. The comparison runs with a 300ms debounce for smooth real-time updates.", zh: "并排比较两个文本版本，即时查看每个更改——新增内容（绿色）、删除内容（红色）和未修改行（灰色）。我们的文本差异检查器对于代码审查、文档版本跟踪、配置对比以及任何需要了解两个版本之间具体变化的场景都至关重要。比较以300ms防抖运行，实现流畅的实时更新。" },
  "tool.text-diff.step1": { en: "Paste the original text in the left textarea.", zh: "在左侧文本区域粘贴原始文本。" },
  "tool.text-diff.step2": { en: "Paste the modified text in the right textarea.", zh: "在右侧文本区域粘贴修改后的文本。" },
  "tool.text-diff.step3": { en: "The diff comparison updates automatically as you type (or click 'Compare Now').", zh: "差异比较会在您输入时自动更新（或点击\"开始对比\"）。" },
  "tool.text-diff.step4": { en: "Green lines with '+' prefix indicate additions. Red lines with '-' prefix indicate deletions.", zh: "带有'+'前缀的绿色行表示新增内容。带有'-'前缀的红色行表示删除内容。" },
  "tool.text-diff.step5": { en: "View the summary: total lines added and removed.", zh: "查看摘要：新增和删除的总行数。" },
  "tool.text-diff.tip1": { en: "The side-by-side layout makes it easy to spot differences at a glance.", zh: "并排布局使差异一目了然。" },
  "tool.text-diff.tip2": { en: "Line numbers help reference specific changes in code reviews or document discussions.", zh: "行号有助于在代码审查或文档讨论中引用特定更改。" },
  "tool.text-diff.tip3": { en: "The diff algorithm works on a line-by-line basis — the entire line is marked if any character differs.", zh: "差异比较算法逐行进行——如果有任何字符不同，整行都会被标记。" },
  "tool.text-diff.tip4": { en: "Use the 'Compare Now' button for a manual refresh when comparing long documents.", zh: "对比长文档时可使用\"开始对比\"按钮手动刷新。" },
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
