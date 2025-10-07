import About from "@/component/About";
import Hero from "@/component/Hero";
import Ourservice from "@/component/Ourservice";
import Relatedcompanies from "@/component/Relatedcompanies";


export default function Home() {
  return (
    <>
      <div>
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
