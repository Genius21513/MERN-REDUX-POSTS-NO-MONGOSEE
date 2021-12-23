import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Edit from './components/edit';
import Create from './components/create';
import RecordList from './components/recordList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<RecordList />} />
          <Route path='create' element={<Create/>}/>

          <Route path='/edit/:id' element={<Edit/>}/>

          {/* <Route path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
