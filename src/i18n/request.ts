import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";


export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const cookieLanguage = cookieStore.get("language")?.value;
  const acceptLanguage = cookieStore.has("language")
    ? cookieLanguage
    : headers().get("Accept-Language");

  const locale = cookieLanguage
    ? cookieLanguage
    : acceptLanguage?.includes("ar")
    ? "ar"
    : "en";

  return {
    locale: locale || "en", // default to 'ar'
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
