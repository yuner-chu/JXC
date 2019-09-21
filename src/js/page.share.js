/**
 * Created by chonger on 2019/9/17.
 */


function yanzhen(){
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
    return true;
}

//表单提交 用户姓名，手机号，地区
function formSubmit(){
    if($("#userName").val()==""){
        alert("请填写姓名");
        return false;
    }else if(!yanzhen()){

    }else if($("#userAddress").val()==""){
        alert("请填写地址");
        return false;
    }else{
        //以上验证都通过就传给后台
        console.log($("#userName").val(),"姓名");
        console.log($("#userPhone").val(),"手机号");
        console.log($("#userAddress").val(),"地址");
    }
}
