let calculatorEl=document.getElementById("output");
function display(num){
    calculatorEl.value+=num;

}
function calculate(){
    try{
        calculatorEl.value=eval(calculatorEl.value);
    }
    catch (error){
        alert("invalid")

    }

}
function Clear(){
    calculatorEl.value="";

}
