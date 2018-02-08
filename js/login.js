function login(userid,userpw){
  if((userid=="123456")&&(userpw=="test")){
    $("#statusbox").html("Debuck");
    $("#UserStatus").html("Debuck");
    $("#NowStatus").html("login");
    $("#home").show();
    $("#check").show();
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
    $("#UserStatus").html("none");
    $("#home").hide();
    $("#booking").hide();
    $("#check").hide();
    $("#logout").hide();
    $("#login").show();
    $("#logoutmainbox").hide();
    $('#nowpagename').html("login");
    $("#loginmainbox").show();
  });
})
