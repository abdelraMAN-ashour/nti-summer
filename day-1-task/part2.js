let val=prompt("enter your date of birth in format (DD-MM-YYYY)");
    let rg=/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if(val.length==10&&rg.test(val)){
      alert(val.split("-").join("/"));
    }
    else alert("wrong date format");