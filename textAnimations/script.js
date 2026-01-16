function breakTheText() {
    let h1 = document.querySelector("h1")
    let h1Text = h1.textContent
    let splittedText = h1Text.split("")

    let halfValue = Math.floor(splittedText.length/2)

    let clutter = ""

    splittedText.forEach(function (elem,idx) {
        if (idx<halfValue) {
            clutter = clutter + `<span class="a" {
                constructor(parameters) {
                    
                }
            } >${elem}</span>`
        }else{
            clutter = clutter + `<span class="b" >${elem}</span>`
        }
    })


    h1.innerHTML = clutter
}

breakTheText()

gsap.from('h1 .a',{
    opacity:0,
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from('h1 .b',{
    opacity:0,
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})

