document.querySelector("#name").addEventListener("blur",validateName)
document.querySelector("#email").addEventListener("blur",validateEmail)
document.querySelector("#phoneNumber").addEventListener("blur",validateNumber)
document.querySelector("#inputZip").addEventListener("blur",validateZip)


function validateName (){
    const input = document.querySelector("#name")
    const regexp = /^[a-zA-Z]{2,10}$/;
    if(!regexp.test(input.value)){
        input.classList.add("is-invalid")
    }
    else{
        input.classList.remove("is-invalid")
    }
}

function validateEmail(){
    const email = document.querySelector('#email');
    const regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    if(!email.value.match(regexp)){
       email.classList.add('is-invalid');
    } else {
       email.classList.remove('is-invalid');
    }
}

function validateNumber(){
    const phone = document.querySelector('#phoneNumber');
    const regexp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  
    if(!phone.value.match(regexp)){
       phone.classList.add('is-invalid');
    } else {
       phone.classList.remove('is-invalid');
    }

}

function validateZip(){

    const zip = document.querySelector('#inputZip');
  const regexp = /^[0-9]{5}(-[0-9]{4})?$/;

  if(!zip.value.match(regexp)){
       zip.classList.add('is-invalid');
  } else {
       zip.classList.remove('is-invalid');
  }
}