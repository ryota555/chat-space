$(function() {

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${user.name}
                  </p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                  </a>
                </div>`
    $("#user-search-result").append(html);
  }

  }

  $("#user-search-field").on("keyup", fuction() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users/index'
      date: { keyword: input },
      datetype: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !==0) {
        users.forEach(function(user){
        appendUser(user);
        });
      }
      else{
        appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function(user) {
      alert('検索に失敗しました');
    })
  });
});
