import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-20 md:h-20">
        <p className="text-center text-sm md:text-left">
          Built by {""}
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            UskCode
          </Link>
          . Hosted on {""}
          <Link
            href={"https://vercel.com"}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Vertical
          </Link>
        </p>
      </div>
    </footer>
  );
}
