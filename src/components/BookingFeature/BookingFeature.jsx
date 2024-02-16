import { MdOutlineLocalPhone } from "react-icons/md";
import { Tb24Hours } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import "./BookingFeature.css";
//Emailjs
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//Calender
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingFeature = () => {
  const [startDate, setStartDate] = useState(new Date());

  //EmailJS
  const booking = useRef();

  const sendBooking = (e) => {
    e.preventDefault();

    const bookingForm = document.querySelector("#booking-form");

    emailjs
      .sendForm(
        "jampad_and_studios",
        "booking_form",
        booking.current,
        "kTvhuWO_TJBurp48r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    bookingForm.reset();
  };

  return (
    <div className="booking container section" id="bookNow">
      <div className="sectionContainer grid">
        <form
          className="bookingInputs flex"
          id="booking-form"
          ref={booking}
          onSubmit={sendBooking}
        >
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Date</h4>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                name="date"
              />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <Tb24Hours className="icon" />
            </div>
            <div className="texts">
              <h4>CheckIn Time</h4>
              <select name="time" id="timeSlot" required>
                <option value="09 am">09 A.M.</option>
                <option value="10 am">10 A.M.</option>
                <option value="11 am">11 A.M.</option>
                <option value="12 pm">12 P.M.</option>
                <option value="01 pm">01 P.M.</option>
                <option value="02 pm">02 P.M.</option>
                <option value="03 pm">03 P.M.</option>
                <option value="04 pm">04 P.M.</option>
                <option value="05 pm">05 P.M.</option>
                <option value="06 pm">06 P.M.</option>
                <option value="07 pm">07 P.M.</option>
                <option value="08 pm">08 P.M.</option>
              </select>
            </div>
          </div>
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <IoTimeOutline className="icon" />
            </div>
            <div className="texts">
              <h4>Hours</h4>
              <input
                type="number"
                name="hours"
                min="1"
                max="20"
                placeholder="Number of Hours"
                required
              />
            </div>
          </div>
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdOutlineLocalPhone className="icon" />
            </div>
            <div className="texts">
              <h4>Contact</h4>
              <input
                type="tel"
                placeholder="Enter Mobile"
                required
                name="mobile"
              />
            </div>
          </div>

          <button type="submit" value="send" className="btn btnBlock flex">
            Book Jampad
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingFeature;
