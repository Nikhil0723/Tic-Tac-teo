let turn  = 'X' ; 
let gameOver = false ;

const changeTurn = ()=>{
     
 return turn === 'X' ? 0 :'X' ;

}

const checkWin = ( ) =>{

     let boxtext = document.querySelectorAll('.box-text');

    let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]

 wins.forEach(e => {
    if (
      boxtext[e[0]].textContent === boxtext[e[1]].textContent &&
      boxtext[e[1]].textContent === boxtext[e[2]].textContent &&
      boxtext[e[0]].textContent !== ''
    ) {
      document.querySelector('.info').innerText = boxtext[e[0]].textContent + ' WON';
      gameOver = true;
      
    }
  });
};
    

let boxes = document.getElementsByClassName('box')

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            turn = changeTurn();
            checkWin();
           
            if(!gameOver){
                document.querySelector('.info').innerText = 'Turn for ' + turn;
            }
        }
    })
}) 

reset.addEventListener('click' ,()=>{
  let   boxtexts = document.querySelectorAll('.box-text')

  Array.from(boxtexts).forEach(element =>{
    element.innerText = '' ;
  })
      turn = 'X'
      gameOver = false
      document.querySelector('.info').innerText = 'Turn for ' + turn;
})