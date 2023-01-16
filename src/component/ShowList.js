import React from 'react'
import { bookedSeats,seats as seatList } from '../util/BookSeat';

const ShowList = ({setShowList}) => {
  return (
    <div className='showlist ms-3'>
        {seatList.map((row,ind)=> {
          return (
            <div className='d-flex text-center mt-3' key={'row'+ind}>
              {row.map((num,indCol) => (
                <div key={'col'+indCol} className={`seat ${bookedSeats.has(num)?'booked':''}`}>{num}</div>
              ))}
            </div>
          )
        })}
        <button className="btn btn-success text-white" onClick={()=>setShowList(false)}>&larr; Book More</button>
    </div>
    
  )
}

export default ShowList