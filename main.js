
const mybutton = document.getElementById("myBtn");
const header = document.getElementById('myHeader');
header.style.backgroundColor = 'brown';

const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    header.style.backgroundColor = 'white';
    header.style.color = 'brown';
    nav.style.color = 'brown'; 
  } else {
    mybutton.style.display = "none";
    header.style.backgroundColor = 'brown';
    header.style.color = 'white';
    nav.style.color = 'white';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const mobMenu = () => {
  for (const link of menuItems) {
    // Removed the unused loop variable 'link'
    link.addEventListener('click', mobMenu);
  }

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  } else {
    nav.classList.add('responsive');
  }
}

mobButton.addEventListener('click', mobMenu);

window.onscroll = function () { scrollFunction() };
