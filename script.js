// generate random pin 
document.querySelector('.pin-generator button').addEventListener('click',function(){
    document.getElementsByClassName('notify')[0].style.display = 'none';
    document.getElementsByClassName('notify')[1].style.display = 'none';
    document.querySelector('.input-section input').value = '';
    document.querySelector('.submit-btn').disabled = false;
    document.getElementById('warning').style.display = 'block';
    count = 3;
    document.getElementById('warning').innerText = count + ' try left';

    const pin = Math.round(Math.random() * (9999-1000)) + 1000;
    document.getElementById('pin-output').value = pin;
})

// add digit to screen
const btn = document.getElementsByClassName('digit');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        let input = document.querySelector('.input-section input').value;
        input += btn[i].innerText;
        if(input.length === 5){
            input +='';
        }
        else{
            document.querySelector('.input-section input').value = input;
        }
    })
}

// clear btn click handler
document.getElementById('clear').addEventListener('click', function(){
    document.querySelector('.input-section input').value = '';
})
// backspace btn click handler
document.getElementById('backspace').addEventListener('click', function(){
    const value = document.querySelector('.input-section input').value;
    const output = value.slice(0,value.length-1);
    document.querySelector('.input-section input').value = output;
})

// submit btn click handler
let count = 3;
document.querySelector('.submit-btn').addEventListener('click', function(){
    const pin = document.getElementById('pin-output').value;
    const input =  document.querySelector('.input-section input').value;
    if(pin !== '' && input!== ''){
        if(pin === input){
            document.querySelector('.submit-btn').disabled = true;
            document.getElementById('matched').style.display = 'block';
            document.getElementById('warning').style.display = 'none';
        }
        else{
            if(count > 1){
                count--;
                document.getElementById('not-matched').style.display = 'block';
                document.getElementById('warning').innerText = count + ' try left';
            }
            else if(count === 1){
                count--;
                document.getElementById('not-matched').style.display = 'block';
                document.getElementById('not-matched').innerText = "❌ Pin Didn't Match. Secret Door is Permanently Closed for Your 💀";
                document.getElementById('warning').innerText = count + ' try left';
                document.querySelector('.pin-generator button').disabled = true;
                document.querySelector('.pin-generator button').style.backgroundColor = 'grey';
                document.querySelector('.submit-btn').disabled = true;
                document.querySelector('.submit-btn').style.backgroundColor = 'grey';
            }
        }
    }
})