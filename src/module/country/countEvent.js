
// 统计脚本
// recordTitle 标题 recordEvent 事件 userType 类型 userId 用户ID recordTime 时间（实时获取）
// 获取对应的值，赋值给对应的关键字，然后发送ajax请求。如果成功则提示write success


//******详情页面统计函数*****//

    function countAll(recordEvent) {
        var recordTitle = $('#name_ch').html(); //获取记录标题
        // 从localstorage获取用户信息,ID,用户类型
        var user = JSON.parse(window.localStorage.getItem("user_message"));
        if(user){
            var userId = user['userId'],userType = user['userType'];
        }else{
            var userId = '000000',userType = '体验用户';
        }
        var upTime = $('#up_Time').html();   //获取上线时间
        var referrerDate = $('#referrerDate').html(); //上线时间戳
        var recordPrice = $("#kacha_price").html(); //获取价格
        var detailName = $('.name').html(); //获取发布人
        var adId = $('#rcmdwine_Id').html(); //获取商品ID
        var wineId = $('#wineId').html(); //获取商品ID

        var outProductId = $('#outProductId').html(); //获取商品ID
        var recordPlaform = $('#kacha_platform').html(); //获取发布平台
        var recordMsg = {"recordTitle":recordTitle,"recordEvent":recordEvent,"userType":userType,"userId":userId,"upTime":upTime,"recordLink":window.location.href,"recordPrice":recordPrice,"detailName":detailName,"adId":adId,"wineId":wineId,"outProductId":outProductId,"recordPlaform":recordPlaform,"referrerDate":referrerDate};
        var recordMsgJson = JSON.stringify(recordMsg);
        var recordData = {json_data:recordMsgJson}
        // console.log(recordMsg);
        $.ajax({
            url: 'api/record.php?'+Math.random(10000),
            type: 'post',
            dataType: 'json',
            data:recordData,
            success:function(data){
                console.log(data);
            },
            error:function(err) {
                console.log(err);
            },
        });

    }

    function countIndex(recordEvent,recordTitle) {
        // 从localstorage获取用户信息
        var user = JSON.parse(window.localStorage.getItem("user_message"));
        if(user){
            var userId = user['userId'],userType = user['userType'];
        }else{
            var userId = '000000',userType = '体验用户';
        }
        var recordMsg = {"recordTitle":recordTitle,"recordEvent":recordEvent,"userType":userType,"userId":userId,"recordLink":window.location.href};
        var recordMsgJson = JSON.stringify(recordMsg);
        var recordData = {json_data:recordMsgJson}
        // console.log(recordMsg);
        $.ajax({
            url: 'api/record.php?'+Math.random(10000),
            type: 'post',
            dataType: 'json',
            data:recordData,
            success:function(data){
                console.log(data);
            },
            error:function(err) {
                console.log(err);
            },
        });

    }
// *****酒款详情统计*****//

   /* //统计直达链接
    $(".dir_link").click(function(event) {
        countAll('clickbuy');
    });
    //统计酒款酒款信息
    $("#Info").click(function(event) {
        countAll('clickwineDetail');
    });
    //点击分享
    $("#Share").click(function(event) {
        countAll('share');
    });
    //点值
    $(".upThumb").click(function(event) {
        countAll('worth');
    });
    //点不值
     $(".downThumb").click(function(event) {
        countAll('noworth');
    });
    //详情热门推荐more按钮
    $(".dhot_more").click(function(event){
        countAll('detailhot','详情页热门推荐更多按钮入口')
    });

    //详情链接红包
    $(".redpacket_detail").click(function(event){
        countAll('redpacket_detail','酒款详情红包浮标')
    });

    //首页红包浮标
    $(".redpacket_index").click(function(event){
        countIndex('redpacket_index','首页红包浮标')
    });

// *****咔嚓首页统计***** //

    //统计首页每日上新more按钮
    $(".new_more").click(function(event){
        countIndex('indexnew','首页每日上新更多按钮入口')
    });
    //统计首页热门推荐more按钮
    $(".ihot_more").click(function(event){
        countIndex('indexhot','首页热门推荐更多按钮入口')
    });

    //首页今日醉文入口
    $(".today_article").click(function(event){
        countIndex('todayarticle','首页今日醉文入口')
    });
    //首页咔嚓头条入口
    $(".article_title").click(function(event){
        countIndex('todayline','首页咔嚓头条入口')
    });
    //首页配餐找酒入口
    $(".left_ad").click(function(event){
        countIndex('searchwine','首页配餐找酒入口')
    });*/



// 访问咔嚓频道首页统计调用函数
    /*function recordIndex(str){
        strs = str.split("|");
        // 获取用户Id
        var userId = strs[0];
        // 获取用户类型
        var kachaBeta = strs[2];
        //统计detail浏览量
        if (kachaBeta == "0") {
            var userType = '注册用户';
        } else{
            var userType = '体验用户';
        };
        // 将用户ID和用户类型传到localStorage
        var str = {"userId":userId,"userType":userType};
        window.localStorage.setItem('user_message',JSON.stringify(str));
        // 统计APP详情浏览量
        // app打开首页
        var recordMsg = {"recordTitle":'访问咔嚓频道首页',"recordEvent":'glancekacha',"userType":userType,"userId":userId,"recordLink":window.location.href};
        var recordMsgJson = JSON.stringify(recordMsg);
        var recordData = {json_data:recordMsgJson};
        console.log(recordData);
        $.ajax({
            url: 'api/record.php?'+Math.random(10000),
            type: 'post',
            dataType: 'json',
            data:recordData,
            success:function(data){
                console.log(data);
            },
            error:function(err) {
                console.log(err);
            },
        });
    }*/