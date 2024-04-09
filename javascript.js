function randomColor(){
  if (select==1){
    colors=["red", "green","blue","aqua","violet","pink","yellow","grey","brown","white"];
    randomNumber=Math.floor(Math.random()*10)
    console.log(colors[randomNumber])
    document.getElementById('change').style.backgroundColor = colors[randomNumber];
    document.getElementById('button').onmouseout=function(){this.style.backgroundColor=colors[randomNumber]}
    document.getElementById('button').onmouseover=function(){this.style.backgroundColor='black'}
    document.getElementById('color').innerHTML=colors[randomNumber];
  }
  else if (select==2){
    color="#"+Math.floor((Math.random() * 0xffffff)).toString(16);
    document.getElementById('change').style.backgroundColor = color;
    document.getElementById('button').onmouseout=function(){this.style.backgroundColor=color}
    document.getElementById('button').onmouseover=function(){this.style.backgroundColor='black'}
    document.getElementById('color').innerHTML=color;
  }
  else{
    color="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
    document.getElementById('change').style.backgroundColor = color;
    document.getElementById('button').onmouseout=function(){this.style.backgroundColor=color}
    document.getElementById('button').onmouseover=function(){this.style.backgroundColor='black'}
    document.getElementById('color').innerHTML=color;
  }
  
}

colors=["red", "green","blue","aqua","violet","pink","yellow","grey","brown","white"];
select=1;