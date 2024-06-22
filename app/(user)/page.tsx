import Hero from "@/components/pages/homepage/hero";
import UpcomingEvent from "@/components/pages/homepage/upcoming-event";

export default function Home() {
  return (
    <main className="w-full pb-10 flex flex-col items-center">
      <Hero />
      <UpcomingEvent />
      {/* <div className="flex flex-col items-center max-w-[1920px]">
        <Hero />
        <UpcomingEvent />
      </div> */}
    </main>
  );
}
