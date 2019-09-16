/**
 * Created by chonger on 2019/9/15.
 */
$(function(){

    //异形轮播图
    new Swiper('.jxc-banner-issue', {
        speed: 1000,
        loop : true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: {
            clickable :true,
        },
        watchSlidesProgress: true,
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    //console.log(slideProgress);
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 160 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 2) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }
    });

})

var vipSettingVM = new Vue({
    el:"#vip-setting",
    data:{
        //用户信息填写
        VipPlan:{
            "condition":[{
                dataKey:"AAA",
                chooseTitle:"您的职业是",
                chooseCondition:[
                    {
                        label: "职业白领",
                        value:1
                    },{
                        label: "宝妈",
                        value:2
                    },{
                        label: "互联网IT",
                        value:3
                    },{
                        label: "工程师",
                        value:4
                    },{
                        label: "英语等级应考生",
                        value:5
                    },{
                        label: "医生",
                        value:6
                    },{
                        label: "外贸人",
                        value:7
                    },{
                        label: "其他",
                        value:8
                    }]
            },{
                dataKey:"BBB",
                chooseTitle:"请选择学习目标",
                chooseCondition:[
                    {
                        label: "日常口语",
                        value:1
                    },{
                        label: "职场交流",
                        value:2
                    },{
                        label: "个人提升",
                        value:3
                    },{
                        label: "学术研究",
                        value:4
                    },{
                        label: "出国旅游",
                        value:5
                    },{
                        label: "考试考级",
                        value:6
                    },{
                        label: "留学移民",
                        value:7
                    },{
                        label: "辅导孩子",
                        value:8
                    }]
            },{
                dataKey:"CCC",
                chooseTitle:"请选择目前水平",
                chooseCondition:[
                    {
                        label: "零基础",
                        value:1
                    },{
                        label: "简单交流",
                        value:2
                    },{
                        label: "流利表达",
                        value:3
                    },{
                        label: "不清楚",
                        value:4
                    }]
            }],//选择内容
        },
        //用户选择的内容存储
        chooseData:{},
        //用户手机号
        userPhone:null,
        //学好英语
        learnInfo:{
            title:"成人如何学好英语",
            imgInfo:[{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/bubuzheng.jpg"
            },{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/banner.jpg"
            },{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/fangtianxia.jpg"
            },{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/bubuzheng.jpg"
            },{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/banner.jpg"
            },{
                imgUrl:"https://xy.jianxc.com/jxcxyrootFolder/appImg/img/fangtianxia.jpg"
            }]
        },
    },
    computed:{
        title (){
            return title => title + ":"
        }
    },
    created:function(){
        this.addAttrData(this.VipPlan);
    },
    /**
     * 生命周期钩子
     */
    mounted:function(){

    },
    methods:{
        /*
         表单选项填写
         index 当前选项索引
         conditionIndex 当前所在列表索引
         */
        chooseOption:function(index,conditionIndex){
            var chooseData = JSON.parse(JSON.stringify(this.chooseData));
            var condition = this.VipPlan.condition[conditionIndex];
            var key = condition.dataKey;
            var value = condition.chooseCondition[index];
            chooseData[key] = value.value;
            this.chooseData = chooseData;
        },
        //给数据增加自定义属性
        addAttrData:function(){
            this.VipPlan.condition.map((item) => {
                this.chooseData[item.dataKey] = 1;
            })
        },
        //手机号验证
        yanZhengPhone: function() {
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}|(17[0-9]{1})|(19[0-9]{1})))+\d{8})$/;
            var userPhone = $("#userPhone").val();
            //验证手机号
            if (userPhone == "") {
                alert("请填写手机号");
                return false;
            } else if (!myreg.test(userPhone)) {
                alert("请填写正确的手机号");
                return false;
            }
            this.userPhone = userPhone;
            return true;
        },
        //提交用户信息
        sumbitUserInfo:function(){
            if(this.yanZhengPhone()){
                //上传用户选择答案chooseData对象及手机号信息
                console.log(this.chooseData,this.userPhone);
            }
        }
    }
})