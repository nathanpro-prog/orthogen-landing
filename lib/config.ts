const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://orthophonie-saasv2.vercel.app";

export const config = {
  appUrl: APP_URL,
  signupUrl: `${APP_URL}/signup?utm_source=landing`,
  loginUrl: `${APP_URL}/login?utm_source=landing`,
  signupProUrl: `${APP_URL}/signup?plan=pro&utm_source=landing`,
  contactEmail: "contact@orthogen.fr",
};
