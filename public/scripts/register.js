async function newPerson ()
{
    
    const inputName = document.getElementById('name');
    const inputLastName = document.getElementById('lastName');
    const inputCpf = document.getElementById('cpf');
    const inputDataOfBirth = document.getElementById('dateOfBirth');
    const inputEmail = document.getElementById('email');
    const inputPhone1 = document.getElementById('phone1');
    const inputPhone2 = document.getElementById('phone2');
    const mensg = document.getElementById('message');

    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name: `${inputName.value}`, lastName: `${inputLastName.value}`, cpf: `${inputCpf.value}`, dateOfBirth: `${inputDataOfBirth.value}`, email: `${inputEmail.value}`, phones: [`${inputPhone1.value}`, `${inputPhone2.value}`]})
    }

    try{
        fetch('/person', requestOptions)
        .then(async response => {
            await response
        })
        .then(async data => await console.log(data))
    }catch(error){
        console.log(error)
    }

}