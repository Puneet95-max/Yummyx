import Footer from "@/components/FooterComponent/Footer";
import Menupage from "@/containers/MenupageContainer/page";
import AboutPageContainer from "@/containers/AboutPageContainer/page";
import HomePageContainer from "@/containers/HomePageContainer/page";
import ChefPageContainer from "@/containers/ChefPageContainer/page";
import BookPageContainer from "@/containers/BookPageContainer/page";
import YourMomentsContainer from "@/containers/YourMomentsContainer/page";
import TestimonialContainer from "@/containers/TestimonialContainer/page";
import GalleryPageContainer from "@/containers/GalleryPageContainer/page";
import ContactPageContainer from "@/containers/GoogleMapConatainer/page";
import WhyChooseYummyConatiner from "@/containers/WhyChooseYummyContainer/page";

export default function Home() {
  return (
    <>

      <section className="overflow-x-hidden">
        <HomePageContainer />
      </section>

      <section className="overflow-x-hidden">
        <AboutPageContainer />
      </section>

      <section>
        <WhyChooseYummyConatiner/>
      </section>

      <section className="overflow-x-hidden">
        <Menupage />
      </section>

      <section className="overflow-x-hidden">
        <TestimonialContainer />
      </section>

      <section className="overflow-x-hidden">
        <YourMomentsContainer />
      </section>

      <section className="overflow-x-hidden">
        <ChefPageContainer />
      </section>

      <section className="overflow-x-hidden">
        <BookPageContainer />
      </section >

      <section className="overflow-x-hidden">
        <GalleryPageContainer />
      </section>

      <section className="overflow-x-hidden">
        <ContactPageContainer />
      </section>

      <section className="overflow-x-hidden">
        <Footer />
      </section >
    </>
  );
}
