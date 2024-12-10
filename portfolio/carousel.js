// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   loop:true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 150,
//     modifier: 2.5,
//     slideShadows: true,
//   },
//   autoplay:{

//     delay:3000,
//     disableOnInteraction:false,
//   }

// });

/* SLIDER */

// var currentImg = 0;
// var imgs = document.querySelectorAll('.slider img');
// let dots = document.querySelectorAll('.dot');
// var interval = 3000;

// document.getElementById('img-1') = firstImage;
// document.getElementById('img-2') = secondImage;
// document.getElementById('img-3') = thirdImage;

// var timer = setInterval(changeSlide, interval);

// function changeSlide(n) {
//   for (var i = 0; i < imgs.length; i++) {
//     imgs[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(' active', '');
//   }

//   currentImg = (currentImg + 1) % imgs.length;

//   if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(changeSlide, interval);
//     currentImg = n;
//   }

//   imgs[currentImg].style.opacity = 1;
//   dots[currentImg].className += ' active';
// }


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}