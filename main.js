// 
// document.querySelectorAll(".imagecontainer")
// .forEach(function(elem){
//     gsap.to(elem,{
//         ease:Expo.easeInOut,
//         duration:2,
//         width:"100%",
//         stagger:2
//     })
// })
    gsap.to(".imagecontainer",{
        ease:Expo.easeInOut,
        duration:2,
        width:"100%",
        stagger:2
    })
    gsap.to(".text h1",{
        ease:Expo.easeInOut,
        stagger:2,
        duration:2,
        top:0
    })
    gsap.to(".text h1",{
        delay:2,
        ease:Expo.easeInOut,
        stagger:2,
        top:"-100"
    })