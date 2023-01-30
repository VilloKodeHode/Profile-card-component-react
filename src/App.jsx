import "./App.css";
import BGCARD from "./assets/bg-pattern-card.svg";
import VICTOR from "./assets/image-victor.jpg";

function App() {
  return (
    <>
      <div class="BackgroundCircles absolute h-screen w-screen bg-design-DarkCyan" />
      <div class=" h-screen flex justify-center items-center relative overflow-hidden font-Kumbhsans">
        <div class="grid grid-rows-[1fr_2fr] rounded-xl shadow-xl w-80 h-96 relative bg-white z-50">
          <div class={`rounded-t-xl bg-cover`}>
            <img class="rounded-t-xl w-full" src={BGCARD} alt="" />
          </div>
          <div class="absolute h-28 w-28 right-1/2 top-1/3 -translate-y-1/2 translate-x-1/2">
            <img
              src={VICTOR}
              alt="picture of Victor Crest"
              class="rounded-full border-4 border-white"
            />
          </div>
          <div class="flex flex-col pt-8 justify-center items-center">
            <h1 class="font-bold text-lg">
              Victor Crest{" "}
              <span class="text-design-DarkGray font-medium pl-2">26</span>
            </h1>
            <p class="text-design-DarkGray text-sm">London</p>
          </div>
          <div class="flex justify-around border-t p-6">
            <div class="text-center text-lg">
              <p class="font-bold">80K</p>
              <p class="text-design-DarkGray text-xs tracking-wider">
                Followers
              </p>
            </div>
            <div class="text-center">
              <p class="font-bold text-lg">803K</p>
              <p class="text-design-DarkGray text-xs tracking-wider">Likes</p>
            </div>
            <div class="text-center">
              <p class="font-bold text-lg">1.4K</p>
              <p class="text-design-DarkGray text-xs tracking-wider">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
