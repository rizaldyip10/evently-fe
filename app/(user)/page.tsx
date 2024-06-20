import Hero from "@/components/pages/homepage/hero";
import UpcomingEvent from "@/components/pages/homepage/upcoming-event";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <UpcomingEvent />
    </main>
  );
}
