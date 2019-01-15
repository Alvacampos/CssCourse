let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalButtonNo = document.querySelector('.modal__action--negative');
let buttons = document.querySelectorAll('.button');

buttons.forEach(element => {
  element.addEventListener('click', () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  })
});

modalButtonNo.addEventListener('click', () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
})