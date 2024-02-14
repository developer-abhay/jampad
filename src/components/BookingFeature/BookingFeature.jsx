import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import "./BookingFeature.css";

const BookingFeature = () => {
  return (
    <div className="booking container section">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Jampad 1</span>
          </div>
          <div className="singleBtn">
            <span>Jampad 2</span>
          </div>
        </div>

        <div className="bookingInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want a jampad ?" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Artists</h4>
              <input type="text" placeholder="Number of Artists" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Calender</h4>
              <input type="text" placeholder="Select Date" />
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>CheckIn</h4>
              <input type="text" placeholder="Select Time Slot" />
            </div>
          </div>

          <button className="btn btnBlock flex">Book Jampad</button>
        </div>
      </div>
    </div>
  );
};

export default BookingFeature;
