const selectElement =  function(element) {
          return document.querySelector(element);
}

let body = selectElement('body');
let menuToggle = selectElement('.menu-toggle');

menuToggle.addEventListener('click', func);
function func() {
          body.classList.toggle('open');
}