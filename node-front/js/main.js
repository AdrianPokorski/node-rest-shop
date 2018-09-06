$( document ).ready(function() {

let allUsersData = [];

getAllUsers();

function getAllUsers(){
    
    $.ajax({
        url: 'http://localhost:3000/users',
        type: 'GET',
        data: $(this).serialize(),

        success: function(data){
            allUsersData = data;
            render(allUsersData)
        }
    });

}

$('#form').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: 'http://localhost:3000/users/add',
        type: 'POST',
        data: $(this).serialize(),

        success: function(data){
            console.log('dada')
            getAllUsers();
        }
    });
});


function render(param){
    $('.list-group').html("");
    for(var i = 0; i < param.length; i++){
        $('.list-group').append(`<li class="list-group-item">${param[i].firstName}, ${param[i].lastName},${param[i].email} <div data-id="${param[i].id}" class="btn btn-primary delbtn">Usuń</div>  </li>`);
    }
}


$(document).on('click', '.delbtn', function(){
    let id = $(this).data("id");

    $.ajax({
        url: 'http://localhost:3000/users/',
        method: 'DELETE',
        data: {id: id},

        success: function(data){
            console.log('dada')
            getAllUsers();
        }
    });
})




});







