import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';


function ncard(val){
  console.log(val);
  return (
    <Card
    key={val.id}
    imgsrc ={val.imgscr}
    title=  {val.title}
    sname={val.sname}
    link={val.links}
  />
  )
}

ReactDOM.render(
<>
<h1 className='heading_style'>LIST OF TOP ANIMES</h1>
  
  {Sdata.map(ncard)}
</>
,
  document.getElementById("root")
);