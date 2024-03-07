import Footer from "@/components/FooterComponent/Footer";
import Menupage from "@/containers/MenupageContainer/page";
import AboutPageContainer from "@/containers/AboutPageContainer/page";
import HomePageContainer from "@/containers/HomePageContainer/page";
import Gallery from "@/containers/GalleryPageContainer/BiggerGalleryPage";
import ChefPageContainer from "@/containers/ChefPageContainer/page";
import BookPageContainer from "@/containers/BookPageContainer/page";
import YourMomentsContainer from "@/containers/YourMomentsContainer/page";
import TestimonialContainer from "@/containers/TestimonialContainer/page";

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
        <Menupage />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <ChefPageContainer />
      </section>

      <section>
        <BookPageContainer />
      </section >

      <section>
        <YourMomentsContainer />
      </section>

      <section>
          <TestimonialContainer/>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
