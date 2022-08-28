const buttons=document.querySelectorAll('.tip-btn');
const billInput=document.querySelector('#bill-input');
const peopleNo=document.querySelector('#people');
const fiveBtn=document.querySelector('#five');
const tenBtn=document.querySelector('#ten');
const fifteenBtn=document.querySelector('#fifteen');
const twentyfiveBtn=document.querySelector('#twentyfive');
const fiftyBtn=document.querySelector('#fifty');
const btnReset=document.querySelector('.btn-reset');
const percentButtons=document.querySelectorAll('.btn');

let billval=0;
let peopleval=0;
let customval=0;
let tipval=0;
let total=0;
let paraDiv;
let paraId;

const getcustomInput=()=>{
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    customval=document.querySelector('#custom-input').value/100;
    tipval=customval;
    if(billval>0 && peopleval>0){
        handlefunc();
    }
    
    return parseFloat(customval);
};


const getbillInput=()=>{
    btnReset.classList.remove('grey');
     billval=document.querySelector('#bill-input').value;
    
     if(peopleval>0 && customval>0){
        handlefunc();
     }else if(peopleval>0 && tipval>0){
        handlefunc();
     }
    return parseFloat(billval);
}


const getpeopleInput=()=>{
btnReset.classList.remove('grey');

peopleNo.style.border='2px solid transparent';

 peopleval=document.querySelector('#people').value;
 if(billval>0 && customval>0){
    handlefunc();
 }else if(billval>0 && tipval>0){
    handlefunc();
 }

 return parseInt(peopleval);
};



const handlefunc=(tipResult)=>{
   
let result;
if(!tipResult){
    tipResult=tipval;
}

if((billval>0 && peopleval>0 && tipResult>0)){

result=(billval*tipResult)/peopleval;
total=(billval/peopleval)+result;

document.querySelector('#tip-amount-number').innerHTML=`\$${result.toFixed(2)}`;
document.querySelector('#total-amount-number').innerHTML=`\$${total.toFixed(2)}`;

}else if((billval>0 && peopleval>0 && customval>0)){

    result=(billval*customval)/peopleval;
    document.querySelector('#tip-amount-number').innerHTML=`\$${result.toFixed(2)}`;
    document.querySelector('#total-amount-number').innerHTML=`\$${total.toFixed(2)}`;

}else if(peopleval==0){
   peopleNo.style.borderColor='#BD715C';
     paraDiv=document.createElement('p');
     paraDiv.id='mydiv';
    paraDiv.innerText=`Can't be zero`;
    paraDiv.style.color='#BD715C';
    document.querySelector('#people-para').appendChild(paraDiv);
}
}

   
const fiveBtnClick=fiveBtn.addEventListener('click',function(){
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    fiveBtn.classList.add('active');

    tipval=fiveBtn.value;
    if(billval>0){
        
    handlefunc(fiveBtn.value);
    }
});
const tenBtnClick=tenBtn.addEventListener('click',function(){
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    tenBtn.classList.add('active');

    tipval=tenBtn.value;
    if(billval>0){
    handlefunc(tenBtn.value);
    }
});
const fifteenBtnClick=fifteenBtn.addEventListener('click',function(){
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    fifteenBtn.classList.add('active');

    tipval=fifteenBtn.value;
    if(billval>0){
    handlefunc(fifteenBtn.value);
    }
});
const twentyfiveBtnClick=twentyfiveBtn.addEventListener('click',function(){
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    twentyfiveBtn.classList.add('active');

    tipval=twentyfiveBtn.value;
    if(billval>0){
    handlefunc(twentyfiveBtn.value);
    }
});
const fiftyBtnClick=fiftyBtn.addEventListener('click',function(){
    btnReset.classList.remove('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    fiftyBtn.classList.add('active');

    tipval=fiftyBtn.value;
    if(billval>0){
    handlefunc(fiftyBtn.value);
    }
});


btnReset.addEventListener('click',()=>{
    billval=0;
    peopleval=0;
    customval=0;
    tipval=0;
    total=0;
    billInput.value='';
    document.querySelector('#custom-input').value='';
    peopleNo.value='';
    btnReset.classList.add('grey');
    percentButtons.forEach((btn)=>{
        btn.classList.remove('active');
    });
    document.querySelector('#tip-amount-number').innerHTML=`$0.00`;
    document.querySelector('#total-amount-number').innerHTML=`$0.00`;
});

 

