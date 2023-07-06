import React, {useState, useEffect} from 'react'
import cross from '../images/cross.png'
import zero from '../images/zero.png'
export default function Inner(props) {
    let [present, setPresent] = useState(false);
    let handleOnClick = () => {
      if (!present && props.win===null){
        const newboard = props.board;
        newboard[props.id] = props.turn;
        props.setBoard(newboard);
        props.setTurn(!props.turn);
        setPresent(true);
        let ans = props.check();
        if (ans!==-1) props.setWin(ans); 
      }
    }
    useEffect(()=>{
      setPresent(false); props.setReset(false);
    }, [props.reset, props.news])
  return (
    <div className ='container myhover mx-1 my-1 d-flex justify-content-center align-items-center bg-light rounded' onClick={handleOnClick} style={{height: '70px', width: '70px'}}>
        {present && <img src={props.board[props.id]?cross:zero} alt="cross" />}
    </div>
  )
}
