import Footer from "@/components/FooterComponent/Footer";
import Navbar from "@/components/NavbarComponent/Navbar";
import HomePageContainer from "@/containers/HomePageContainer/page";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <HomePageContainer />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
