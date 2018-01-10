$(function(){
  var nowstatus = $("#NowStatus").text();

  if(nowstatus == "logout"){
    $("#home").hide();
    $("#booking").hide();
    $("#logout").hide();
    $("#homemainbox").hide();
    $('#nowpagename').html("login");
    $("#loginmainbox").show();
  } else if(nowstatus == "login") {
    $("#login").hide();
    $("#loginmainbox").hide();
  }

  var Day = new Date();//現在の日付
  var Nowdate = Day.getDay();
  Day.setDate(1);//1日に設定
  var year = Day.getFullYear();
  var CDate = Day.getDate();
  var cMonth = Day.getMonth();
  var CDay = Day.getDay();
  var CMonth = cMonth+1;//今の月を設定
  var DisplayMonth = CMonth+'月'
  var ThisYear = year+'年'

  var DisplayYM = ThisYear+DisplayMonth;
  $('#HNowDisplayMonth').html(DisplayYM);
  $('#INowDisplayMonth').html(DisplayYM);
  for(var row = 0; row<6; row++){
    for(var column = 0; column<7; column++){
      var Row = row + 1;
      var Column = column + 1;
      var HCell = "C"+Row+Column;
      var ICell = "B"+Row+Column;
      var va = row*7 + Column-CDay;
      document.getElementById(HCell).textContent=va;
      document.getElementById(ICell).textContent=va;
    }
  }
})

function openSidebar(){
  var nowId = $("#nowpagename").text();
  var nowBoxId = nowId + 'mainbox';
  $(document.getElementById(nowBoxId)).hide();
  $('.filter').show().css({zIndex:5});
  $("#sidebarmainbox").show().animate({left:0},{duration:250});
  $("#MainBox").hide();
}

function closeSidebar(){
  $("#sidebarmainbox").animate({left:-250},{duration:250,complete:function(){
    $("#sidebarmainbox").hide();
    $('.filter').hide();
    }
  });
}

$(function(){
  $("#MenuTrrigerBox").click(function(){
    openSidebar();
  });
});

$(function(){
  $('.filter').click(function(){
    $("#MainBox").show();
    var nowId = $("#nowpagename").text();
    var nowBoxId = nowId + 'mainbox';
    $(document.getElementById(nowBoxId)).show();
    closeSidebar();
  });
});

$(function(){
  $('.mainpagebutton').click(function(){
    $("#MainBox").show();
    var preId = $("#nowpagename").text();
    var newId = this.id;
    var preBoxId = preId+'mainbox';
    var newBoxId = newId+'mainbox';
    closeSidebar();
    $(document.getElementById(preBoxId)).hide();
    $('#nowpagename').html(newId);
    $(document.getElementById(newBoxId)).show();
  });
});

$(function(){
  $('.b-bodybox').click(function(){
    var dayBoxId = this.id;
    var dayValue = $(document.getElementById(dayBoxId)).text();
    var monthValue = $('#INowDisplayMonth').text();
    var DisplayValue = monthValue + dayValue + '日';

    $("#B-CalenderBox").hide();
    $("#PlanImputBox").show();
    $("#DayDisplay").html(DisplayValue);
  });
});

$(function(){
  $("#PlanImputButton").click(function(){
    $("#B-CalenderBox").show();
    $("#PlanImputBox").hide();
    $("#DayDisplay").html("");
    $("#StatusImput").html("<option selected>(業務)</option><option>面談</option><option>TR</option><option>質問対応</option><option>OP</option><option>その他</option><option>×</option>")
    $("#ClassRoomImput").html("<option selected>湊川</option><option>長田</option><option>鈴蘭台</option>")
    $("#TimeImput").html("<option selected>(時間)</option><option>午前</option><option>昼～夕方</option><option>16:00~</option><option>16:30~</option><option>17:00~</option><option>17:30~</option><option>18:00~</option><option>18:30~</option><option>19:00~</option><option>19:30~</option><option>20:00~</option><option>20:30~</option><option>21:00~</option>")
    alert("登録しました");
  });
});

$(function(){
  $("#CloseTrigger").click(function(){
    $("#B-CalenderBox").show();
    $("#PlanImputBox").hide();
    $("#DayDisplay").html("");
  })
})
