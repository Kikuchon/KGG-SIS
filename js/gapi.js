// API設定・起動認証
var CLIENT_ID = '*****';
var API_ID = '*****';
var SCOPES = ["*****"];

function autoAuth() {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: true
    }, authResult);
}

// 手動認証
function startAuth() {
  gapi.auth.authorize({
    client_id: CLIENT_ID,
    scope: SCOPES,
    immediate: false
  }, authResult);
  return false;
}

function authResult(result) {
  if (result && !result.error) {
    // 認証成功時
    startRequest();
  }
  else {
    // 認証失敗 or 未認証時
  }
}

function request(func,param,callback) {
  var request = {
    function: func,
    parameters: param
  };

/*  var op = gapi.client.request({
    root: 'https://script.googleapis.com',
    path: 'v1/scripts/' + API_ID + ':run',
    method: 'POST',
    body: request
  });*/

  /*op.execute(callback*//*function(resp) {
    if(resp.error) {
      // 実行エラー時
      appendPre(JSON.stringify(resp, null, 2));
    }
    else {
      // 実行成功時 (返り値: resp.response.result)
    }
  });*/
}
