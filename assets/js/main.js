const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Basilisk V3: R-R-RAZ-RZ01-0400';
ul.children[1].innerText = 'Huntsman V2 TKL: R-R-RAZ-RZ03-0394';
ul.children[2].innerHTML = 'RAZER BLADE 18: R-R-raz-RZ09-0509';
const btn = document.querySelector('.btn');

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);
  if (nameInput.value === '' || emailInput.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}
