import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Debug logging
  console.log("🌍 Request locale:", requestLocale);

  // Detect the locale from the request
  let locale = await requestLocale;

  console.log("🌍 Resolved locale:", locale);

  // Validate that the incoming locale is supported
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    console.log("🔄 Falling back to default locale:", routing.defaultLocale);
    locale = routing.defaultLocale;
  }

  console.log("📝 Loading messages for locale:", locale);

  // Load messages from the filesystem
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
