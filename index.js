// let modal = document.querySelector("#myModal");
//   let yesBtn = document.querySelector(".ysBtn");
//   let noBtn = document.querySelector(".nBtn");
//   let myAdd = document.querySelector("#address-link-google");

//   yesBtn.addEventListener("click", function() {
//     modal.style.display = "none";
//   })

//   noBtn.addEventListener("click", function() {
//     location.href = "https://www.webmd.com/lung-cancer/default.htm";
//   })

//   myAdd.addEventListener("click", function() {
//     location.href = "https://www.google.com/maps/place/4150+Carriage+Square,+Taylorsville,+UT+84129/@40.6804047,-111.941192,18.25z/data=!4m5!3m4!1s0x87528b83501b549f:0x7d01fe3dfeace4aa!8m2!3d40.6808657!4d-111.9410474"
//   })

//   let slideIndex = 0;
//   showSlides();

//   function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 10000); // Change image every 2 seconds