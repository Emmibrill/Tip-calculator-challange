let Billelement=document.querySelector("#bill_amount");
let noofpeople=document.querySelector('#no-of-ppl');
let tipbutton=document.querySelectorAll('.button-one');
let customInput=document.querySelector('#custom');
let tipAmountPerperson=document.getElementById('tip-amount-per-person');
let totalAmountPerperson=document.getElementById('total-amount-per-person');
let resetButton=document.querySelector('.btn')
let numberError=document.querySelector('#number-input-error')
let inputEl=document.querySelector('#no-of-ppl')


let billamount=0;
let Nopeople=0;
let tippercentage=0
let customvalue=0

Billelement.addEventListener('keyup', (e) => {
    billamount=Number(e.target.value)
    calculateTip()
})

noofpeople.addEventListener('keyup', (e) => {
    Nopeople=(Number(e.target.value))
    if(noofpeople.value <=0){
        document.getElementById('number-input-error').style.display = 'block'
        } else{
            document.getElementById('number-input-error').style.display = 'none'   
        }
        calculateTip()
    if(noofpeople.value <=0){
        inputEl.classList.add('focusOn')
    } else{inputEl.classList.remove('focusOn')}
    
})

Array.from(tipbutton).forEach(tipbutton => {
    tipbutton.addEventListener('click', (e) => {
        if(e.target.innerText.includes('%')){
        tippercentage=Number(e.target.innerHTML.replace('%',''))
        toggleColor(e.target.innerText)
        calculateTip()
        }
    })
})

customInput.addEventListener('keyup', (e) =>{  
    customvalue=Number(e.target.value)
        calculateTip()
})

let tipAmount = '';
let tipAmountPerPerson = '';
let totalAmount = '';
let totalAmountPerPerson = '';

function calculateTip() {
    tipAmount = billamount * (customvalue/100) || billamount * (tippercentage/100)
    tipAmountPerPerson = tipAmount/Nopeople
    totalAmount = billamount + tipAmount
    totalAmountPerPerson = totalAmount/Nopeople
    updatevalues(tipAmountPerPerson, totalAmountPerPerson)
}

function updatevalues(tipAmountPerPerson, totalAmountPerPerson) {
    tipAmountPerperson.innerText =
    tipAmountPerPerson === Infinity || NaN ? 0 : tipAmountPerPerson.toFixed(2)
    totalAmountPerperson.innerText =
    totalAmountPerPerson === Infinity || NaN ? 0 : totalAmountPerPerson.toFixed(2)
}

function reset(){
    location.reload()

    /*Array.from(tipbutton).forEach(tipbutton => {
        tipbutton.classList.remove('active')
    })
    

    tipAmountPerperson.innerText = '0.00'
    totalAmountPerperson.innerText = '0.00'
    Billelement.value  = '';   
    noofpeople.value = ''
    customInput.value = ''*/
    
}

resetButton.addEventListener('click', () => {
    return reset()  
})



function clearError() {
    if (document.getElementById('number-input-error').style.display = 'block') {
        document.getElementById('number-input-error').style.display = 'none'
    }   
}
function toggleColor(tippercent) {
    Array.from(tipbutton).forEach(tipbutton => {
            if(tipbutton.innerHTML == tippercent){
            tipbutton.classList.add('active')
            } else{tipbutton.classList.remove('active')}
        
    })
}



