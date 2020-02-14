(function() {
    'use strict';
    $(() => {
        $('#form-login').submit(function () {
            let self = $(this); // resout probleme de contexte de done
            $('#messages').fadeOut();
            $.ajax({
                url : $(this).attr('action'),
                method : $(this).attr('method'),
                data : $(this).serialize()
            }).done(function (data) {
                if(data.success === true) {
                    window.location.href = '/';
                } else { // data.success === false
                    $('#messages').html(data.message).fadeIn().css("color","red");
                }
            }).fail(function () {
                $('body').html('Une erreur critique est arrivée.');
            });
            return false; // bloque envoi formulaire automatique
        });
    });
}) ();


/*  template html pour projet
    bootstrap
    sb-admin-2
    adminlte
 */