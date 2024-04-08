





import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import BarComponent1 from './barchart';
import BarComponent2 from './barchart2';
import BarComponent3 from './barchart3';
import ChartComponent from './linechart';
import { Nav } from 'react-bootstrap';
import { add, delete_item } from '../Components-redux/redux/Actions/action-types';


const Edit = ()=>{
  
  
  const dispatch1 = useDispatch();  
  
  const x1 = useSelector(state=>state.x1);
  
  const handle = ()=>{
      for (let i = 0; i < x1.length; i++) {
          if (x1[i] == false) {
              dispatch1({
                type : delete_item ,
                index2 : i
              })
              break;
          }
      }
  }
  return(
    <div className='App-veiwmode my-3'>
        <div className='App-veiwmode-box'>
          <div className='App-linechart1' style={{display : x1[0] ? 'block' : 'none'}}>
            <button className="btn btn-dark close"
           
           onClick={()=>{dispatch1({type : add , index : 0})}}>
                X
            </button>
            <ChartComponent/>
          </div>
          <div className='App-barchart1' style={{display : x1[1] ? 'block' : 'none'}}>
          <button className="btn btn-dark close" 
          
          onClick={()=>dispatch1({type : add , index : 1})}>
                X
            </button>
            <BarComponent1/>
          </div>
        </div>
        <div className='App-veiwmode-box my-3'>
          <div className='App-barchart1' style={{display : x1[2] ? 'block' : 'none'}}>
          <button className="btn btn-dark close" 
          
          onClick={()=>dispatch1({type : add , index : 2})}>
                X
            </button>
            <BarComponent2/>
          </div>
          <div className='App-barchart1' style={{display : x1[3] ? 'block' : 'none'}}>
          <button className="btn btn-dark close" 
          
          onClick={()=>dispatch1({type : add , index : 3})}>
                X
            </button>
            <BarComponent3/>
          </div>
        </div>
        <div className='buttons'>
        <button className='btn btn-dark'><Nav.Link href='/'>view mode</Nav.Link></button>
        <button className='btn btn-dark' 

        onClick={handle}>Add box</button>
        </div>
        </div>
  )   
}

export default React.memo(Edit);

