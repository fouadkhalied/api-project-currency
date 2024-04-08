





import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/edit';
import View from './components/view';

function App() {


return (
      <BrowserRouter>
        <Routes>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/' element={<View/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
