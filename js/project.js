$(document).ready(function(){

    $("nav a").click(function(){
        $("nav a.current").removeClass("current");
        $(this).addClass("current");

        // var paragraphNum;
        // if (document.getElementById("paragraphs").value != "") {
        //     paragraphNum = document.getElementById("paragraphs").value = "";
        // } else {
        //     paragraphNum = 3;
        // }
        // What's below is shorthand for what is commented out above.
        // It is called a ternary operator and is one of my favorite things!
        var paragraphNum = document.getElementById("paragraphs").value != ""
            ? document.getElementById("paragraphs").value != "" : 3;

        generateIpsum(paragraphNum);
    });

    //generate ipsum, need # pgphs
    function generateIpsum(num) {
        var whichIpsum = $("nav a.current").attr("data-ipsum");//active ipsum
        //dont forget to slice the children
        $("#" + whichIpsum).children().slice(0, num).show(0);
        //use slidedown for animation!
        $("#" + whichIpsum).slideDown("slow");
    }

    //hide the ipsum when tabbing or clicking anywhere on screen!
    function hideIpsum() {
        var whichIpsum = $("nav a.current").attr("data-ipsum");
        document.getElementById("paragraphs").value = ""; //empty textbox
        //make text dissapear (better to slide up the class, rather than div with .current)
        $(".ipsum").slideUp("slow", function() {
            // Use the callback function to make this
            // happen when animation is complete.
            $(this).find('p').hide();
        });
    }

    $("button").click(function(){
        var numberP = document.getElementById("paragraphs").value;
        generateIpsum(numberP);
    });

    $("#paragraphs").focus(function(){
        hideIpsum();
    });
});
