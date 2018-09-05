$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/createuser',
        type: 'POST',
        data: $(this).serialize(),

    
        success: function(data){
            console.log('sukces')
        }
    });
    

})

