//alert("scripts work"){

function shake(){
    askAQuestion()
   var responce= giveAResponce()
   displayResponse(responce)
}
 
function askAQuestion(){
 
}
 
function giveAResponce() {
var listOfResponces= getListOfResponces()
var resp = pickFromList(listOfResponces)
return resp
}
function getListOfResponces() {
 
}
function getListOfResponces(){
    return ["yes","NO","maybe"]
}
function pickFromList(list){
    var length = list.length
    var rand = Math.random() //between 0 and 1 
    //math.floor(num) deletes decimals
    var choice = Math.floor(length * rand)
    return list[choice]

}
 
 
function displayResponse(aresponse){
    //alert(aresponse)
    document.getElementById("fortune").innerHTML = aresponse
}