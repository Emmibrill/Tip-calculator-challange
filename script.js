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

function dontCalculateTip() {
    let tipAmount = billamount * 0 || billamount * 0
    let tipAmountPerPerson = tipAmount * 0
    let totalAmount = 0
    let totalAmountPerPerson = totalAmount * 0
    
    dontCalculateTip()
    updatevalues(tipAmountPerPerson, totalAmountPerPerson)
}

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
        calculateTip()
        }
    })
})

customInput.addEventListener('keyup', (e) =>{  
    customvalue=Number(e.target.value)
    
        calculateTip()
})

function calculateTip() {
    let tipAmount = billamount * (customvalue/100) || billamount * (tippercentage/100)
    let tipAmountPerPerson = tipAmount/Nopeople
    let totalAmount = billamount + tipAmount
    let totalAmountPerPerson = totalAmount/Nopeople
    

    updatevalues(tipAmountPerPerson, totalAmountPerPerson)
}


function updatevalues(tipAmountPerPerson, totalAmountPerPerson) {
    tipAmountPerperson.innerText =
    tipAmountPerPerson == Infinity ? 0: tipAmountPerPerson.toFixed(2)
    totalAmountPerperson.innerText =
    totalAmountPerPerson == Infinity ? 0:totalAmountPerPerson.toFixed(2)

    
}
let reset = []
let innerHTML = tipAmountPerperson.innerHTML  || totalAmountPerperson.innerHTML
resetButton.addEventListener('click', e => {
    reset = (String(e.target.innerText))

    if(reset.value = 'RESET'){
        tipAmountPerperson.innerHTML = innerHTML
        totalAmountPerperson.innerHTML = innerHTML
        Billelement.value = ''
        noofpeople.value = ''
        customInput.value = ''
        numberError.innerHTML = ''  
    }
})




