$(document).ready(function(){
    $('#view').click(function(){
        $.ajax({
            method: "GET",
            url: "fetchData.php",
            success: function(data, status){
                $.each(data, function(index, user){
                    $("#users").append("<tr><td>" + user.id + "</td><td> " + user.name + "</td><td> " + user.email + "</td></tr>");
                });
            },
            error: function(error){
                alert("it doesn't work " + error);
            },
        });
    });
});















