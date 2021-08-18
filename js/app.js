// get generate Pin 
function getPin() {
    const getRandom = Math.round(Math.random() * 10000);
    const randomString = getRandom + '';
    if (randomString.length == 4) {
        return randomString;
    }
    else {
        return getPin();
    }
}
//click handlear fot grnerate pin 
document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const disply = document.getElementById('generate-pin');
    disply.value = pin;
})
// srat input pin 
//click haldlear for numbers  
document.getElementById('clac-numbers').addEventListener('click', function (e) {
    const calcNumber = e.target.innerText;
    const inputDispaly = document.getElementById('display-pin');
    if (isNaN(calcNumber)) {
        if (calcNumber == 'C') {
            inputDispaly.value = '';
        }
    }
    else {
        const priviusNumber = inputDispaly.value;
        inputDispaly.value = priviusNumber + calcNumber;
    }
})
//submit button start
//add click handlar for submit button 
document.getElementById('submit-btn').addEventListener('click', function () {
    const generatPin = document.getElementById('generate-pin').value;

    const displayPin = document.getElementById('display-pin').value;

    const succesMassege = document.getElementById('succen-notify');
    const faildMassage = document.getElementById('faild-notify');
    if (generatPin == displayPin) {

        succesMassege.style.display = 'block';
        faildMassage.style.display = 'none';

    }
    else {

        faildMassage.style.display = 'block';
        succesMassege.style.display = 'none';


    }
})