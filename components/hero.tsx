import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Bitcoin Association Switzerland Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Our Mission
        </h1>
      </div>
    </section>
  );
}