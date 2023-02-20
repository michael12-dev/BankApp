let access = document.querySelector('.Access');
let diamond = document.querySelector('.Diamond')
let header = document.querySelector('#header');
let psw =  document.querySelector('.psw');
let form = document.querySelector('.form')
let origin = document.querySelector('.origin')
let withdrawal = document.querySelector('.withdrawal')
let withdrew = document.querySelector('.withdraw')
let deposit = document.querySelector('.deposit')
let numb1 = document.querySelector('.numb1');
let numb2 = document.querySelector('.numb2');
let numb3 = document.querySelector('.numb3');
let numb4 = document.querySelector('.numb4');
let conf = document.querySelector('.confirm');
let question = document.querySelector('#question');
let proceed = document.querySelector('.proceed');
let last = document.querySelector('.last');
let remain = document.querySelector('.remain')
let bal = document.querySelector('.bal')

let arr = ['$1000', '$2000', '$5000', '$10000', '$150,000', '$100,000'];
let obj = {
    first: arr[0],
    second: arr[1],
    third: arr[2],
    fourth: arr[3],
}
access.addEventListener('click', e=>{
    e.preventDefault();
    header.style.display = 'none';
    psw.style.display = 'block';
    acc();
    gen();
})
diamond.addEventListener('click', (e=>{
    e.preventDefault();
    header.style.display = 'none';
    psw.style.display = 'block';
    dia();
    gen();
}))
function acc(){
    form.addEventListener('submit', e=>{
        e.preventDefault();
        if (form.number.value !== '1234') {
            statement();
        } else {
            origin.style.display = 'block';
            psw.style.display = 'none';
           
        }
        remain.onclick = func6;
    })
}
function dia(){
    document.getElementById('diamond').style.display = 'block';
    document.getElementById('access').style.display = 'none';
    form.addEventListener('submit', e=>{
        e.preventDefault();
        if (form.number.value !== '0000') {
            statement();
        } else {
            origin.style.display = 'block';
            psw.style.display = 'none';  
        }
         remain.onclick = func7;
    })
}
let bii5 = document.querySelector('#bii5')
function statement(){
    form.innerHTML = `
    <h3 id='incorrect'> Incorrect Pin!</h3>
    <input type="number" name="number" id="number" autocomplete="off">
    <br><br>
    <input type="submit" value="Enter" id="bii1">`;
}
function gen(){
    withdrew.onclick = func;
    numb1.onclick = func1;
    numb2.onclick = func2;
    numb3.onclick = func3;
    numb4.onclick = func4;
    proceed.onclick = proc; 
    home.addEventListener('submit', e=>{
        console.log('no')
    }) ;
}

function func(){
    origin.style.display = 'none';
    withdrawal.style.display = 'block';
}
function update(){
    withdrawal.style.display = 'none';
    conf.style.display = 'block'
}
function func1(){
    update();
    question.innerHTML +=  obj.first;
}
function func2(){
    update();
    question.innerHTML +=  obj.second;
}
function func3(){
    update();
    question.innerHTML +=  obj.third;
}
function func4(){
    update();
    question.innerHTML +=  obj.fourth;
}
function func5(){
    last.style.display = 'block';
    document.getElementById('complete').innerHTML= `
    <p id='para' > Transaction successful! </p>
   `
}
 function func6(){
    origin.style.display = 'none';
    bal.style.display = 'block'
    document.getElementById('bal').innerText = ' Please wait while we fetch your balance... ' 
    setTimeout(()=>{
        document.getElementById('bal').innerText =  `Your Account Balance is `  + arr[4];
      }, 4000)
}
function func7(){
    origin.style.display = 'none';
    bal.style.display = 'block'
    document.getElementById('bal').innerText = ' Please wait while we fetch your balance... ' 
    setTimeout(()=>{
        document.getElementById('bal').innerText =  `Your Account Balance is `  + arr[5];
      }, 4000)
}
function proc(){
    last.style.display = 'block';
    conf.style.display = 'none';
    last.innerHTML = `
    <p id="complete"> Please Wait while your transaction is processing ....  </p>
    <button id="bii2" class="home"><a href="http://webbank-app-f360.netlify.app">Cancel</a> </button>                  
    `
  setTimeout(()=>{
    mis()
  }, 4000)    
}
function mis(){
    last.innerHTML = `
    <p id="complete"> Withdraw successful </p>

        <button id="bii2" class="home"><a href="http://webbank-app-f360.netlify.app">Back</a> </button>
   `
}
//for transfer
let display = document.querySelector('.display')
let xxx = document.querySelector('.xxx');
let latest = document.querySelector('#latest')
deposit.onclick = trans1;
xxx.onclick = x;

function trans1(){
   let transfer = document.querySelector('.transfer')
   origin.style.display = 'none'
   transfer.style.display = 'block'
   let form2 = document.querySelector('.confirm_transfer');
   form2.addEventListener('submit', e=>{
    e.preventDefault();
    sub()
    if (form2.value1.value == '' || form2.value2.value == '' || form2.value3.value == '' ) {
        document.querySelector("#last_tran").textContent = 'Error! Please fill the form'
        xxx.style.display = 'none';
       } else {
        sub()
        document.querySelector("#last_tran").textContent = `Do you wish to transfer $${form2.value3.value} to ${form2.value2.value} (${form2.value1.value}) ` 
    }})
}
function sub(){
    document.querySelector('#last_transfer').style.display = 'block'
    transfer.style.display = 'none'
}
function x(){
    display.style.display = 'block';
    document.querySelector('#last_transfer').style.display = 'none';
    latest.textContent = `Processing...`;
    setTimeout(()=>{
        latest.textContent = 'Transaction Complete!'
      }, 4000)
}


for (let index = 0; index < 5; index++) {
   
    console.log(index);
    
}


