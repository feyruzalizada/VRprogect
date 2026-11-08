import SiteDocument, { siteMetadata, siteViewport } from "@/app/site/SiteDocument";

export const metadata = siteMetadata("az");
export const viewport = siteViewport;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="az">{children}</SiteDocument>;
}
