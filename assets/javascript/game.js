//Run javaScript after document loads
$(document).ready(function(){
    //Global Variables
    var wins = 0;
    var losses = 0;
    //rock jpgs in an array with the source route steming from the HTML file, not the javaScript file.
    var rockImages =["assets/images/rock_1.jpg", "assets/images/rock_2.jpg", "assets/images/rock_3.jpg", "assets/images/rock_4.jpg"]

    //Random Number generation for each different rock image, and create all classes and locations for rock images
    function rockNum(){
        for(var i=0; i<rockImages.length; i++){
            var rock = $("<img>");
            rock.addClass("rock-button rock rock-img");
            rock.attr("src", rockImages[i]);
            rock.atter("data-letter", Math.floor(Math.random() *11) +1);
            $("#rocks").append(rock);
        }
    }

    //On click function
    function onClick(){
        $(".rock-button").on("click", function(){
            // variables
            rockClicked = true;
            var rockValue = ($(this).attr("data-letter"));
            rockValue = parseInt(rockValue);
            counter += rockValue;
            console.log(counter);
            // push to HTML
            $(".guess-user").html("Current points: " + counter);

            // You Win If statement
            if(counter === randNum){
                wins++;
                $(".wins").html("Wins: " + wins);
                // Reset on Win
                $("#rocks").empty();
                rockNum();
                game();
            }else if (counter >= randNum){
                losses++;
                $(".losses").html("Losses: " + losses);
                // Reset on Loss
                $("#rocks").empty();
                rockNum();
                game();
            }
        });
    }
})