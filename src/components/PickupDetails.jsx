import {useState, useRef} from "react";
import location from "../assets/delivery-details/location_icon.svg";
import date from '../assets/delivery-details/date_icon.svg'
import time from '../assets/delivery-details/time_icon.svg'
function PickupDetails() {
 const [timeValue, setTimeValue] = useState("10:00");
 const [dateValue, setDateValue] = useState("10:00");
 const locationRef = useRef()
 const [locationValue, setLocationValue] = useState('')

  return (
    <form className="w-[70%] flex flex-col gap-y-6 border-2 border-[#F6F7F9] rounded-3xl p-9">
      <div className="flex gap-x-6">
        <div className="location">
          <div className="flex gap-x-1 pb-3">
            <img src={location} alt="location icon" />
            <p className="font-semibold text-sm text-primaryText">Pick-up</p>
          </div>
          <input
            type="text"
            placeholder="London (LHR - Heathrow)"
            className="bg-bgInput w-[344px] rounded-xl px-4 py-3"
          />
        </div>
        <div className="location">
          <div className="flex gap-x-1 pb-3">
            <img src={location} alt="location icon" />
            <p className="font-semibold text-sm text-primaryText">Drop-off</p>
          </div>
          <input
          ref={locationRef}
          // value={locationRef.current.value}
            type="text"
            placeholder="London (LGW - Gatwick)"
            className="bg-bgInput w-[344px] rounded-xl px-4 py-3"
          />
        </div>
        <div className="pickup"></div>
      </div>

      <div className="flex gap-x-6">
        <div className="date flex gap-x-3">
          <div className="pickDate">
            <div className="flex gap-x-1 pb-3">
              <img src={date} alt="location icon" />
              <p className="font-semibold text-sm text-primaryText">
                Pick-up Date
              </p>
            </div>
            <input
              type="date"
              placeholder="London (LHR - Heathrow)"
              className="bg-bgInput w-[166px] rounded-xl px-4 py-3"
            />
          </div>
          <div className="dropDate">
            <div className="flex gap-x-1 pb-3">
              <img src={date} alt="location icon" />
              <p className="font-semibold text-sm text-primaryText">
                Drop-off Date
              </p>
            </div>
            <input
              type="date"
              placeholder="London (LHR - Heathrow)"
              className="bg-bgInput w-[166px] rounded-xl px-4 py-3"
            />
          </div>
        </div>

        <div className="time flex gap-x-3">
          <div className="pickDate">
            <div className="flex gap-x-1 pb-3">
              <img src={time} alt="time icon" />
              <p className="font-semibold text-sm text-primaryText">
                Pick-up Time
              </p>
            </div>
            <input
              type="time"
              value={dateValue}
              defaultvalue="10:00"
              placeholder="London (LHR - Heathrow)"
              className="bg-bgInput w-[166px] rounded-xl px-4 py-3"
            />
          </div>
          <div className="dropDate">
            <div className="flex gap-x-1 pb-3">
              <img src={time} alt="time icon" />
              <p className="font-semibold text-sm text-primaryText">
                Drop-off Time
              </p>
            </div>
            <input
              onChange={(e) => setTimeValue(e.target.value)}
              type="time"
              value={timeValue}
              placeholder="London (LHR - Heathrow)"
              className="bg-bgInput w-[166px] rounded-xl px-4 py-3"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default PickupDetails;
