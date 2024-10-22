// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// let arr=[[1,0,2],[1,1,2],[1,0,2]]
// // arr[0][2]=1;
// for(let i=0;i<3;i++){
//      var str="";
//     for(let j=0;j<3;j++){
//         str+=arr[i][j]+" ";
//     }
//      console.log(str);
// }
// check(arr);

//  function check(arr){
   
//     if((arr[0][0]==1 && arr[0][1]==1 && arr[0][2]==1)
//     || (arr[1][0]==1 && arr[1][1]==1 && arr[1][2]==1)
//     || (arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1)
//     || (arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1)
//     || (arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1)
//     || (arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1)
//     || (arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1)
//     || (arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)){
//         console.log("player 1 wins");
//     }
//     else if((arr[0][0]==2 && arr[0][1]==2 && arr[0][2]==2)
//     || (arr[1][0]==2 && arr[1][1]==2 && arr[1][2]==2)
//     || (arr[2][0]==2 && arr[2][1]==2 && arr[2][2]==2)
//     || (arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2)
//     || (arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2)
//     || (arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2)
//     || (arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2)
//     || (arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)){
//         console.log("player 2 wins");
//     }
//       console.log("checked");
// }

let turn=1;
var foundwinner=false;
var cells=document.querySelectorAll(".cells");
var b1=document.querySelector("#b1");
var b2=document.querySelector("#b2");
var b3=document.querySelector("#b3");
var b4=document.querySelector("#b4");
var b5=document.querySelector("#b5");
var b6=document.querySelector("#b6");
var b7=document.querySelector("#b7");
var b8=document.querySelector("#b8");
var b9=document.querySelector("#b9");
var btn=document.querySelector("button");
var left=document.querySelector(".left");
var right=document.querySelector(".right ");
var verdict=document.querySelector(".verdict");
cells.forEach(cell=>{
    cell.addEventListener("mouseover",()=>{
        cell.style.backgroundColor="#B9E5E8";
    });
    cell.addEventListener("mouseout",()=>{
        cell.style.backgroundColor="#7AB2D3";
    });
})

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        
     if(cell.innerHTML==="*"){
        if(turn==1){
            cell.innerHTML="X";
            cell.style.color="white";
            turn=2;
            left.style.opacity=0;
            right.style.opacity=1;
           }
          else if(turn==2){
            cell.innerHTML="O";
            cell.style.color="white";
            turn=1;
            right.style.opacity=0;
            left.style.opacity=1;
           }
     }
     else if(cell.innerHTML==="X" || cell.innerHTML==="O"){
        cell.innerHTML="*";
        cell.style.color="#7AB2D3";
        if(turn==1){
            turn=2;
        }
        else{
            turn=1;
        }
     }
     validate();
     if(checkdraw()){
        verdict.innerHTML="Its a Draw ";
     }
    });
})

btn.addEventListener("click",()=>{
    cells.forEach(cell=>{
        cell.innerHTML="*";
        cell.style.color="#7AB2D3";
    })
    turn=1;
    verdict.innerHTML="";
    left.style.opacity=1;
    right.style.opacity=0;

})



function validate(){
    // console.log(b1.innerHTML);
    if((b1.innerHTML==="X" && b2.innerHTML==="X" && b3.innerHTML==="X")
    || (b4.innerHTML==="X" && b5.innerHTML==="X" && b6.innerHTML==="X")
    ||  (b7.innerHTML==="X" && b8.innerHTML==="X" && b9.innerHTML==="X")
    || (b1.innerHTML==="X" && b4.innerHTML==="X" && b7.innerHTML==="X")
    || (b2.innerHTML==="X" && b5.innerHTML==="X" && b8.innerHTML==="X")
    || (b3.innerHTML==="X" && b6.innerHTML==="X" && b9.innerHTML==="X")
    || (b1.innerHTML==="X" && b5.innerHTML==="X" && b9.innerHTML==="X")
    || (b3.innerHTML==="X" && b5.innerHTML==="X" && b7.innerHTML==="X")
){
    // console.log("player 1 wins");
    verdict.innerHTML="Player 1 Won the Round";
    foundwinner=true;
    left.style.opacity=0;
    right.style.opacity=0;
}
else if((b1.innerHTML==="O" && b2.innerHTML==="O" && b3.innerHTML==="O")
    || (b4.innerHTML==="O" && b5.innerHTML==="O" && b6.innerHTML==="O")
    ||  (b7.innerHTML==="O" && b8.innerHTML==="O" && b9.innerHTML==="O")
    || (b1.innerHTML==="O" && b4.innerHTML==="O" && b7.innerHTML==="O")
    || (b2.innerHTML==="O" && b5.innerHTML==="O" && b8.innerHTML==="O")
    || (b3.innerHTML==="O" && b6.innerHTML==="O" && b9.innerHTML==="O")
    || (b1.innerHTML==="O" && b5.innerHTML==="O" && b9.innerHTML==="O")
    || (b3.innerHTML==="O" && b5.innerHTML==="O" && b7.innerHTML==="O")
){
    // console.log("player 1 wins");
    verdict.innerHTML="Player 2 Won the Round";
    foundwinner=true;
    left.style.opacity=0;
    right.style.opacity=0;

}
}

function checkdraw(){
    if(b1.innerHTML!="*" && b2.innerHTML!="*" &&b3.innerHTML!="*" &&b4.innerHTML!="*" &&b5.innerHTML!="*" &&b6.innerHTML!="*" && b7.innerHTML!="*" && b8.innerHTML!="*" && b9.innerHTML!="*" && foundwinner===false ){
        return true;
    }
    else{
        return false;
    }
}
// cells.forEach(cell=>{
//     cell.addEventListener("click",()=>{
        
       
        
//     });
// })