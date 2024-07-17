import Hero from "@/components/pages/homepage/hero";
import HotPromo from "@/components/pages/homepage/hot-promo";
import UpcomingEvent from "@/components/pages/homepage/upcoming-event";
import { getCookiesServer } from "@/utils/server-cookies";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full pb-10 flex flex-col items-center">
      <Suspense>
        <Hero />
        <UpcomingEvent />
        <HotPromo />
      </Suspense>
    </main>
  );
}
