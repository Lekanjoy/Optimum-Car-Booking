import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import PickupDetails from "./components/PickupDetails";
import FilterBox from "./components/FilterBox";
import CarContainer from "./components/CarContainer";
import data from "./data";
console.log(data);
function App() {
  return (
    <div className="App font-['Nunito']  text-primaryText">
      <NavBar />
      <section className=" w-full flex justify-between gap-x-[88px] items-center py-12 px-[90px]">
        <Intro />
        <PickupDetails />
      </section>
      <main className="bg-bgInput px-[90px] py-9 w-full h-auto flex gap-x-9">
        <FilterBox />
        <CarContainer />
      </main>
    </div>
  );
}

export default App;
