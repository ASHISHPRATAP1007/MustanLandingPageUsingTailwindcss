var t1=gsap.timeline()

t1.from(".logo h2,.navlinks,.navbuttons",{
    y:-100,
    delay:1,
    opacity:0,
    duration:1,
    stragger:0.5
})

t1.from(".image img",{
    x:1,
    opacity:0,
    duration:.4,
    blur:1,
    scale:.8
})

t1.from(".mustang",{
    x:-100,
    delay:.5,
    opacity:0,
    duration:1,
    stragger:0.5
})

t1.from(".bottom-content",{
    x:100,
    delay:.5,
    opacity:0,
    duration:1,
    stragger:0.3
})
t1.from(".specification span",{
    y:100,
    opacity:0,
    duration:1,
})
