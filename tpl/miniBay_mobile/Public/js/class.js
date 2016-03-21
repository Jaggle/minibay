function initHeImg() {
    var i = $(".box-warp").width();
    $(".box-warp").css({
        height: i / 2.44 + "px"
    })
}

function productHimg() {
    var i = $(".m-product-header-img").width();
    $(".m-product-header-img img").css({
        height: i / 4.04 + "px"
    })
}

function invsetHimg() {
    var i = $(".box-warp").width();
    $(".box-warp").css({
        height: i / 1.93 + "px"
    })
}

function m_nav_cl() {
    var i = !0;
    $(".m-nav").click(function() {
        $(".m-win-100").removeClass("close-nav"), 1 == i ? ($(".m-win-100").css({
            opacity: "1",
            visibility: "visible"
        }), $("body").css({
            overflow: "hidden"
        }), $(".m-meun").addClass("open"), $(".m-header").addClass("open"), i = !1) : ($(".m-win-100").css({
            opacity: "0",
            visibility: "hidden"
        }), $(".m-win-100").addClass("close-nav"), $("body").css({
            overflow: "auto"
        }), $(".m-meun").removeClass("open"), $(".m-header").removeClass("open"), i = !0)
    })
}

function productsC() {
    $(".products-btn-group li").click(function() {
        $(".products-btn-group li").eq($(this).index()).addClass("Popen").siblings().removeClass("Popen"), $(".ifo").hide().eq($(this).index()).show();
        var i = $(".info-img").eq($(this).index()).attr("data-bg");
        $(".info-img").eq($(this).index()).css({
            background: i
        })
    })
}

function addresImg() {
 	var i = $(".usa").width();
    $(".addres-img").css({
        height: i / 1.62 + "px"
    })
}

function hideArtHeImg() {
    $(window).scroll(function () {
        var sd=$(window).scrollTop();
        if (sd>300) {
            $('.m-logo').hide();
        }else{
            $('.m-logo').show();
        }
    })
}

$('#btn-Evaluated').click(function() {
    var nowTime = new Date().getTime();
    var clickTime = $(this).attr("ctime");
    $('.info').removeClass('shake');
    var url = $(this).attr('data-action');
    var sex = $('.evaluated-sex').val();
    var mobile = $('.evaluated-mobile').val();
    var qq = $('.evaluated-qq').val();
    var email = $('.evaluated-email').val();
    var name = $('.evaluated-name').val();
    if (name == '' || mobile == '') {
        $('.info').addClass('shake');
        alert('姓名/手机号不能为空！');
        return;
    };
    if (clickTime != 'undefined' && (nowTime - clickTime < 4000)) {
        alert('操作过于频繁，稍后再试');
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                mobile: mobile,
                sex: sex,
                name: name,
                email:email,
                qq:qq
            },
            beforeSend: function(){
                $('#btn-Evaluated').html('发送中...');
            },
            success: function(response) {
                var responseObj = response ? JSON.parse(response) : '';
                if (responseObj.success == true) {
                    $('.send-model').removeClass("g-show");
                    $('body').css({'overflow': 'auto'});
                } else {
                    $('.info').addClass('shake');
                    alert(responseObj.msg);
                }
            },
            complete: function(){
                $('#btn-Evaluated').removeClass('open');
                $('#btn-Evaluated').html('提交');
            }
        });
    }
})