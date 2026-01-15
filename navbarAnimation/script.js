gsap.from('#nav h2',{
    opacity:0,
    duration:0.8,
    x:50
})

let menu = document.querySelector('#nav i')
let cross = document.querySelector('#full i')

let tl = gsap.timeline()

tl.to('#full',{
    right:0,
    duration:0.4,
})

tl.from('#full h4',{
    x:150,
    duration:0.45,
    stagger:0.1,
    opacity:0  
})

tl.from('#full i',{
    opacity:0,
    duration:0.5
})


tl.pause()

menu.addEventListener('click',function(){
    tl.play()
})

cross.addEventListener('click', function(){
    tl.reverse()
})
