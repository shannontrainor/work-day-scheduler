$(document).readt(function (){              //will allow js to load fully before running


    //Save Button
    $(".saveBtn").on("click", function(){ 
            //get sibling element
        var value = $(this).siblings(".description").val().trim(); 
            //reference attribute associated  
        var time = $(this).parent().attr("id");
            // will save user input to local storage
        localStorage.setItem(time, value);
    });

    







})


