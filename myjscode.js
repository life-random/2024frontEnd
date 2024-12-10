$(Document).ready(function(){
    $("#btnHide").click(function(){
        // $("h2").hide(300);
        $("h2").fadeOut(300);
    })

    $("#btnShow").click(function(){
        // $("h2").show(300);
        $("h2").fadeIn(300)
    })

    $("#btnToggle").click(function(){
        // $("h2").toggle(100);
        $("h2").fadeToggle(100);
    })

    $("h2").click(function(){
        // $(this).fadeOut(500);
        $(this).fadeTo(500, 0.5, function(){
            $(this).fadeTo(500,1);
        });
    })
})