import "./App.css";
import BGCARD from "./assets/bg-pattern-card.svg";
import VICTOR from "./assets/image-victor.jpg";

function App() {
  return (
    <>
      <div className="BackgroundCircles absolute h-screen w-screen bg-design-DarkCyan" />
      <div className=" h-screen flex justify-center items-center relative overflow-hidden font-Kumbhsans">
        <div className="grid grid-rows-[1fr_2fr] rounded-xl shadow-xl w-80 h-96 relative bg-white z-50">
          <div className={`rounded-t-xl bg-cover`}>
            <img className="rounded-t-xl w-full" src={BGCARD} alt="" />
          </div>
          <div className="absolute h-28 w-28 right-1/2 top-1/3 -translate-y-1/2 translate-x-1/2">
            <img
              src={VICTOR}
              alt="picture of Victor Crest"
              className="rounded-full border-4 border-white"
            />
          </div>
          <div className="flex flex-col pt-8 justify-center items-center">
            <h1 className="font-bold text-lg">
              Victor Crest{" "}
              <span className="text-design-DarkGray font-medium pl-2">26</span>
            </h1>
            <p className="text-design-DarkGray text-sm">London</p>
          </div>
          <div className="flex justify-around border-t p-6">
            <div className="text-center text-lg">
              <p className="font-bold">80K</p>
              <p className="text-design-DarkGray text-xs tracking-wider">
                Followers
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">803K</p>
              <p className="text-design-DarkGray text-xs tracking-wider">
                Likes
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">1.4K</p>
              <p className="text-design-DarkGray text-xs tracking-wider">
                Photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
