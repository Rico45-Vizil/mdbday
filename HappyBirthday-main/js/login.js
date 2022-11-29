$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
		if(userName=="XX" &&  pwd=="happybirthday"){ 
			event.preventDefault();
			$('form').fadeOut(500);
			$('#birthdayh1').html("🎂祝XX生日快乐🎂!");
			$('.wrapper').addClass('form-success');
			requestFullScreen();
			setTimeout(function(){location.href="../index1.html";},2000);
			//auto_link_html("index1.html");
		}
		else{
			alert("不对不对,重新输入!");
		}
});

function requestFullScreen(element) {
	var element=document.documentElement;
	var requestMethod = element.requestFullScreen || //W3C
	element.webkitRequestFullScreen || //Chrome等
	element.mozRequestFullScreen || //FireFox
	element.msRequestFullScreen; //IE11
	if (requestMethod) {
		requestMethod.call(element);
	}
	else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
		 wscript.SendKeys("{F11}");
		}
	}
}
