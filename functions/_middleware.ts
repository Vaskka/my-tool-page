interface Env {
  // Cloudflare environment bindings
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;

  const url = new URL(request.url);

  // Serve the static response first
  const response = await next();

  // Skip API/CORS preflight requests and non-HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html") || request.method !== "GET") {
    return response;
  }

  // Detect locale from Cloudflare's country header
  const country = (request as any).cf?.country as string | undefined;
  const suggestedLocale = country === "CN" ? "zh" : "en";

  // Check existing cookie
  const cookieHeader = request.headers.get("cookie") || "";
  const existingLocale = cookieHeader.match(/locale=(\w+)/)?.[1];

  // Only set cookie if locale differs from suggestion
  const clone = new Response(response.body, response);
  if (existingLocale !== suggestedLocale) {
    clone.headers.set(
      "set-cookie",
      `locale=${suggestedLocale}; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Lax`
    );
  }

  return clone;
};
