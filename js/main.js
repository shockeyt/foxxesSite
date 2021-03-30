;(function ($) {
    $(document).ready(function() {
        'use strict';
    
        console.log('loading js');
    });
    
    
    $(window).load(function() {
    
        $('.anim-load').addClass('anim-complete');
        
    });

    $(window).on('scroll',function() {

        $('.anim-no-load').each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
            el.addClass('anim-complete'); 
            }
        });

        if ( $( window ).width() > 991 ) {
            $('.anim-left, .anim-right').each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                el.addClass('anim-complete'); 
                }
            });
        }  
        $('.anim-up').each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
            el.addClass('anim-complete'); 
            }
        });
    });

    $.fn.visible = function(partial) {


        var $t        = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);
