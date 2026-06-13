const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const specialchars =["%","/","*","-","+"];
let output ="";

const calculator=(btnValue)=>{
   display.focus();
   if(btnValue==="=" && output!==""){
    try{
      output=eval(output.replace("%",'/100'));
    } catch (eror){
        output="error";
    } 
   }else if(btnValue=="AC"){
        output="";
    }else if(btnValue=="DEL"){
        output=output.toString().slice(0, -1);        
    }

    else{
        if(output=== "" && specialchars.includes(btnValue))return;
        output+=btnValue;    
    }
    display.value = output;
};
buttons.forEach((button) =>{
 button.addEventListener("click", (e)=> calculator(e.target.dataset.value ))
});

