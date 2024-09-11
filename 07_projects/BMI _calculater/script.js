const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid Weight";
    }
    else{
        const bmi = ((weight / (height*height))*10000).toFixed(2);
        // show the result
        // result.innerHTML = '<span>`${bmi}`</span>'
        if (bmi<18.6) {
             result.innerHTML = `<span>${bmi}<br><h3>you are under weight</h3></span>`
        } 
        else if(18.6<= bmi >=24.9) {
            result.innerHTML = `<span>${bmi}<br><h3>you are in normal range</h3></span>`  
        }
        else{
             result.innerHTML = `<span>${bmi}<br><h3>you are Overweight</h3></span>`
        }
    }
});