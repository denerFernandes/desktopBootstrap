 var prevHeight = $('.window').height();
    $('.window').attrchange({
        callback: function (e) {
            var curHeight = $(this).height();            
            if (prevHeight !== curHeight) {
                prevHeight = curHeight;
            }            
        }
    }).resizable();