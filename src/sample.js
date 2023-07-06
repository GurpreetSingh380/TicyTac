const id = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const board=[true, false, true, 
            null, false, true, 
            null, false, null];
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
      return -1;
    }
    console.log(check());