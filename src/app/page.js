import { default as Slider } from "@/components/Slider";
import SliderHome from "@/components/SliderHome";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center  px-5 py-10 gap-5
    
      md:px-10 md:py-20 lg:px-20 lg:py-20 xl:px-40 xl:py-20 2xl:px-80 2xl:py-20
    "
    >
      <SliderHome />

      <div className=" w-full">
        <Slider type={"roomIdeas"} title={"Room Ideas"} />
      </div>
      <div className=" w-full">
        <Slider type={"shopByRoom"} title={"Shop By Room"} />
      </div>

      <div className=" w-full">
        <h1 className="text-3xl font-semibold my-5 lg:text-4xl">
          Recommended for you
        </h1>
      </div>
    </main>
  );
}
