import React from "react";
import users from '../assets/intro/users.svg'
import stars from '../assets/intro/blue_star.svg'

function Intro() {
  return (
    <section className="w-[30%]">
      <h2 className="text-[25px] font-bold mb-3">Book car in easy steps</h2>
      <p className="text-sm font-normal text-textNav mb-6">
        Renting a car brings you freedom, we’ll help you find the best car for
        you at a great price.
      </p>
      <div className="testimonial flex gap-x-3">
        <img src={users} alt="users icon" />
        <div className="">
          <div className="flex gap-x-1">
            <img src={stars} alt="stars icon" />
            <img src={stars} alt="stars icon" />
            <img src={stars} alt="stars icon" />
            <img src={stars} alt="stars icon" />
            <img src={stars} alt="stars icon" />
          </div>
          <p className="font-normal text-xs text-textNav mt-2 whitespace-nowrap">Trusted by 10 million customers</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
