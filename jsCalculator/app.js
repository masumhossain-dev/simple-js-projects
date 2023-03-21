var displayField = document.getElementById('displayField');
const button = (number) =>{
   displayField.value += number;
}
const equal = ()=>{
   const entity = displayField.value
   const calculate = eval(entity);
   displayField.value = calculate;
}
const clr = ()=>{
   displayField.value="";
}