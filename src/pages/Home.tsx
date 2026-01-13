import RightContainer from "../components/RightContainer";
import LeftContainer from "../components/LeftContainer";


const Home = () => {
  return (
    <>
      <main className="xl:flex gap-10 mt-5 px-2 pb-10">
        <div className="lg:w-[40%] sm:mt-5 xl:pb-[10px] w-full  p-2">
          <LeftContainer />
        </div>

        <div className="mt-10 sm:mt-0 sm:h-[500px] sm:overflow-auto no-scrollbar px-2">
          <RightContainer />
        </div>
      </main>
    </>
  );
};

export default Home;
