/**
 * Project Name: Pin Code Generator and Mathcher
 * Author: Tushar Ahmmed Sakib
 * Author URI: https://www.facebook.com/tusharahmmed.sakib
 * 
 */

// generate pincode function


// get pin number
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    let pinStr = pin + '';

    // make sure that number is 4 digit
    if (pinStr.length == 4) {
        return pinStr;
    } else {
        return getPin();
    }
}
// inser pin into generate field
function generatePin() {
    const randomField = document.getElementById('random-value');
    randomField.value = getPin();
}

/**
 * 
 * keypad functions
 * 
 */


function insertKeyValue() {
    const valueField = document.getElementById('input-value');
    const btnValue = event.target.innerText;
    // if its not number
    if (isNaN(btnValue)) {
        // for clear btn
        if (btnValue == 'C') {
            valueField.value = '';
        }
        // for back btn
        if (btnValue == '<') {
            let currentPinValue = valueField.value;
            let newPinValue = currentPinValue.substring(0, currentPinValue.length - 1);
            valueField.value = newPinValue;
        }
        // for submit btn
        if (btnValue == 'Submit') {
            // get values
            const randomNumber = document.getElementById('random-value').value;
            const valueFieldNumber = document.getElementById('input-value').value;
            // compare values
            if (valueFieldNumber != '') {
                comparePinCode(randomNumber, valueFieldNumber);

            }
        }
    } else {
        valueField.value += btnValue;
    }
}

// compare pin code
function comparePinCode(genarate, submit) {

    const notifiSection = document.getElementById('notification');
    if (genarate == submit) {
        notifiSection.innerHTML = `<p class="notify">✅ Pin Matched... Secret door is opening for you</p>`;
    } else {
        notifiSection.innerHTML = `<p class="notify">❌ Pin Didn't Match, Please try again</p>`;
    }

    // clear field
    document.getElementById('random-value').value = '';
    document.getElementById('input-value').value = '';

}



// handle
const genrateBtn = document.getElementById('generate-btn');
const keyValue = document.getElementById('key-pad');

/**
 * Events
 */

// pin generate
genrateBtn.addEventListener('click', function () {
    generatePin();
})

// keypad value
keyValue.addEventListener('click', function (event) {
    insertKeyValue();
})



