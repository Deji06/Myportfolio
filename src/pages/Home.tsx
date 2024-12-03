import RightContainer from "../components/RightContainer";
import LeftContainer from "../components/LeftContainer";


const Home = () => {
  return (
    <>
      <main className="xl:flex gap-10 xl:mt-16 pb-10 bord">
        <div className="xl:w-[40%] sm:mt-5 xl:pb-[10px] w-[100%]">
          <LeftContainer />
        </div>

        <div className="mt-5 sm:mt-0 sm:ml-10 xl:w-[60%] sm:h-[500px] sm:overflow-auto no-scrollbar w-[90%]">
          <RightContainer />
        </div>
      </main>
    </>
  );
};

export default Home;
