var t1= gsap.timeline()
.to("#language", {
   duration: 0,
   zIndex: 9,
})

.to("#lan1", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan1", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan10", { 
   y: -60,
   opacity: 1,
   duration: 3,
})
.to("#tag", { 
   y: -60,
   opacity: 1,
   duration: 3,
})
.to("#tag", { 
   y: -60,
   opacity: 0,
   duration: 0.3,
})
.to("#language",{
   height: 0,
   duration: 3,
   delay: 1
})
const zoomText = document.querySelector('#lan10');

// GSAP Animation: Timed zoom in and out on a loop
gsap.to(zoomText, {
   scale: 2, 
   duration: 6, 
   ease: "power2.inOut", 
   repeat: 0,       // Repeat indefinitely
   yoyo: true        // Reverse animation (zoom out)
});
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('navbar');

menuIcon.addEventListener('click', function () {
    // Toggle the menu
    navLinks.classList.toggle('show');
    // Toggle the hamburger icon animation
    menuIcon.classList.toggle('active');
});

// Load user data on page load
window.addEventListener('DOMContentLoaded', (event) => {
   const userInfo = document.getElementById('user-info');
   const userName = localStorage.getItem('userName'); // Retrieve the user's name from localStorage
   const isVerified = localStorage.getItem('isVerified'); // Check if OTP verification was successful
   const userNameElement = document.getElementById('user-name');

   if (userName && isVerified === 'true') {
       // Display the user's name on the navbar if they are verified
       userNameElement.textContent = `Hello, ${userName}`;
   } else {
       // If not verified or no user is logged in, show the login option
       userInfo.innerHTML = `<a href="login.html"><img src="./resources/Images/log.png" alt="" height="20" width="20">Login</a>`;
   }
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
   localStorage.removeItem('userName'); // Clear user name
   localStorage.removeItem('isVerified'); // Clear verification status
   window.location.href = 'login.html'; // Redirect to login page or normal home page
});
