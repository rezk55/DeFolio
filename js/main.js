

// typing text
function addClasses(id,...classesAdd){
    var element = document.getElementById(id);
    element.classList.add(...classesAdd);
}

function removeClasses(id,...classesRe){
    var element = document.getElementById(id);
    element.classList.remove(...classesRe);
}


function TypingDes(){
    setTimeout(() => {
        addClasses("t-Photographer" , "d-none");
        removeClasses("t-designer", "d-none");
        addClasses("t-designer" , "title-1", "anim-typewriter");
    }, 0);
}

function TypingDev(){
    setTimeout(() => {
        addClasses("t-designer" , "d-none");
        removeClasses("t-developer", "d-none");
        addClasses("t-developer", "title-1", "anim-typewriter");
    }, 2000);
}

function TypingFre(){
    
    setTimeout(() => {
        addClasses("t-developer" , "d-none");
        removeClasses("t-freelancer", "d-none");
        addClasses("t-freelancer", "title-1", "anim-typewriter");
    }, 4000);
}

function TypingPho(){
    
    setTimeout(() => {
        addClasses("t-freelancer" , "d-none");
        removeClasses("t-Photographer", "d-none");
        addClasses("t-Photographer", "title-1", "anim-typewriter");
    }, 6000);
}



function typing(){
    TypingDes();
    TypingDev();
    TypingFre();
    TypingPho();
}


typing();
setInterval(typing,8000 );
//////////////////////////////////////////////////////////////

//scroll up
var element = document.getElementById('up');
var html = document.getElementById('html');

window.addEventListener('scroll', function() {
    if(html.scrollTop >= 30 ) {
       element.style.opacity = 1;
        // console.log(html.scrollTop)
    } else {
        element.style.opacity = 0;
        // console.log(html.scrollTop)
    }

    });

element.addEventListener('click', function() {
    html.scrollTop = 0;
    html.animate(
        {scrollTop:0}, 1000
    );
})


//active nav with scroll

//function to remove active class from all navs
function removeActive(id){
    for(let i= 0;i< id.children.length;i++){
        id.children[i].children[0].classList.remove('active');
    }
}

window.addEventListener('scroll', function(){
    var navs = document.getElementById('navs');
    var currentScroll = html.scrollTop ;
    const limitHome = 555;
    const limitAbout = 1110;
    const limitServ = 2095;
    const limitCount = 2620;
    const limitWork =  3610 ; 
    const limitSlider = 4280;
    const limitBlog = 5010;
    const limitContact = 5250 ;
    // console.log(currentScroll);
    if(currentScroll <= limitHome) {
        removeActive(navs);
        document.getElementById('home-nav').classList.add('active');
    } else if(currentScroll > limitHome && currentScroll <= limitAbout){
        removeActive(navs);
        document.getElementById('about-nav').classList.add('active');
    } else if(currentScroll > limitAbout && currentScroll <= limitServ){
        removeActive(navs);
        document.getElementById('services-nav').classList.add('active');
    } else if(currentScroll > limitServ && currentScroll <= limitCount){
        removeActive(navs);
    } else if(currentScroll > limitCount && currentScroll <= limitWork){
        removeActive(navs);
        document.getElementById('work-nav').classList.add('active');
    } else if(currentScroll > limitWork && currentScroll <= limitSlider){
        removeActive(navs);
    } else if(currentScroll > limitSlider && currentScroll <= limitBlog){
        removeActive(navs);
        document.getElementById('blog-nav').classList.add('active');
    } else if(currentScroll > limitWork && currentScroll <= limitContact){
        removeActive(navs);
        document.getElementById('contact-nav').classList.add('active');
    } 


});



// counter
function counter(id){
    var countId = document.getElementById(id);
    var end = countId.children[0].innerHTML;
    new PureCounter({
    selector: `#${id}`, 
    start: 0, 
    end: end,
    duration: 0.1, 
    delay: 0.5, 
    once: true, 
    pulse: false, 
    decimals: 0,
    legacy: true, 
    filesizing: false, 
    currency: false, 
    formater: "us-US",  
    separator: false 
        });
}

window.addEventListener('load', function(){
    counter('count1');
    counter('count2');
    counter('count3');
    counter('count4');
})