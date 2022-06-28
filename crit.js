function inputNumber(input){
    document.getElementById("calculator").value+=input;
    // console.log(document.getElementById("calculator").value+=input)
}
function result(){
    let input = document.getElementById('calculator').value;
    console.log('input = ', input)
    let result =  eval(input);
    document.getElementById('calculator').value = result;
}
function clears(){
    console.log('goi ham clear')
    document.getElementById('calculator').value = '';
}
function canBacHai(){
    let sqrt = Math.sqrt(+document.getElementById('calculator').value)
    document.getElementById('calculator').value = sqrt;
}