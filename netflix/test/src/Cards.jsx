import React from 'react';


function Card(prop){
    console.log(prop);
    return (
       <>
        <div className="cards">
      <div className="card">
        <img src={prop.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{prop.title} </span>
          <h3 className="card_title">{prop.sname}</h3>
          <a href={prop.link} target="">
            <button>WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  
       </>
    )
  }
  
export default Card;