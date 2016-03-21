var start_push = true;

function linkAnchor(dom, time) {
    $(dom).each(function(i) {
        var index = $(this).attr('id');
        $(dom).first().addClass('j-active');
        $(dom).click(function() {
            $(this).addClass('j-active').siblings().removeClass('j-active');
        })
        if (i == 0) {
            $(dom).eq(i).click(function() {
                $("html,body").stop().animate({
                    scrollTop: 0,
                }, time);
            });
        } else {
            $(dom).eq(i).click(function() {
                var cla = '.' + index;
                var he = $(cla).height();
                var sum = 269;
                var goTo = $(cla).prevAll().each(function() {
                    sum += $(this).height();
                });
                $("html,body").stop().animate({
                    scrollTop: sum,
                }, time);
            });
        }
    });
}
(function($) {
    var defaults = {
        imgs: '.imgs',
        img: '.img',
        txts: '.txts',
        arrows: '.arrows',
    };

    $.fn.lunbo = function(options) {
        var opt = $.extend({}, defaults, options);
        return this.each(function(index, el) {
            var _this = $(this);
            var _imgs = _this.find(opt.imgs);
            var _txts = _this.find(opt.txts);
            var _length = _imgs.find(opt.img).length;
            var _imgWidth = _imgs.width();
            var _txtWidth = _txts.width();
            var _index = 0;
            _imgs.width(_imgWidth * _length);
            _txts.width(_txtWidth * _length);
            _this.find(opt.arrows).on('click', '.prew', function() {
                --_index;
                if (_index < 0) {
                    _index = _length - 1;
                }
                goTo(_index);
            }).on('click', '.next', function() {
                ++_index;
                if (_index > (_length - 1)) {
                    _index = 0;
                }
                goTo(_index);
            });

            function goTo(index) {
                _imgs.stop().animate({
                    left: -(index * _imgWidth)
                }, 600);
                _txts.stop().animate({
                    left: -(index * _txtWidth)
                }, 001);
            }
        });
    }
})(jQuery);
