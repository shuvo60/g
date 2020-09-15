
var shuvo =confirm("Amar 1st Design ta ki dekh te chan ")
if(" shuvo"){
	alert ("good")}
else{
	alert ("sad ")
}
var count=0;
$().text("strat ply player"); 
$(".box").click( function(){
	count= count+1;
	$(this).text(count);
})