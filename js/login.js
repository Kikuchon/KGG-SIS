/*$(function(){
  var nowstatus = $('#NowStatus').text();
  console.log(nowstatus);
  if(nowstatus == "logout"){
    $("#homemainbox").hide();
    $("#loginmainbox").css({display:block});
    $("#home").css({display:none});
    $("#booking").css({display:none});
    $("#logout").css({display:none});
  }
})*/

function login(userid,userpw){
  if((userid=="100145")&&(userpw=="kikutaku1094")){
    console.log("Login is successed");
    $("#statusbox").html("菊池 拓哉");
    $("#NowStatus").html("login");
    /*$("#home").css({display:block});
    $("#booking").css({display:block});
    $("#logout").css({display:block});
    $("#login").css({display:none});*/
  } else{
    console.log("Login is failed");
  }
}

$(function(){
  $("#LoginButton").click(function(){
    var UserID = $('#IdImput').val();
    var UserPW = $('#PwImput').val();
    console.log(UserID);
    console.log(UserPW);
    login(UserID,UserPW);
  });
});

$(function(){
  $("#LogoutButton").click(function(){
    $("#statusbox").html("You must login");
    $("#NowStatus").html("logout");
    console.log("logout");
    alert("Logout");
  });
})
