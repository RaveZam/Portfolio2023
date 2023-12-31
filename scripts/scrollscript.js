const header = document.getElementsByClassName('main-header')[0]
const slide = document.getElementsByClassName('slide')[0]
const slide2 = document.getElementsByClassName('slide2')[0]
const h2slide = document.getElementsByClassName('h2t')[0]
const body = document.getElementsByClassName('body')[0]
const profile = document.getElementsByClassName('profilepic')[0]
const profiledesc = document.getElementsByClassName('mini-leftsection')[0]
const vidslide1 = document.getElementsByClassName('vid-slide1')[0]
const vidslide2 = document.getElementsByClassName('vid-slide2')[0]
const vidslide3 = document.getElementsByClassName('vid-slide3')[0]
const vidslide4 = document.getElementsByClassName('vid-slide4')[0]
const tabs = document.getElementsByClassName('tabcontainer')[0]
const tabsdesc = document.getElementsByClassName('tabs-desc-container')[0]

let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        // Set a flag to indicate scrolling is in progress
        isScrolling = true;

        // Your animation code goes here

        // Debounce the scroll event by delaying the reset of the flag
        setTimeout(() => {
            isScrolling = false;
        }, 5000); // Adjust the delay (in milliseconds) as needed
    }
});


function handleScroll(){
    const scrollY = window.scrollY;

    // Add a class to the header when scrolling down
    if (scrollY > 200) { // Adjust the threshold as needed
        header.classList.add('scrolled');
        slide.classList.add('slide-out')
        slide2.classList.add('slide-out')

    } else {
        header.classList.remove('scrolled');
        slide.classList.remove('slide-out') 
        slide2.classList.remove('slide-out') 
    }
    if (scrollY > 300) { // Adjust the threshold as needed
        body.classList.add('section2scroll')
        profile.classList.add('profilescrolled')
        profiledesc.classList.add('descscrolled')
        body.classList.remove('dark')
        header.classList.remove('darkheader')
    } else {
        body.classList.remove('section2scroll')
        
    }
    if (scrollY > 1500) { // Adjust the threshold as needed
        body.classList.add('dark')
        header.classList.add('darkheader')
        tabs.classList.add('scroll')
        tabsdesc.classList.add('scroll') 
    } else {
       
        
    }

    if (scrollY > 2200) { // Adjust the threshold as needed
        body.classList.remove('dark')
        header.classList.remove('darkheader')
        h2slide.classList.add('scrolled')
        body.classList.remove('section2scroll') 
        body.classList.add('scrolled')
        vidslide1.classList.add('highlightslide') 
        vidslide2.classList.add('highlightslide') 
        vidslide3.classList.add('highlightslide') 
        vidslide4.classList.add('highlightslide') 
        
    } else {
        
     
    }
}

window.addEventListener('scroll', handleScroll);

console.log(scrollY)


