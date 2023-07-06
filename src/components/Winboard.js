import React, { useState,useEffect } from 'react'
export default function Winboard(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [styleX, setStyleX] = useState();
    const [styleY, setStyleY] = useState(null);


    useEffect(()=>{
        if (props.win!==null){
          props.win?setX(x+1):setY(y+1);
        }
      }, [props.win])
    useEffect(()=>{
        if (props.turn===true) {setStyleX({color: 'white'}); setStyleY(null);}
        else {setStyleY({color: 'white'}); setStyleX(null);}
    }, [props.turn])
    let handleNew = () => {
        props.setNews(true);
        setX(0); setY(0);
    }
    let handleReset = () => {
        props.setReset(true);
    }
  return (
    <div className='container'>
      <div className="container my-2 overflow-hidden text-center bg-secondary text-light rounded shadow-lg">
        <div className="row gx-5 align-items-center text-dark">
            <div className="col">
            <h4 className="p-3" style={styleX}>X : {x}</h4>
            </div>
            <div className="col">
            <button type="button" className="mx-1 my-1 btn btn-light" onClick={handleReset}>Clear</button>
            <button type="button" className="mx-1 my-1 btn btn-light" onClick={handleNew}>New Game</button>    
            </div>
            <div className="col">
            <h4 className="p-3" style={styleY}>O : {y}</h4>
            </div>
        </div>
        </div>
        {props.fill && <div className="alert alert-success text-center" role="alert">
            {<h3>Draw</h3>}
        </div>}
    </div>
  )
}
