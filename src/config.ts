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
  content: {
    intro: string;
    steps: string[];
    tips: string[];
  };
}

export const allTools: ToolMeta[] = [
  {
    title: "JSON Formatter",
    description: "Format, validate, and beautify JSON data instantly. Parse and fix malformed JSON with syntax highlighting.",
    slug: "json-formatter",
    category: "Developer",
    keywords: ["json formatter", "json beautifier", "json validator", "format json"],
    content: {
      intro: "Our JSON Formatter helps developers and data analysts quickly convert messy, minified, or unreadable JSON into a clean, indented, human-readable format. It also validates JSON syntax and pinpoints exactly where errors occur, making debugging faster and easier. This tool is 100% client-side — your data never leaves your browser, ensuring maximum privacy and security.",
      steps: ["Paste your JSON string into the input textarea above.", "Click the 'Format' button to beautify with 2-space indentation.", "Use 'Validate' to check if the JSON is syntactically correct.", "Click 'Minify' to compress the JSON into a single line for production use.", "Copy the result to your clipboard with the Copy button."],
      tips: ["You can paste JSON from any source — API responses, config files, or database exports.", "The validator shows the exact line and character where errors occur.", "Minified JSON is ideal for reducing file size in production environments.", "This tool also works as a JSON prettifier for large, complex nested objects."],
    },
  },
  {
    title: "Base64 Encoder / Decoder",
    description: "Encode text to Base64 or decode Base64 strings back to plain text. Supports UTF-8 and binary data.",
    slug: "base64-encoder",
    category: "Developer",
    keywords: ["base64 encode", "base64 decode", "base64 converter", "decode base64"],
    content: {
      intro: "Base64 encoding converts binary data or text into a radix-64 ASCII string format, commonly used for embedding images directly in HTML/CSS, transmitting data in APIs, or storing binary content in text-only databases. Our tool handles both encoding and decoding with full UTF-8 support, ensuring accurate conversion for international characters and emoji. All processing runs locally in your browser — nothing is sent to any server.",
      steps: ["Enter or paste the text you want to encode/decode in the input field above.", "Click 'Encode' to convert your text to Base64 format.", "Click 'Decode' to convert a Base64 string back to plain text.", "Copy the result using the Copy button.", "Use the output in your HTML, CSS, API requests, or data URIs."],
      tips: ["Base64 encoding increases data size by approximately 33%.", "For image embedding, the Image to Base64 tool on this site offers a dedicated UI.", "Base64 is commonly used in JSON Web Tokens (JWT) and data URL schemes.", "UTF-8 support means Chinese characters, emojis, and special symbols encode correctly."],
    },
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes from URLs, text, or any data. Customizable size and color. Free, no sign-up needed.",
    slug: "qr-code-generator",
    category: "Utility",
    keywords: ["qr code generator", "qr code maker", "create qr code", "free qr code"],
    content: {
      intro: "Generate high-quality QR codes instantly for any URL, text, Wi-Fi credentials, or contact information. Our QR code generator allows full customization of size (100 to 500 pixels) and colors, ensuring your QR codes match your brand. Download your generated QR code as a PNG image, ready for printing or digital use. No watermark, no sign-up, completely free.",
      steps: ["Enter your URL, text, or data into the input field above.", "Adjust the size slider (100 to 500 pixels) to set the QR code dimensions.", "Optionally customize foreground and background colors using the color pickers.", "Click 'Generate QR Code' to create your QR code on the canvas.", "Click 'Download PNG' to save the QR code image to your device."],
      tips: ["QR codes can store URLs, plain text, phone numbers, and Wi-Fi login credentials.", "For print use, set the size to 300px or larger for best scanning reliability.", "Dark foreground on light background provides the best contrast for scanning.", "You can test your QR code by scanning it with your phone's camera before downloading."],
    },
  },
  {
    title: "URL Encoder / Decoder",
    description: "Encode special characters for URLs or decode percent-encoded URLs back to readable text.",
    slug: "url-encoder",
    category: "Developer",
    keywords: ["url encode", "url decode", "url encoder online", "percent encoding"],
    content: {
      intro: "URL encoding (also called percent-encoding) converts special characters into a format safe for transmission in URLs. Characters like spaces, ampersands, question marks, and non-ASCII symbols are replaced with a '%' followed by their hex value. Our URL encoder/decoder handles the complete encoding process, making your URLs compatible with all web browsers and servers. Processing is done entirely in your browser.",
      steps: ["Paste your URL or text into the input field above.", "Click 'Encode URL' to convert special characters to percent-encoded format.", "Click 'Decode URL' to convert a percent-encoded URL back to readable text.", "Copy the encoded or decoded result using the Copy button.", "Use the output directly in links, API calls, or HTML href attributes."],
      tips: ["URL encoding is different from HTML entity encoding — use the appropriate tool for each.", "Query parameters with special characters (like &, =, spaces) must be URL-encoded.", "Decoding is useful for understanding what a complex URL actually contains.", "All modern browsers automatically encode URLs, but manual encoding is needed for API development."],
    },
  },
  {
    title: "Image Compressor",
    description: "Compress JPEG, PNG, and WebP images online. Reduce file size without losing quality. 100% client-side.",
    slug: "image-compressor",
    category: "Image",
    keywords: ["compress image", "image compressor", "reduce image size", "compress jpg"],
    content: {
      intro: "Compress your images to dramatically reduce file size while maintaining visual quality. Whether you're optimizing images for a website, preparing email attachments, or saving storage space, our image compressor handles JPEG, PNG, and WebP formats. Adjust the quality slider to find the perfect balance between file size and image clarity. Maximum privacy — all compression runs locally in your browser.",
      steps: ["Upload an image by clicking the file input or dragging an image onto it.", "Adjust the quality slider (lower values = smaller file but lower quality).", "Optionally set maximum width/height to resize the image during compression.", "Click 'Compress' to process the image — wait for the compression to complete.", "Compare original and compressed sizes, then click 'Download Compressed Image' to save."],
      tips: ["A quality setting of 0.7 typically reduces file size by 60-80% with minimal visible difference.", "For web use, compressing images below 100KB significantly improves page load speed.", "Set max width/height to 1200px for blog images — larger is rarely needed.", "This tool is especially useful for photographers, bloggers, and e-commerce site owners."],
    },
  },
  {
    title: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.",
    slug: "timestamp-converter",
    category: "Developer",
    keywords: ["timestamp converter", "unix timestamp", "epoch converter", "timestamp to date"],
    content: {
      intro: "Unix timestamps (also called Epoch time) represent the number of seconds or milliseconds since January 1, 1970. They are widely used in databases, APIs, and logging systems for storing date/time information in a compact, timezone-independent format. Our converter works bidirectionally — convert timestamps to readable dates and vice versa — supporting both second and millisecond precision.",
      steps: ["Enter a Unix timestamp (seconds or milliseconds) in the input field above.", "Select whether your timestamp is in seconds or milliseconds.", "Click 'Convert to Date' to see the human-readable date in multiple formats (UTC, ISO, local time).", "Or use the date picker to select a date and generate its Unix timestamp.", "Copy either the timestamp or the formatted date as needed."],
      tips: ["Most JavaScript timestamps use milliseconds (13 digits). Most Unix systems use seconds (10 digits).", "ISO 8601 format (e.g., 2026-06-15T12:34:56Z) is the most portable for cross-system use.", "Unix timestamps ignore timezones entirely — they represent the same moment everywhere.", "This tool helps debug API responses, database records, and log file entries."],
    },
  },
  {
    title: "Markdown Previewer",
    description: "Write and preview Markdown in real-time. See how your Markdown renders as HTML instantly.",
    slug: "markdown-previewer",
    category: "Developer",
    keywords: ["markdown preview", "markdown editor", "markdown to html", "md preview"],
    content: {
      intro: "Markdown is a lightweight markup language used to format text with simple, readable syntax. It's the standard for README files on GitHub, documentation, blog posts, and technical writing. Our Markdown Previewer provides a live, split-pane editing experience — type Markdown on the left and see the rendered HTML on the right instantly as you type. Copy the HTML output for use anywhere.",
      steps: ["Type or paste Markdown text in the left textarea.", "Watch the right panel display the rendered HTML in real time as you type.", "Use standard Markdown syntax: # for headings, ** for bold, []() for links, etc.", "Click 'Copy HTML' to copy the rendered HTML to your clipboard.", "Paste the HTML into your website, CMS, or blog platform."],
      tips: ["Supported syntax includes headings, lists, code blocks, tables, links, images, and blockquotes.", "Markdown is much faster to write than HTML for structured documents.", "The preview updates on every keystroke — no need to click any button to see changes.", "Commonly used by developers for project documentation and by writers for draft articles."],
    },
  },
  {
    title: "Regex Tester",
    description: "Test regular expressions against text with real-time matching. See matches, groups, and replacements.",
    slug: "regex-tester",
    category: "Developer",
    keywords: ["regex tester", "regex test", "regular expression tester", "regex online"],
    content: {
      intro: "Regular expressions (regex) are powerful pattern-matching tools used to search, validate, and manipulate text. They're essential for form validation, data extraction, log parsing, and text processing. Our Regex Tester lets you build and test regex patterns against sample text in real time. See all matches highlighted instantly, with support for common flags like global (g), case-insensitive (i), and multiline (m).",
      steps: ["Enter your regex pattern in the pattern input field above.", "Optionally add flags (g for global, i for case-insensitive, m for multiline).", "Paste the text you want to test against in the textarea.", "Matches are displayed in real time as you type.", "View the total match count and a list of all captured groups."],
      tips: ["Use parentheses () to create capture groups for extracting specific parts of a match.", "The dot . matches any character except newline. Use [\\s\\S] to match truly any character.", "Regex101.com is another tool for deep regex analysis — use ours for quick, privacy-focused testing.", "Common patterns: \\d+ for numbers, [A-Za-z]+ for words, ^ for start, $ for end of line."],
    },
  },
  {
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs. Get reading time estimates for your text.",
    slug: "word-counter",
    category: "Text",
    keywords: ["word counter", "character counter", "word count", "count words"],
    content: {
      intro: "Quickly analyze any text to get accurate word, character, sentence, and paragraph counts. Whether you're checking an essay against a word limit, measuring social media post length, or estimating reading time for a blog article, our Word Counter provides instant statistics as you type. All analysis happens locally in your browser for complete privacy.",
      steps: ["Type or paste your text into the textarea above.", "View real-time statistics: word count, character count (with and without spaces), sentences, and paragraphs.", "Check the estimated reading time based on average reading speed.", "The statistics update automatically as you add or remove text.", "Use the Copy button to copy your text if needed."],
      tips: ["Reading time is estimated at 200 words per minute, the average adult reading speed.", "Character count without spaces is useful for SMS, tweets, and meta descriptions with character limits.", "Sentence count helps writers maintain varied sentence lengths for better readability.", "Many content platforms have minimum word requirements — use this tool to verify you meet them."],
    },
  },
  {
    title: "Password Generator",
    description: "Generate strong, secure passwords with customizable length, symbols, numbers, and case options.",
    slug: "password-generator",
    category: "Utility",
    keywords: ["password generator", "strong password", "random password", "secure password"],
    content: {
      intro: "Create cryptographically secure passwords instantly. Our Password Generator uses your browser's built-in crypto API to generate truly random passwords, not pseudo-random algorithms. Customize the length (4 to 64 characters) and choose which character types to include — uppercase, lowercase, numbers, and symbols. Each password is generated locally and never transmitted anywhere.",
      steps: ["Use the slider to set your desired password length (16 characters is recommended for most uses).", "Check or uncheck character type options: uppercase, lowercase, numbers, and symbols.", "Click 'Generate' to create a new random password.", "View the password strength indicator — aim for 'Strong'.", "Click 'Copy' to copy the password to your clipboard for pasting into a password field or manager."],
      tips: ["Password strength is based on length and character diversity — longer with all types = strongest.", "Use at least 16 characters with mixed types for important accounts (email, banking).", "Consider using a password manager like Bitwarden or 1Password for storing generated passwords.", "Generated passwords are not stored anywhere — copy them immediately or generate a new one."],
    },
  },
  {
    title: "UUID Generator",
    description: "Generate random UUIDs (v4) and GUIDs. Copy with one click. Perfect for developer testing.",
    slug: "uuid-generator",
    category: "Developer",
    keywords: ["uuid generator", "guid generator", "generate uuid", "uuid v4"],
    content: {
      intro: "UUIDs (Universally Unique Identifiers) are 128-bit values used to uniquely identify records, files, or objects in distributed systems. They're a fundamental building block in database design, API development, and software architecture. Our UUID Generator creates version 4 (random) UUIDs using your browser's `crypto.randomUUID()` API for true randomness. Generate single or bulk UUIDs instantly.",
      steps: ["Click 'Generate UUID' to create a single random UUID (v4).", "The UUID appears immediately in the output field — click 'Copy' to copy it.", "To generate multiple UUIDs at once, enter a quantity (1 to 50) and click 'Generate Multiple'.", "Each UUID follows the standard 8-4-4-4-12 hexadecimal format.", "Use generated UUIDs as database primary keys, API request IDs, or unique file identifiers."],
      tips: ["UUID v4 is random — not based on time or machine ID — making it suitable for privacy-sensitive use cases.", "UUIDs are 36 characters with hyphens. Consider removing hyphens if your system requires compact format.", "The collision probability of UUID v4 is astronomically low — effectively zero for practical applications.", "This tool uses the native crypto.randomUUID() method, ensuring cryptographically secure randomness."],
    },
  },
  {
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text input.",
    slug: "hash-generator",
    category: "Developer",
    keywords: ["md5 generator", "sha256", "hash generator", "sha1", "sha512 online"],
    content: {
      intro: "Cryptographic hash functions convert any text input into a fixed-length string that uniquely identifies the original data. Hashes are essential for password storage, file integrity verification, digital signatures, and data deduplication. Our Hash Generator supports five algorithms: MD5, SHA-1, SHA-256, SHA-384, and SHA-512. All hashing runs entirely in your browser for maximum privacy.",
      steps: ["Enter or paste the text you want to hash into the input field above.", "Click one of the hash algorithm buttons: MD5, SHA-1, SHA-256, SHA-384, or SHA-512.", "The corresponding hash value appears immediately in the output field.", "Click 'Copy' to copy the hash to your clipboard.", "Use different algorithms as needed — SHA-256 is the current industry standard for most applications."],
      tips: ["MD5 and SHA-1 are considered cryptographically broken — use SHA-256 or stronger for security purposes.", "SHA-256 produces a 256-bit (64 character hex) hash, commonly used in blockchain and TLS certificates.", "Even a single character change in the input produces a completely different hash value.", "This tool is useful for verifying file downloads by comparing hash values."],
    },
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate Lorem Ipsum placeholder text for your designs. Customize paragraph count and length.",
    slug: "lorem-ipsum",
    category: "Text",
    keywords: ["lorem ipsum", "placeholder text", "dummy text", "lorem ipsum generator"],
    content: {
      intro: "Lorem Ipsum is the industry standard dummy text used by designers and developers to fill layouts before real content is available. It dates back to the 1500s and uses scrambled Latin text that reads naturally without distracting viewers. Our Lorem Ipsum Generator lets you create customized placeholder text with adjustable paragraph count — perfect for wireframes, mockups, and template development.",
      steps: ["Set the number of paragraphs you need using the number input (1 to 50).", "Optionally check 'Start with Lorem Ipsum...' to begin with the classic opening phrase.", "Click 'Generate' to create your placeholder text.", "The generated text appears in the output area — click 'Copy' to copy it.", "Paste the text into your design tool, CMS, or development environment."],
      tips: ["Lorem Ipsum has been the printing industry's standard dummy text since the 1500s.", "Designers prefer Lorem Ipsum over repeating text because it looks like readable English at a glance.", "Use 3-5 paragraphs for a typical article layout, 1 paragraph for a card or snippet.", "Avoid using real content during design — Lorem Ipsum helps focus reviewers on layout, not copy."],
    },
  },
  {
    title: "JWT Decoder",
    description: "Decode JWT tokens and inspect the header, payload, and signature. No data is sent to any server.",
    slug: "jwt-decoder",
    category: "Developer",
    keywords: ["jwt decoder", "jwt parser", "decode jwt", "jwt token decoder"],
    content: {
      intro: "JSON Web Tokens (JWT) are a compact, URL-safe method for transmitting claims between parties. They're widely used for authentication and authorization in modern web applications. Our JWT Decoder lets you decode the header and payload of any JWT token, displaying them as formatted JSON for easy inspection. All decoding occurs locally in your browser — your tokens are never sent to any server, maintaining complete security.",
      steps: ["Paste your JWT token into the input field above.", "Click 'Decode' to parse the token.", "View the decoded header (algorithm, token type) in the first code block.", "View the decoded payload (claims, user data, expiration) in the second code block.", "Verify the token structure: a valid JWT has three parts separated by dots (header.payload.signature)."],
      tips: ["JWTs are Base64URL-encoded, not encrypted — the payload can be read by anyone with the token.", "The signature verifies the token hasn't been tampered with but this tool does not verify signatures.", "Check the 'exp' claim in the payload to see if the token has expired.", "Never paste production JWT tokens into online tools that send data to a server — ours is client-side only."],
    },
  },
  {
    title: "Text Deduplicator",
    description: "Remove duplicate lines from text. Sort alphabetically, keep first occurrence, or remove all duplicates.",
    slug: "text-deduplicator",
    category: "Text",
    keywords: ["remove duplicates", "deduplicate text", "unique lines", "text dedupe"],
    content: {
      intro: "Clean up your text data by removing duplicate lines instantly. Whether you're processing email lists, cleaning up log files, or preparing unique data for import, our Text Deduplicator handles it efficiently. Options include removing duplicates while preserving order, alphabetical sorting, reverse sorting, and automatic whitespace trimming. All processing is done locally in your browser.",
      steps: ["Paste your text (one item per line) into the textarea above.", "Choose processing options: remove duplicates, sort alphabetically, sort reverse, or trim whitespace.", "Click 'Process' to apply the selected operation.", "View statistics: original line count, unique line count, and number of duplicates removed.", "Click 'Copy' to copy the deduplicated result."],
      tips: ["Case-sensitive deduplication means 'Apple' and 'apple' are treated as different lines.", "Trimming whitespace is useful for data copied from spreadsheets or exported from databases.", "Alphabetical sorting helps quickly identify patterns or anomalies in your data.", "This tool is ideal for cleaning mailing lists, removing duplicate URLs, or preparing unique ID lists."],
    },
  },
  {
    title: "Color Converter",
    description: "Convert colors between HEX, RGB, HSL, and HSV formats. Pick colors visually with the color picker.",
    slug: "color-converter",
    category: "Utility",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker"],
    content: {
      intro: "Color formats vary across design tools, CSS, and programming languages. Our Color Converter provides instant conversion between HEX, RGB, HSL, and HSV formats, along with a visual color picker. Whether you're translating a designer's HEX value to RGB for your code, or experimenting with HSL adjustments, this tool makes color format conversion effortless.",
      steps: ["Use the color picker to visually select a color, or type a value into any format field.", "HEX values use the #RRGGBB format (e.g., #2563eb).", "RGB values use the rgb(R, G, B) format with values from 0 to 255.", "HSL values use hsl(H, S%, L%) with hue in degrees and saturation/lightness as percentages.", "Click the Copy button next to any format to copy that value to your clipboard."],
      tips: ["HSL is often more intuitive for adjusting colors — hue rotates the color wheel, saturation controls vividness.", "HEX is the most compact format and is widely used in CSS and HTML.", "RGB is the standard format used in programming languages like JavaScript and Python.", "The color preview swatch updates in real time as you modify any field."],
    },
  },
  {
    title: "HTML Entity Encoder / Decoder",
    description: "Encode special HTML characters to entities and decode HTML entities back to readable text.",
    slug: "html-entity-encoder",
    category: "Developer",
    keywords: ["html entity encoder", "html entity decoder", "html encode", "escape html"],
    content: {
      intro: "HTML entities are special character sequences that represent reserved XML/HTML characters. For example, '<' becomes '&lt;' and '>' becomes '&gt;'. Encoding is essential when displaying code snippets in web pages, preventing XSS attacks, and embedding special characters in HTML content. Our encoder/decoder handles all common HTML entities safely and accurately.",
      steps: ["Paste your text into the input field above.", "Click 'Encode' to convert special characters (&, <, >, \", ') into HTML entities.", "Click 'Decode' to convert HTML entities back to readable text.", "Copy the result using the Copy button.", "A reference table below shows common HTML entities and their corresponding characters."],
      tips: ["HTML encoding is different from URL encoding — use the appropriate tool for your use case.", "Encoding is critical when displaying user-submitted content to prevent cross-site scripting (XSS).", "Named entities (like &amp; for &) are more readable than numeric entities (like &#38; for &).", "This tool is useful for bloggers, forum moderators, and web developers working with user-generated content."],
    },
  },
  {
    title: "Image to Base64",
    description: "Convert images to Base64 data URIs. Embed images directly in HTML, CSS, or JSON without external files.",
    slug: "image-to-base64",
    category: "Image",
    keywords: ["image to base64", "convert image to base64", "base64 image", "img to base64"],
    content: {
      intro: "Convert any image to a Base64 data URI string that can be embedded directly in HTML, CSS, or JSON. Data URIs eliminate the need for separate image files, reducing HTTP requests and simplifying email templates and single-file HTML documents. The tool provides output in multiple formats — raw Base64, CSS background-image format, and HTML img tag format — ready to paste into your project.",
      steps: ["Upload an image by clicking the file input above.", "The image preview and Base64 string appear automatically.", "Use the Copy buttons to copy the Base64 string in your preferred format.", "The displayed Base64 string length and original image dimensions help you assess the output.", "Paste the data URI directly into your HTML, CSS, or JSON code."],
      tips: ["Base64-encoded images are approximately 33% larger than the original binary file.", "Data URIs are best for small images (icons, logos) — avoid embedding large photos as Base64.", "CSS background-image format: url(data:image/png;base64,...) — ready for stylesheets.", "Email templates commonly use Base64 images to ensure images display without external hosting."],
    },
  },
  {
    title: "Case Converter",
    description: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.",
    slug: "case-converter",
    category: "Text",
    keywords: ["case converter", "uppercase", "lowercase", "title case", "camel case"],
    content: {
      intro: "Convert text between nine common case formats with a single click. Whether you're standardizing database column names to snake_case, formatting programming variables to camelCase, or preparing a title in Title Case, our Case Converter handles all conversions instantly. Each case format serves a specific purpose in writing, programming, and data processing.",
      steps: ["Type or paste your text into the textarea above.", "Choose a case format: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, or CONSTANT_CASE.", "The converted text appears immediately — click 'Copy' to copy the result.", "Try different formats to see how your text transforms in each.", "Use the result directly in your code, document, or database."],
      tips: ["camelCase: first word lowercase, subsequent words capitalized — standard for JavaScript variables.", "PascalCase: all words capitalized — used for React components and C# class names.", "snake_case: words separated by underscores — standard for Python, Ruby, and SQL column names.", "kebab-case: words separated by hyphens — used in CSS class names and URL slugs."],
    },
  },
  {
    title: "Text Diff Checker",
    description: "Compare two texts and find differences instantly. See what was added, removed, or changed line by line.",
    slug: "text-diff",
    category: "Developer",
    keywords: ["text diff", "diff checker", "compare text", "text compare", "diff tool"],
    content: {
      intro: "Compare two versions of text side by side and instantly see every change — additions (green), deletions (red), and unchanged lines (gray). Our Text Diff Checker is essential for code review, document version tracking, configuration comparison, and any scenario where you need to understand exactly what changed between two versions. The comparison runs with a 300ms debounce for smooth real-time updates.",
      steps: ["Paste the original text in the left textarea.", "Paste the modified text in the right textarea.", "The diff comparison updates automatically as you type (or click 'Compare Now').", "Green lines with '+' prefix indicate additions. Red lines with '-' prefix indicate deletions.", "View the summary: total lines added and removed. Copy either original or modified text with the Copy buttons."],
      tips: ["The side-by-side layout makes it easy to spot differences at a glance.", "Line numbers help reference specific changes in code reviews or document discussions.", "The diff algorithm works on a line-by-line basis — the entire line is marked if any character differs.", "Use the 'Compare Now' button for a manual refresh when comparing long documents."],
    },
  },
];

export const toolCategories = ["Developer", "Text", "Image", "Utility"] as const;
