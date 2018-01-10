function login(userid,userpw){
  if((userid=="100145")&&(userpw=="kikutaku1094")){
    $("#statusbox").html("菊池 拓哉");
    $("#NowStatus").html("login");
    alert("Login is successed(100145).");
    $("#home").show();
    $("#booking").show();
    $("#logout").show();
    $("#login").hide();
    $("#loginmainbox").hide();
    $('#nowpagename').html("home");
    $("#homemainbox").show();
    $("#IdImput").val("");
    $("#PwImput").val("");
  } else{
    alert("Login is failed");
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
    alert("Logout");
    $("#home").hide();
    $("#booking").hide();
    $("#logout").hide();
    $("#login").show();
    $("#logoutmainbox").hide();
    $('#nowpagename').html("login");
    $("#loginmainbox").show();
  });
})
