const myForm = document.querySelector('#my-form')
const nameInput= document.querySelector("#name")
const emailInput= document.querySelector("#email")
const msg = document.querySelector('.msg')
const userList=document.querySelector('#users')


//Listen for Form Submit
myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if (nameInput === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML="Please enter all fields";
    //Remove in 3 seconds
    setTimeout(() => msg.remove(), 3000)
    }else {
const li = document.createElement('li')
li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
  userList.appendChild(li);
  
  //Clear fields
  nameInput.value = '';
  emailInput.value='';
}
}