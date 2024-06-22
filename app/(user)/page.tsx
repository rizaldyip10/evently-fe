import Hero from "@/components/pages/homepage/hero";
import HotPromo from "@/components/pages/homepage/hot-promo";
import UpcomingEvent from "@/components/pages/homepage/upcoming-event";

export default function Home() {
  return (
    <main className="w-full pb-10 flex flex-col items-center">
      <Hero />
      <UpcomingEvent />
      <HotPromo />
    </main>
  );
}
