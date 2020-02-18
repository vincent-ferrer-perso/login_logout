(function() {
    'use strict';
    $(() => {
        $.ajax({
            url: 'Json/isConnected.php',
            method: 'get'
        }).done(function (data) {
            if (data) {
                /* le user est connecté */
                $('body').append(
                    $('<button />')
                        .html('Déconnexion')
                        .on('click', function () {
                            $.ajax({
                                url: 'Json/logout.php',
                                method: 'get'
                            }).done(function () {
                                window.location.href = '/login.php';
                            });
                        })
                );
            } else {
                /* le user n'est pas connecté */
                window.location.href = '/login.php';
            }
        }).fail(function () {
            $('body').html('Une erreur critique est arrivée.');
        });
    });

}) ();


