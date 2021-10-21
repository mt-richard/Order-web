let price1 = document.getElementById('price1').innerHTML;
let price2 = document.getElementById('price2').innerHTML;
let price3 = document.getElementById('price3').innerHTML;
let price4 = document.getElementById('price4').innerHTML;

let buybtn = document.getElementById('buybtn');
let myproduct = document.getElementById('menu');
let resultscomp = document.getElementById('resultscomp');
let resultsiphone = document.getElementById('resultsiphone');
let resultsbags = document.getElementById('resultsbags');
let resultstools = document.getElementById('resultstools');
var quantity1 = document.getElementById('piece1');
var quantity2 = document.getElementById('piece2');
var quantity3 = document.getElementById('piece3');
var quantity4 = document.getElementById('piece4');
let  getqty1 = document.getElementById('getbtn1');
let  getqty2 = document.getElementById('getbtn2');
let  getqty3 = document.getElementById('getbtn3');
let  getqty4 = document.getElementById('getbtn4');
let  getfinal = document.getElementById('getfinal');
let finalresult = document.getElementById('final');
let close = document.getElementById('close');

myproduct.style.display='none';
close.style.display='none';

function openmenu(){
    myproduct.style.display='block';
    buybtn.style.display='none';
}


// function cartforcomputer(){
  getqty1.addEventListener('click', (e) =>{
    e.preventDefault();
    qtycomp.innerText = quantity1.value;
    resultscomp.innerText = quantity1.value  * price1;
  }
);
// }
//function cartforiphone(){
    getqty2.addEventListener('click', (e) =>{
        e.preventDefault();
        qtyiphone.innerText = quantity2.value;
      resultsiphone.innerText = quantity2.value  * price2;
    }
  );
  //}
  //function cartforbags(){
    getqty3.addEventListener('click', (e) =>{
        e.preventDefault();
        qtybags.innerText = quantity3.value;
      resultsbags.innerText = quantity3.value  * price3;
    }
  );
 // }
  //function cartfortools(){
    getqty4.addEventListener('click', (e) =>{
        e.preventDefault();
        qtytools.innerText = quantity4.value;
      resultstools.innerText = quantity4.value  * price4;
    }
  );
  //}
function closem(){
    myproduct.style.display='none';
    buybtn.style.display='block';
    close.style.display='none';
}

 function final(){

    finalresult.innerText = (quantity1.value  * price1)+ (quantity2.value  * price2) + (quantity3.value  * price3) + (quantity4.value  * price4);

  }



