$(document).ready(function(){

$("nav a").click(function(){
$("nav a.current").removeClass("current");
$(this).addClass("current");
});
//generate ipsum, need # pgphs
function generateIpsum(num) {
var whichIpsum = $("nav a.current").attr("data-ipsum");//active ipsum
$("#" + whichIpsum).slideDown("slow"); //use slidedown for animation!
$("#" + whichIpsum).children().slice(0, num).slideDown("slow");//dont forget to slice the children
}
//hide the ipsum when tabbing or clicking anywhere on screen!
function hideIpsum() {
var whichIpsum = $("nav a.current").attr("data-ipsum");
document.getElementById("paragraphs").value = ""; //empty textbox
$(".ipsum").slideUp("slow");//make text dissapear (better to slide up the class, rather than div with .current)
}
$("button").click(function(){
var numberP = document.getElementById("paragraphs").value;
generateIpsum(numberP);
});
$("#paragraphs").focus(function(){
hideIpsum();
});
});


			
			
				
				
			 
			
			


		

			
			
			

			


		
		
		











