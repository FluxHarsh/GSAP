let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor')
let imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    console.log(dets.x)
    gsap.to(cursor,{
        x:dets.x + 23,
        y:dets.y + 15,
        duration:0.5,
        // ease:"back.out"
    })
})

imageDiv.addEventListener('mouseenter', function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4
    })
})
imageDiv.addEventListener('mouseleave', function(){
        cursor.innerHTML=""

    gsap.to(cursor,{
        scale:1
    })
})