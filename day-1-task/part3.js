
const tbody=document.querySelector("tbody");
let number=+prompt("enter the number of people");
if(number!==NaN&&number>=0){
  for(let i=0;i<number;i++ ){
    let name=prompt("enter name number:"+(i+1));
    let age=+prompt("enter age number:"+(i+1));
    if(name.length>3&&name.length<10&&age>10&&age<60){
      let tr=document.createElement("tr");
      let tdN=document.createElement("td");
      let tda=document.createElement("td");
      tdN.textContent=name;
      tda.textContent=age;
      tr.appendChild(tdN);
      tr.appendChild(tda);
      tbody.appendChild(tr);
    }
  }
}    
else{
  alert("enter a number more than 0");
}