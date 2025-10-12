import About from "@/component/About";
import Hero from "@/component/Hero";
import Ourservice from "@/component/Ourservice";
import Relatedcompanies from "@/component/Relatedcompanies";
import RouteAds from "@/component/RouteAds";


export default function Home() {
  return (
    <>
      <div>
        <section>
          <RouteAds />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Ourservice />
        </section>
        <section>
          <Relatedcompanies/>
        </section>
      </div>
    </>
  );
}
