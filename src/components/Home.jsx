import React from 'react'
import Intro from "./Intro";
import PickupDetails from "./PickupDetails";
import FilterBox from "./FilterBox";
import CarContainer from "./CarContainer";

function Home() {

  return (
    <>
      <section className=" w-full flex justify-between gap-x-[88px] items-center py-12 px-[80px]">
        <Intro />
        <PickupDetails />
      </section>
      <main className="bg-bgInput px-[80px] py-9 w-full h-auto flex gap-x-9">
        <FilterBox />
        <CarContainer />
      </main>
    </>
  );
}

export default Home