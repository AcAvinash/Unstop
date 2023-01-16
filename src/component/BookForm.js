import React, { useState } from 'react'
import bookSeats from '../util/BookSeat';
import {bookedSeats} from '../util/BookSeat';

const BookForm = ({setShowList}) => {
  const availableSeats = 80 - bookedSeats.size;
  const [name,setName] = useState('');
  const [seats,setSeats] = useState('');
  const [error,setError] = useState('')
  const handleSubmit =()=> {
    if(!seats) return setError('please giva a valid input'); 
    if(seats < 0) return setError('seat number can not be negative');
    if(seats >7) return setError('seat booked can not be greater than 7');
    if(seats>availableSeats) return setError('value exceeds availbale seats');
    let x = bookSeats(Number(seats));
    console.log(x);
    setShowList(true)
    setError('');
  }
  return (
    <>
    <div className='container mt-3'>
        <div className='row'>
            <div className="col-sm-6">
                <div className="card ">
                    <div className="card-header bg-success text-white">
                    <p className="h4">Book Online Tickets</p>
                </div>
                  <div className="card-body d-flex flex-column align-items-center justify-content-center ">
                      <form >
                            <p className="h4 text-dark">Enter Your Name</p>
                            <input type="text" value={name}
                            onChange={(e)=>setName(e.target.value)} />
                            <p className="h4 text-dark">Enter Number of Seats</p>
                            <input type="number" value={seats} 
                            onChange={(e)=>setSeats(e.target.value)} min='0'/>
                            <br />
                            <small>{error}</small>
                            <br />
                            <p className="h4 text-dark">Available Seats : {availableSeats}</p>
                            <br />
                            <button className="btn btn-success text-white" onClick={handleSubmit}>Book Ticket &nbsp;&rarr;</button>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default BookForm