let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalButtonNo = document.querySelector('.modal__action--negative');
let buttons = document.querySelectorAll('.button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

buttons.forEach(element => {
  element.addEventListener('click', () => {
    openModal();
  })
});

modalButtonNo.addEventListener('click', () => {
  closeModal();
});

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});

backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  closeModal();
});

let openModal = () => {
  backdrop.style.display = "block";
  modal.style.display = "block";
};

let closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
};