import Footer from "@/components/FooterComponent/Footer";

import Menupage from "@/containers/MenupageContainer/page";

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
        <Menupage/>
      </section>
      <section>
        <Footer />
      </section>


    </>
  );
}
