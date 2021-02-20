import React from "react";
import ReactDOM from "react-dom";
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';


ReactDOM.render(
<>
   <h1 className="heading_style"> List of top 3 Netflix Series in 2020</h1>
   {Sdata.map((val) => {
    return (
  <Card 
     imgsrc={val.imgsrc}
     title={val.title}
     sname= {val.sname}
     link={val.link}
   /> 
);
   })}
  </> ,
  document.getElementById("root")
);

// render method k andr jsx curly brackets me