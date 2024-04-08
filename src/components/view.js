
import { useSelector } from 'react-redux';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import BarComponent1 from './barchart';
import BarComponent2 from './barchart2';
import BarComponent3 from './barchart3';
import ChartComponent from './linechart';
import { Nav } from 'react-bootstrap';
import React from 'react';

const View = ()=>{
  const x1 = useSelector(state => state.x1);
    return(
        <div className='App-veiwmode my-3'>
        <div className='App-veiwmode-box'>
          <div className='App-linechart1' style={{display : x1[0] ? 'block' : 'none'}}>
            <ChartComponent/>
          </div>
          <div className='App-barchart1' style={{display : x1[1] ? 'block' : 'none'}}>
            <BarComponent1/>
          </div>
        </div>
        <div className='App-veiwmode-box my-3'>
          <div className='App-barchart1' style={{display : x1[2] ? 'block' : 'none'}}>
            <BarComponent2/>
          </div>
          <div className='App-barchart1'style={{display : x1[3] ? 'block' : 'none'}}>
            <BarComponent3/>
          </div>
        </div>
        <button className='btn btn-dark d-block mx-auto'><Nav.Link href='/edit'>Edit mode</Nav.Link></button>
        </div>
    )
}

export default React.memo(View)