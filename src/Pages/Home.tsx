import ImageSlider from "@/Components/ImageSlider";
import RotatingText from "@/Components/RotatingText";
import Cards from "@/Components/Cards";
import SocialSection from "@/Components/SocialSection";
const Home = () => {
  return (
    <div className="w-screen">
      <section className="border-b-yellow-500 border-b-4">
        {" "}
        <ImageSlider />
      </section>
      <section className="border-b-yellow-500">
        <div className="flex font-bold justify-center p-4 gap-2 text-4xl items-center">
          <h1>Healty</h1>
          <RotatingText
            texts={[
              "Motion",
              "Energy",
              "Spirit",
              "Vibes",
              "Flow",
              "Mindset",
              "Balance",
              "Power",
              "Game",
              "Way",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-yellow-600 text-white min-w-40 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
        </div>
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <SocialSection />
      </section>
    </div>
  );
};

export default Home;
