import Hero from "@/components/sections/Hero";
import Carousel from "@/components/widgets/Carousel";

export default function Home() {
  return (
    <div className="scrollbar-thin scrollbar-webkit">
      <Hero />
      <Carousel />
    </div>
  );
}
