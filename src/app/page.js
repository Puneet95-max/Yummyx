import Footer from "@/components/FooterComponent/Footer";
import AboutPageContainer from "@/containers/AboutPageContainer/page";
import HomePageContainer from "@/containers/HomePageContainer/page";

export default function Home() {
  return (
    <>
      <section>
        <HomePageContainer />
      </section>

      <section>
        <AboutPageContainer />
      </section>

      <section>
        <Footer />
      </section>


    </>
  );
}
