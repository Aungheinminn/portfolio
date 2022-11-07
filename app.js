
var wrapper = document.querySelector('.wrapper')
var text = document.querySelector('.text')
var spin = document.querySelector('.spin')
var A = document.querySelector('.A')
var items = document.querySelector('.items')
let container = document.querySelectorAll('.container')

var listitems = document.querySelectorAll('.list_items')
var logo = document.querySelector('.logo')
var holder = document.querySelector('.holder')
// console.log(listitems)
console.log(container[0])
container[0].style.display='block'
 
var handle = setInterval(on,1000)
function on(){
    logo.classList.add('pyanlr')
    holder.classList.add('pyanlr')
    for (let i = 0; i < listitems.length; i++) {
        console.log(listitems[i])
        listitems[i].classList.add('pyanlr')
    }
clearInterval(handle)
  
    
}

let content = document.querySelector('.content');
let int = document.querySelector('.int');
let spns = document.querySelectorAll('.spn')

document.addEventListener('mousemove',()=>{
    document.querySelector('.p').classList.add('pyanyout');
    document.querySelector('.h4').classList.add('pyanyout');
    content.classList.add('bor')
    for(let i=0;i<spns.length;i++){
        let time = (i+1)*300;
        // console.log(time)
         let dev = setInterval(info,time)
         function info(){
             spns[i].classList.add('anii')

             clearInterval(dev)
         }
       
    }
          document.querySelector('.graph').classList.add('gbor')
    if(document.querySelector('.graph').classList.contains('gbor')){
          document.querySelectorAll('.shells').forEach(shell=>shell.classList.add('sapp'))
    }
})
// let project = document.querySelector('.project');
let navlis = document.querySelectorAll('.list_items');
let btns = document.querySelectorAll('.btns');


// let probtn = document.querySelector('.projectbtn');
let abobtn = document.querySelector('.aboutbtn');
let btn = document.querySelectorAll('.btn')
console.log(btn)
for(let o=0;o<btn.length;o++){
    btn[o].addEventListener('click',()=>{
        // console.log(btn[o])
        btn[o].style.display='none';
        console.log(btn)

        location.reload();
        let con = setInterval(conn,1000)
            function conn(){
                container[0].style.display='block'

                 clearInterval(con);
            }
       
    })
}
let imdiv = document.querySelectorAll('.imdiv');
navlis.forEach((navli,idx)=>{
    navli.addEventListener('click',(e)=>{
        console.log(container[idx])
        for(let t=0;t<container.length;t++){
            container[t].style.display='none';

        }
        container[idx].style.display='block';

        for(let p=0;p<btn.length;p++){
            btn[p].style.display='block'
        }
        console.log(imdiv[idx])
        
        if (container[idx] = 2) {
            for(let n=0;n<imdiv.length;n++){
                let divtime = (n+1)*300
                let imd = setInterval(divap, divtime)
            
                 function divap() {
                    imdiv[n].classList.add('block');
                  }
            }
           
        }
    })
})

