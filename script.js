$(document).readt(function (){              //will allow js to load fully before running


    //Save Button
    $(".saveBtn").on("click", function(){ 
            //get sibling element, trim
        var value = $(this).siblings(".description").val().trim(); 
            //reference attribute associated  
        var time = $(this).parent().attr("id");
            // will save user input to local storage
        localStorage.setItem(time, value);
    });

    // 
    function updateHour () {
        //check current hour
        var currentHour = moment().hours();
        console.log(currentHour);
        $(".time-block").each(function(){
                //turn into an array, will compare to current hour to determine if time is past/present/future
            var blockHour = $(this).attr("id").split("-")[1];
                //parse string & turn into interger
            var newBlockHour = parseInt(blockHour);
                //console.log to check
            console.log(newBlockHour);


            if (newBlockHour < currentHour){
                // if new hour is smaller interger than the current hour, we need to add a class of past
                $(this).addClass("past");
            }
            else if (newBlockHour === currentHour){
                    //if current hour is the same as the new hour, we need to remove the past class so we can add present
                $(this).removeClass("past");
                $(this).addClass("present");
            } 
            else {      //if current hour is not past or present, assign class of future
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    updateHour();       //call function







})


