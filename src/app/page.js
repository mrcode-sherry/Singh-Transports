import About from "@/component/About";
import Hero from "@/component/Hero";


export default function Home() {
  return (
    <>
      <div>
        <section>
          <Hero/>
        </section>
        <section>
          <About/>
        </section>
      </div>
    </>
  );
}
