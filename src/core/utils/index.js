const production = process.env.NODE_ENV === "production";

export const SITE_URL = production
	? "https://saas-platform-delta.vercel.app/"
	: "";
