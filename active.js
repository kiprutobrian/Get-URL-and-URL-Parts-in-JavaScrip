function () {
    let path1 = window.location.href
    let path2 = window.location.href.split('/');
    let path3 =  path_2[0]+'//'+ path_2[1]+path_2[2]+'/'+ path_2[3]

    $('nav a').each(function () {
        if (this.href == path_1) {
            $(this).parent().addClass('active')

            if ($(this).parent().closest('.subnav').length > 0) {
                $(this).parent().closest('.subnav').addClass('active')
            }
        } else {
            $(this).parent().removeClass('active')
        }
        if (this.href == path_3) {
            $(this).parent().addClass('active')
        } else {
            $(this).parent().removeClass('active')
        }
    });
};
