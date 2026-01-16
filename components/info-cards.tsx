import Image from "next/image";
import Link from "next/link";

interface InfoCard {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const cards: InfoCard[] = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    title: "About",
    description: "Find out about our organization and mission.",
    linkText: "Learn More →",
    linkHref: "/about-1",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    title: "Join US",
    description: "You can become a contributor to our cause, or participate yourself.",
    linkText: "Find Out How →",
    linkHref: "/meetups-events",
  },
];

export function InfoCards() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card) => (
            <div key={card.title} className="group">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                <Link href={card.linkHref} className="hover:text-orange-500 transition-colors">
                  {card.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link
                href={card.linkHref}
                className="inline-block text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                {card.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}