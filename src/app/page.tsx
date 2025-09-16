import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { AppCards } from "../components/AppCards";
import { Footer } from "../components/Footer";
import { InstagramCTA } from "../components/InstagramCTA";

export default function Home() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <AppCards />
      <Footer />
      <InstagramCTA />
    </div>
  );
}
