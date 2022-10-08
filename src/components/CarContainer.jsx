import React from "react";
import data from "../data";
import Car from "./Car";

function CarContainer() {
  const ProductData = data;

  return (
    <section className="grid grid-cols-3 gap-8 ">
      {ProductData.map((car) => {
        return <Car key={car.id} car={car} />;
      })}
    </section>
  );
}

export default CarContainer;
