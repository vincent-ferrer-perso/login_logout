(function() {
    $(() => {
        //https://sokoban.doonoo.fr/

        $.ajax({
            url: 'https://sokoban.doonoo.fr/',
            method: 'get',
            // quand on renvoie donnée data:
            /*
            success: function (data) {},
            error: function() {} // appeler quand retour serveur different de 200 ex:404
             */
        }).done(function (data) { // remplace success  parametre data est la valeur de retour de l'appel
            for (let key in data) {
                $('body').append(
                    $('<div />').append(
                        $('<div />').html(data[key].description),
                        $('<div />').html(data[key].copyright)
                    ).css({
                        'margin': '2px',
                        'padding': '2px',
                        'border': '1px solid blue'
                    }).on('click', function () {
                        $.ajax({
                            url: "https://sokoban.doonoo.fr/levels/" + key,
                            method: 'get'
                        }).done(function (data) {
                            $('body').html('');
                            for (let level in data.levels) {
                                let lev = data.levels[level];
                                $('body').append(
                                    $('<div />').html(lev.id)
                                ).on('click', function () {
                                    $.ajax({
                                        url: "https://sokoban.doonoo.fr/levels/" + key,
                                        method: 'get'
                                    }).done(function (data) {
                                            for (let ligneCells in lev.cells) {
                                                if($(this) === ligneCells.id) {
                                                    $('body').append(
                                                        $('<div />').append(
                                                            $('<pre />').html(lev.cells[ligneCells])
                                                        ))
                                                }
                                            }
                                        }
                                    )
                                })
                            }
                        })
                    })
                );
            }
        }).fail(function () { // remplace error
            $('body').html("Une erreur critique est arrivée ...");
        });
    });
}) ();


/*  Corrrection


    (function() {
    'use strict';
    $(() => {

        $.ajax({
            url: 'https://sokoban.doonoo.fr/',
            method: 'get',
            // data:
        }).done(function (data) {
            for (let key in data) {
                $('body').append(
                    $('<div />').append(
                        $('<div />').html(data[key].description),
                        $('<div />').html(data[key].copyright)
                    ).css({
                        'margin': '2px',
                        'padding': '2px',
                        'border': '1px solid blue'
                    }).on('click', function () {
                        $.ajax({
                            url: "https://sokoban.doonoo.fr/levels/" + key,
                            method: 'get'
                        }).done(function (data) {
                            $('#levels').empty();
                            for (let i in data.levels) {
                                let level = data.levels[i];
                                for (let j in level.cells) {
                                    let line = level.cells[j];
                                    $('#levels').append(
                                        $('<pre />').append(line)
                                    );
                                }
                            }
                            // afficher tous les niveaux qui sont dans data
                        })
                    })
                );
                //console.log(data[key]);
            }
            //
        }).fail(function () {
            $('body').html("Une erreur critique est arrivée..");
        });
    });

}) ();

 */


/* notes pour moi
    une variable dans un fort n'est pas detruite si elle est appele dans un callback exemple : key
 */