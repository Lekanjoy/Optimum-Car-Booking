import { useState } from "react";
import minus from '../assets/minus_icon.svg'


function FilterBox() {
    const [isToggleType, setIsToggleType] = useState(true);
    const [isToggleCapacity, setIsToggleCapacity] = useState(true);
    const [isToggleRecommend, setIsToggleRecommend] = useState(true);

    // Toggle Function for ALL Filter Options
    const handleToggleType = () => {
        setIsToggleType(prevToggle => !prevToggle)
    }
     const handleToggleCapacity = () => {
        setIsToggleCapacity((prevToggle) => !prevToggle);
    }
     const handleToggleRecommend = () => {
        setIsToggleRecommend((prevToggle) => !prevToggle);
    }

  return (
    <section className="bg-white w-[295px] rounded-3xl h-auto p-9">
      <h3 className="font-semibold text-base pb-6 border border-x-0 border-t-0 border-[#F6F7F9]">
        Filter By
      </h3>
      <div className="type">
        <div className="flex justify-between mb-5 mt-6 items-center">
          <h5 className="font-semibold text-sm text-filterText">Car type</h5>
          <img onClick={handleToggleType} className="cursor-pointer" src={minus} alt="icon toggle" />
        </div>
       {isToggleType && <form className="transition-all duration-500">
            <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Coupe" />
                <label htmlFor="Coupe" className=" font-semibold text-base text-textNav">Coupe (24)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Hatchback" />
                <label htmlFor="Hatchback" className=" font-semibold text-base text-textNav">Hatchback (12)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Sedan" />
                <label htmlFor="Sedan" className=" font-semibold text-base text-textNav">Sedan (16)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="MPV" />
                <label htmlFor="MPV" className=" font-semibold text-base text-textNav">MPV (28)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="SUV" />
                <label htmlFor="SUV" className=" font-semibold text-base text-textNav">SUV (20)</label>
            </div>
        </form>}
      </div>
      <div className="capacity">
         <div className="flex justify-between mb-5 mt-6 items-center">
          <h5 className="font-semibold text-sm text-filterText">Capacity</h5>
          <img onClick={handleToggleCapacity} className="cursor-pointer" src={minus} alt="icon toggle" />
        </div>
       {isToggleCapacity && <form className="transition-all duration-500">
            <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Coupe" />
                <label htmlFor="Coupe" className=" font-semibold text-base text-textNav">2 - 5 (100)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Hatchback" />
                <label htmlFor="Hatchback" className=" font-semibold text-base text-textNav">6 or more (4)</label>
            </div>
        </form>}
      </div>
      <div className="recommendation">
          <div className="flex justify-between mb-5 mt-6 items-center">
          <h5 className="font-semibold text-sm text-filterText">Customer Recommendation</h5>
          <img onClick={handleToggleRecommend} className="cursor-pointer" src={minus} alt="icon toggle" />
        </div>
       {isToggleRecommend && <form className="transition-all duration-500">
            <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Coupe" />
                <label htmlFor="Coupe" className=" font-semibold text-base text-textNav">70 - 100 % (72)</label>
            </div>
             <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Hatchback" />
                <label htmlFor="Hatchback" className=" font-semibold text-base text-textNav">40 - 69% (41)</label>
            </div>
              <div className="flex gap-x-3 items-center mb-4">
                <input className="w-2" type="checkbox"  id="Hatchback" />
                <label htmlFor="Hatchback" className=" font-semibold text-base text-textNav">0 - 39% (28)</label>
            </div>
        </form>}

      </div>
    </section>
  );
}

export default FilterBox