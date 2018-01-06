$(function(){
  var Day = new Date();//現在の日付
  var Nowdate = Day.getDay();
  Day.setDate(1);//1日に設定
  var CDate = Day.getDate();
  var cMonth = Day.getMonth();
  var CDay = Day.getDay();
  var CMonth = cMonth+1;//今の月を設定
  var DisplayMonth = CMonth+'月'
  //var firstday = Day-Nowdate

  console.log(Day);
  console.log(CDate);
  console.log(CMonth);
  console.log(CDay);
  console.log(DisplayMonth);
  console.log(Nowdate);
  //console.log(firstday);

  $('#HNowDisplayMonth').html(DisplayMonth);
  $('#INowDisplayMonth').html(DisplayMonth);
  for(var row = 0; row<6; row++){
    for(var column = 0; column<7; column++){
      var Row = row + 1;
      var Column = column + 1;
      var HCell = "C"+Row+Column;
      var ICell = "B"+Row+Column;
      var va = row*7 + Column;
      document.getElementById(HCell).textContent=va;
      document.getElementById(ICell).textContent=va;
    }
  }
})

function openSidebar(){
  $('.filter').show().css({zIndex:5});
  $("#sidebarmainbox").show().animate({left:0},{duration:250});
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
    closeSidebar();
  });
});

$(function(){
  $('.mainpagebutton').click(function(){
    var preId = $("#nowpagename").text();
    var newId = this.id;
    var preBoxId = preId+'mainbox';
    var newBoxId = newId+'mainbox';

    console.log(preBoxId);
    console.log(newBoxId);

    closeSidebar();
    $(document.getElementById(preBoxId)).hide();
    $('#nowpagename').html(newId);
    $(document.getElementById(newBoxId)).show();
  });
});
