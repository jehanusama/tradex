
// scroll of the button

var topArrow = document.querySelector('#scroll')

window.addEventListener('scroll' , function(){
    console.log(this.document.documentElement.scrollTop)
    if(this.document.documentElement.scrollTop > 190){
        topArrow.style.display= "block"
    }
    else  topArrow.style.display= "none"
})

// the sliders
let currentSlide = 0;

function showSlide(index) {
    let slides = document.querySelector(".all_slides");
    let totalSlides = slides.children.length;

    if (index >= totalSlides) 
    {    currentSlide = 0;
    }
    else if (index < 0){ currentSlide = totalSlides - 1;}
    else {currentSlide = index;}

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlideByIndex(index) {
    showSlide(index);
}
    document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); 

});

// change li color fifth section our work

function changeLiColor(element){
    var list =document.getElementsByClassName("lis_li")
    for (i=0 ; i <list.length ; i++){
        list[i].style.color = 'black'
    }
    element.style.color="blue"
}

//filtercategories


function filterItems(category) {
    const photos = document.querySelectorAll('.the_little_photo');

    photos.forEach(photo => {
        const photoCategories = photo.getAttribute('data-category');
        
        if (category === 'all' || photoCategories.includes(category)) {
            // Show photo with transition
            photo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            photo.style.opacity = '1';
            photo.style.transform = 'scale(1)';
            setTimeout(() => {
                photo.style.display = 'block'; // Ensure it's visible
            }, 500); // Matches the transition duration
        } else {
            // Hide photo with transition
            photo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            photo.style.opacity = '0';
            photo.style.transform = 'scale(0.8)';
            setTimeout(() => {
                photo.style.display = 'none'; // Hide after transition
            }, 500); // Matches the transition duration
        }
    });
}

// Change the color of the clicked item and  Filter the items based on the category

function handleFilterClick(element, category) {
    changeLiColor(element);  
    filterItems(category);   
}






//counter

window.addEventListener('scroll', function () {
    var counter_1 = document.getElementById('counter_1');
    var i = 0;

    counter_1.innerText = i;

    var set_1 = setInterval(() => {
        i += 500;
        counter_1.innerText = i;

        
        if (i >= 8000) {
            clearInterval(set_1);
        }
    }, 100);
});
window.addEventListener('scroll', function () {
    var counter_1 = document.getElementById('counter_2');
    var i = 0;

    counter_1.innerText = i;

    var set_1 = setInterval(() => {
        i += 50;
        counter_1.innerText = i;

        
        if (i >= 810) {
            clearInterval(set_1);
        }
    }, 100);
});
window.addEventListener('scroll', function () {
    var counter_1 = document.getElementById('counter_3');
    var i = 0;

    counter_1.innerText = i;

    var set_1 = setInterval(() => {
        i += 125;
        counter_1.innerText = i;

        
        if (i >= 2000) {
            clearInterval(set_1);
        }
    }, 100);
});
window.addEventListener('scroll', function () {
    var counter_1 = document.getElementById('counter_4');
    var i = 0;

    counter_1.innerText = i;

    var set_1 = setInterval(() => {
        i += 1;
        counter_1.innerText = i;

        
        if (i >= 20) {
            clearInterval(set_1);
        }
    }, 100);
});


//the slider


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, 
        margin: 10, 
        nav: false, 
        dots:false,
        responsive: {
            0: {
                items: 1 
            },
            990: {
                items: 2 
            }
            
            
        }
    });

    // Optional: Customize navigation buttons
    $(".left_b").click(function () {
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".right_b").click(function () {
        $(".owl-carousel").trigger("next.owl.carousel");
    });
});


//tabs(user_personal_ultimate)



let tabs = document.getElementsByClassName('tabs_content');

function handleShowTab(elementId, button){
    // Hide all tabs
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].classList.remove('active');
    }

    // Show the selected tab
    let element = document.getElementById(elementId);
    element.classList.add('active');

    // Change the background of the buttons
    let buttons = document.querySelectorAll('.two_button button');
    
    buttons.forEach(btn => {
        // Remove 'blue_background' and 'white_text' from all buttons and make them transparent with blue text
        btn.classList.remove('blue_background', 'white_text');
        btn.classList.add('transparent', 'blue_color');
    });

    // Add 'blue_background' and 'white_text' to the clicked button
    button.classList.remove('transparent', 'blue_color');
    button.classList.add('blue_background', 'white_text');
}


