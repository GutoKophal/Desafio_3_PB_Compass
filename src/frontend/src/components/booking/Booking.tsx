import React, { useState } from 'react';
import './Booking.css';

interface BookingProps {
  price: number;
}

const Booking: React.FC<BookingProps> = ({ price }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState(0);

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 1);
  };

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleBooking = () => {
    setDate('');
    setTime('');
    setAdults(0);
    setKids(0);
    setChildren(0);
  };

  const totalPrice = price * (adults + kids + children);

  return (
    <div className="booking-card">
      <h3 className="price">${price} <span>/ per person</span></h3>
      <div className="divider"></div>
      
      <div className="booking-section">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className="booking-input"
          placeholder="Choose date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <div className="booking-section">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          className="booking-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1-day">1-day</option>
          <option value="1-day">2-day</option>
          <option value="1-day">3-day</option>
          <option value="1-day">4-day</option>
          <option value="1-day">5-day</option>
          <option value="1-day">6-day</option>
          <option value="1-day">7-day</option>
        </select>
      </div>
      
      <div className="booking-section">
        <label>Ticket</label>
        <div className="ticket-row">
          <span>Adults (18+ years)</span>
          <div className="ticket-controls">
            <button onClick={() => handleDecrement(setAdults)}>-</button>
            <span>{adults}</span>
            <button onClick={() => handleIncrement(setAdults)}>+</button>
          </div>
        </div>
        <div className="ticket-row">
          <span>Kids (12+ years)</span>
          <div className="ticket-controls">
            <button onClick={() => handleDecrement(setKids)}>-</button>
            <span>{kids}</span>
            <button onClick={() => handleIncrement(setKids)}>+</button>
          </div>
        </div>
        <div className="ticket-row">
          <span>Children (3+ years)</span>
          <div className="ticket-controls">
            <button onClick={() => handleDecrement(setChildren)}>-</button>
            <span>{children}</span>
            <button onClick={() => handleIncrement(setChildren)}>+</button>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="total-row">
        <span>Total</span>
        <span className="total-price">${totalPrice}</span>
      </div>
      
      <button className="book-button" onClick={handleBooking}>Book now</button>
    </div>
  );
};

export default Booking;
