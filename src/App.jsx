import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] font-bold text-3xl">RANDOM GIFS</h1>
      <div className="flex flex-col">
      <Random/>
      <Tag/>
      </div>
    </div>
  );
}
