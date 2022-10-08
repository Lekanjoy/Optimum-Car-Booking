import React from 'react';
import like from '../assets/products icons/like_icon.svg'
import user from '../assets/products icons/user_icon.svg'
import vector from '../assets/products icons/vector.svg'

function Car({car}) {

    
  return (
    <div className="w-[280px] h-72 flex flex-col  justify-evenly bg-white rounded-3xl p-[30px] shadow-[0px_2px_4px_text-shadow1,0px_18px_36px_text-shadow2]">
      <div className="name flex justify-between items-start mb-8">
        <div className="font-semibold">
          <h5 className="text-lg  text-black">{car.name}</h5>
          <p className="text-sm text-textNav mt-2">{car.type}</p>
        </div>
        <img src={like} alt="like icon" className='mt-[0.4rem]'/>
      </div>
      <img src={`./car-products/${car.image}`} alt={car.name} className="mb-4 h-[130px] w-[225px]" />
      <div className="flex justify-between">
        <div className="flex gap-x-5">
          <div className="flex gap-x-2 items-center">
            <img src={user} alt="user" />
            <span className='text-sm text-textNav'>{car.users}</span>
          </div>
          <div className="flex gap-x-2 items-center">
            <img src={vector} alt="Vector icon" />
            <span className='text-sm text-textNav'>{car.mode}</span>
          </div>
        </div>
        <div>
          <span className='text-black font-medium text-lg'>${car.price}</span>
          <span className='text-textNav'>/d</span>
        </div>
      </div>
    </div>
  );
}

export default Car