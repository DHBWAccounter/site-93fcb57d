import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { name: "Meetup", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland" },
  { name: "Bitcoin Lectures", href: "https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg" },
  { name: "X", href: "https://x.com/bitcoin_ch" },
];

export function SocialLinks() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
              alt="Bitcoin"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}