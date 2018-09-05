$( document ).ready(function() {

let allUsersData = [];

$.ajax({
    url: 'http://localhost:3000/allusers',
    type: 'GET',
    data: $(this).serialize(),

    success: function(data){
        allUsersData = data;
        render(allUsersData)
    }
});


$('#form').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: 'http://localhost:3000/createuser',
        type: 'POST',
        data: $(this).serialize(),

        success: function(data){
            console.log('sukces');
        }
    });
});


function render(param){
    for(var i = 0; i < param.length; i++){
        $('#usersDB').append(`<ul><li>${param[i].firstName}, ${param[i].lastName},${param[i].email}  </li></ul>`);
    }
}





});







