$( document ).ready(function() {

    $('.nav-what-is').click(function(){
        var aTag = $("a[name='container-what-is']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    })

    $('.nav-solutions').click(function(){
        var aTag = $("a[name='container-problems-solution']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    })

    $('.nav-avisame').click(function(){
        var aTag = $("a[name='email-form']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    })

});