import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { useState } from 'react';
import ShowList from './component/ShowList';
import BookForm from './component/BookForm';




const App = () => {
  const [showList,setShowList] = useState(false);
  return (
    <>
     <Navbar heading={'Booking Seat'} color={'bg-success'}/> 
    <div className="App">
        {!showList && <BookForm setShowList={setShowList}/>}
        {showList && <ShowList setShowList={setShowList}/>}
    </div>
  
    </>
  );
}
export default App;
