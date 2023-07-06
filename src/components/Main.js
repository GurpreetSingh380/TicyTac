import React, {useEffect, useState} from 'react'
import Inner from './Inner'
import Winboard from './Winboard';
export default function Main(props) {
    const [board ,setBoard] = useState(Array(9).fill(null));
    const [win, setWin] = useState(null);
    const [fill, setFill] = useState(false);
    const [reset, setReset] = useState(false);
    const [news, setNews] = useState(false);
    const [turn, setTurn] = useState(true); // true -> X , false -> O
    const id = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    useEffect(()=>{
      setBoard(Array(9).fill(null));
      setFill(false); setWin(null); setTurn(true); setNews(false);
    }, [reset, news])
    let check = () => {
      for(let i=0; i<3; i++){
        let ans = true;
        for(let j=0; j<3; j++){
          if (board[id[i][j]]===null) ans=false;
        }
        if (ans && !(board[id[i][0]]|board[id[i][1]]|board[id[i][2]])) return false;
        else if (ans && (board[id[i][0]]&board[id[i][1]]&board[id[i][2]])) return true;
      }
      for(let i=0; i<3; i++){
        let ans = true;
        for(let j=0; j<3; j++){
          if (board[id[j][i]]===null) ans=false;
        }
        if (ans && !(board[id[0][i]]|board[id[1][i]]|board[id[2][i]])) return false;
        else if (ans && (board[id[0][i]]&board[id[1][i]]&board[id[2][i]])) return true;
      }
      let i=0, j=0, flag=true;
      while (i<3){
        if (board[id[i][j]]===null) flag=false;
        i++; j++;
      }
      if (flag && !(board[id[0][0]]|board[id[1][1]]|board[id[2][2]])) return false;
      else if (flag && (board[id[0][0]]&board[id[1][1]]&board[id[2][2]])) return true;
      i=0; j=2; flag=true;
      while (i<3){
        if (board[id[i][j]]===null) flag=false;
        i++; j--;
      }
      if (flag && !(board[id[0][2]]|board[id[1][1]]|board[id[2][0]])) return false;
      else if (flag && (board[id[0][2]]&board[id[1][1]]&board[id[2][0]])) return true;
      flag=true;
      for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
          if (board[id[i][j]]===null) flag=false;
        }
      }
      if (flag) setFill(true);
      return -1;
    }
  return (
    <div>
      <div className="container my-5 bg-success rounded my-grid" style={{width: '236px'}}>
      <div className="row" style={{minWidth: '234px', maxHeight: '78px'}}>
            <div className="col-sm myBox">
            <Inner id={0} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={1} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={2} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
        </div>
        <div className="row" style={{minWidth: '234px', maxHeight: '78px'}}>
            <div className="col-sm myBox">
            <Inner id={3} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={4} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={5} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
        </div>
        <div className="row" style={{minWidth: '234px', maxHeight: '78px'}}>
            <div className="col-sm myBox">
            <Inner id={6} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={7} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
            <div className="col-sm myBox">
            <Inner id={8} news={news} board={board} win={win} reset={reset} check={check} setWin={setWin} setBoard={setBoard} turn={turn} setTurn={setTurn} setReset={setReset}/>
            </div>
        </div>
      </div>
      <Winboard win={win} setNews={setNews} turn={turn} setReset={setReset} fill={fill}/>
    </div>
  )
}
