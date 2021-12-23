function insertNumber(number){
var aa =$("#result").val();
$("#result").val(aa + number);
}

function reset(){
  $("#result").val('')
}

function calculate(){
var result =  eval ($("#result").val());
$("#result").val(result);
}
