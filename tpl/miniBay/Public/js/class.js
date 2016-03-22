var Maksheight = $(window).height();
$('.mask-inner-nav').css({
    height: Maksheight,
    top: -Maksheight,
})

var a = 0;
$('.inner-left-meun a').click(function() {
    if (a == 0) {
        $('.mask-inner-nav').animate({
            top: 0
        }, "fast");
        a = 1;
    } else {
        $('.mask-inner-nav').animate({
            top: -Maksheight
        }, "fast");
        a = 0;
    };
})
var height = $(window).height();
$('.send-box').css({
    "top": '29px'
})
$('#send').click(function() {
    var model = $('.send-model');
    $('body').css({'overflow': 'hidden'});
    model.addClass("g-show")
    $('.send-box').addClass('fadeInDown');
})
$('.model-close').click(function () {
    $('.send-model').removeClass("g-show");
    $('body').css({'overflow': 'auto'});
})

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
        $('.info').html('姓名/手机号不能为空！');
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
                    $('.info').html(responseObj.msg);
                }
            },
            complete: function(){
                $('#btn-Evaluated').removeClass('open');
                $('#btn-Evaluated').html('提交');
            }
        });
    }
})

function scrTop (oo) {
    if (oo == null) {
        $(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (sd > 320) {
                $('.g-media-nav').css({
                    'position': 'fixed',
                    "top": '0px'
                })
            } else {
                $('.g-media-nav').css({
                    'position': 'relative',
                })
                $('.g-media-content').css({
                    "top": '0px',
                })
            };
        });
    }else{
        return;
    }
}

function liuxue (dom,active) {
    $(''+dom+''+' .policy-anli-ltems li').eq(0).addClass(active);
    var url = $('#action').val();
    var firstId = $(''+dom+''+' .policy-anli-ltems li').eq(0).attr('data-id');
    var firstActive = url+'/id/'+firstId+'/';
    //$.ajax({
    //    type: "GET",
    //    url: firstActive,
    //    cache: false,
    //    beforeSend: function(){
    //        $('.policy-anli-ltems.ltems2 .desc').empty();
    //        $(''+dom+''+' .loader').show();
    //    },
    //    success:function(data) {
    //        var jsonObj = eval("("+data+")");
    //        $(''+dom+''+' .policy-anli-ltems.ltems2 .title').html(jsonObj['post_title']);
    //        $(''+dom+''+' .policy-anli-ltems.ltems2 .desc').html(jsonObj['post_content']);
    //    },
    //    complete: function(){
    //        $(''+dom+''+' .loader').hide();
    //    }
    //});
    var url = $('#action').val();
    $(''+dom+''+' .policy-anli-ltems li').click(function () {
        $(this).addClass(active).siblings().removeClass(active);
        var id = $(this).attr('data-id');
        var action = url+'/id/'+id+'/';
        //$.ajax({
        //    type: "GET",
        //    url: action,
        //    cache: false,
        //    beforeSend: function(){
        //        $('.policy-anli-ltems.ltems2 .desc').empty();
        //        $(''+dom+''+' .loader').show();
        //    },
        //    success:function(data) {
        //        var jsonObj = eval("("+data+")");
        //        $(''+dom+''+' .policy-anli-ltems.ltems2 .title').html(jsonObj['post_title']);
        //        $(''+dom+''+' .policy-anli-ltems.ltems2 .desc').html(jsonObj['post_content']);
        //    },
        //    complete: function(){
        //        $(''+dom+''+' .loader').hide();
        //    }
        //});
    })
}

function reselect() {
    var Lock=true;
    $(".re-me").click(function () {
        if (Lock==true) {
            $(".re-me span").removeClass('re-me-img');
            $('#reme_select').val(0);
            Lock=false;
        }else{
            $(".re-me span").addClass('re-me-img');
            $('#reme_select').val(1);
            Lock=true;
        };
    })
}

function status(data,t) {
    if (data.status == 0) {
        $('#ajaxInfo').addClass('shake');
        $('#ajaxInfo').text(data.info);
    }else if(data.status == 1){
        $('#ajaxInfo').text(data.info+t+'s后跳转...');
        setTimeout(function() {
            var href = location.host;
            window.location.href = data.url;
        },t+'000')
    }
}
// mobiel send code

function SetRemainTime() {
    if (curCount == 1) {                
        window.clearInterval(InterValObj);
        $("#btnSendCode").removeAttr("disabled");
        $("#btnSendCode").val("重新发送验证码");
    }
    else {
        curCount--;
        $("#btnSendCode").val(curCount + "s");
    }
}


function initHeImg() {
    var width = $('.box-warp').width();
    $('.box-warp').css({
        height:width/2.44+'px'
    })
}

