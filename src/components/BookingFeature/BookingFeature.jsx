import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import "./BookingFeature.css";
//Calender
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingFeature = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="booking container section" id="bookNow">
      <div className="sectionContainer grid">
        <div className="bookingInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <select name="jampadStudio1" id="jampadStudio1">
                <option value="southExtension">South Ex Part-II</option>
              </select>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Artists</h4>
              <input
                type="number"
                min="1"
                max="20"
                placeholder="Number of Artists"
              />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Calender</h4>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>CheckIn</h4>
              <select name="timeSlot" id="timeSlot">
                <option value="placeholder" disabled>
                  Select TimeSlots
                </option>
                <option value="11-12">11-12 p.m.</option>
                <option value="12-01">12-01 p.m.</option>
                <option value="01-02">01-02 p.m.</option>
                <option value="02-03">02-03 p.m.</option>
                <option value="03-04">03-04 p.m.</option>
                <option value="04-05">04-05 p.m.</option>
                <option value="04-05">05-06 p.m.</option>
                <option value="04-05">06-07 p.m.</option>
                <option value="04-05">07-08 p.m.</option>
                <option value="04-05">08-09 p.m.</option>
              </select>
            </div>
          </div>

          <button className="btn btnBlock flex">Book Jampad</button>
        </div>
      </div>
    </div>
  );
};

export default BookingFeature;
