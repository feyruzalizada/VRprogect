import SiteDocument, { siteMetadata, siteViewport } from "@/app/site/SiteDocument";

export const metadata = siteMetadata("ru");
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="ru">{children}</SiteDocument>;
}
