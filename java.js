 
 let sayfa1 =document.querySelector('.sayfa-1')
 let sayfa2 =document.querySelector('.sayfa-2')
 let sayfa3 =document.querySelector('.sayfa-3')
 let numS1 = document.querySelector('.numS1')
 let numS2 = document.querySelector('.numS2')
 let numS3 = document.querySelector('.numS3')
 let content = document.querySelector('.content')
 
//turn from the first page to the second page

 function sayfa12(){
   audio1.innerHTML = ' <audio id="a0" src="ses.waptt" controls autoplay></audio>'
a0.style.opacity = 0
  sayfa1.setAttribute('style','transform: rotateY(100deg); border-bottom-left-radius:50% ;')
but1.style.opacity = 0
sayfa1.style.fontSize = 0
ulsayfa1.style.opacity = 0
numS1.style.opacity = 0

}
//turn from the second page to the three page


function sayfa23(){
   audio2.innerHTML = ' <audio id="a1" src="ses.waptt" controls autoplay></audio>'
   a1.style.opacity = 0
   sayfa2.setAttribute('style','transform: rotateY(100deg);  border-bottom-left-radius:50%')

 sayfa2.style.fontSize = 0
 ulsayfa2.style.opacity = 0
numS2.style.opacity = 0
but2.style.opacity = 0
but22.style.opacity = 0

 }
// Back ToPrevious Sheet
//Return from the three page to the second page

function sayfa32(){
  audio2.innerHTML = ' <audio id="a3" src="ses.waptt" controls autoplay></audio>'
  a3.style.opacity  = 0
  sayfa2.setAttribute('style','transform: rotateY(0); ')
sayfa2.style.fontSize = 1
ulsayfa2.style.opacity = 1
numS2.style.opacity = 1
but2.style.opacity = 1
but22.style.opacity = 1
}


 // Return from the second page to the first page

 function sayfa21(){
   audio1.innerHTML = ' <audio id="a2" src="ses.waptt" controls autoplay></audio>'
   a2.style.opacity = 0
   sayfa1.setAttribute('style','transform: rotateY(0);')
 but1.style.opacity = 1
ulsayfa1.style.opacity = 1
numS1.style.opacity = 1
but1.style.opacity = 1
 }
//Add Time
   setInterval(() =>{
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var sec = date.getSeconds()
var day = date.getDate();
var mon = date.getMonth()+1
var yarr = date.getFullYear()
var fullTime = hour + ':' + min +':' +sec

time.innerHTML = fullTime
//time.style.position = 'absolute'
//time.style.top = 90 +'px'
//time.style.right = 90 +'px'

time.style.color = 'white'
date2.innerHTML= day +'-'+mon +'-'+yarr
date2.style.color = 'white'
//date2.style.position = 'absolute'
//date2.style.top = 50 +'px'
//date2.style.right = -20 +'px'

},1000)

