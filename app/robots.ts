import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Google AI
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Microsoft / Bing AI
      { userAgent: "Bingbot", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Meta
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      // Apple
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Cohere
      { userAgent: "cohere-ai", allow: "/" },
      // Common Crawl (used by many AI models)
      { userAgent: "CCBot", allow: "/" },
      // Amazon
      { userAgent: "Amazonbot", allow: "/" },
      // Mistral
      { userAgent: "MistralBot", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
      // Brave
      { userAgent: "BraveBot", allow: "/" },
      // Neeva / Snowflake
      { userAgent: "NeevaBot", allow: "/" },
      // Yandex
      { userAgent: "YandexBot", allow: "/" },
      // Baidu
      { userAgent: "Baiduspider", allow: "/" },
      // Bytedance
      { userAgent: "Bytespider", allow: "/" },
      // DuckDuckGo
      { userAgent: "DuckDuckBot", allow: "/" },
      // Qwen / Alibaba
      { userAgent: "QwenBot", allow: "/" },
      // Deepseek
      { userAgent: "DeepseekBot", allow: "/" },
    ],
    sitemap: "https://marcelle.ai/sitemap.xml",
  };
}
