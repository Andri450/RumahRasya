$(document).ready(function(){
    $('#home').click(function(){
        reset_aktif();
        tom();
        $("#tombol").removeClass( "tombol" );
        $("#home").addClass("aktif");
    });
    $('#about').click(function(){
        reset_aktif();
        tom();
        $("#about").removeClass( "tombol" );
        $("#about").addClass("aktif");
    });
    $('#project').click(function(){
        reset_aktif();
        tom();
        $("#project").removeClass( "tombol" );
        $("#project").addClass("aktif");
    });

    function reset_aktif(){
        $("#home").removeClass( "aktif" );
        $("#about").removeClass( "aktif" );
        $("#project").removeClass( "aktif" );
    }
    function tom(){
        $("#home").addClass( "tombol" );
        $("#about").addClass( "tombol" );
        $("#project").addClass( "tombol" );
    }
});