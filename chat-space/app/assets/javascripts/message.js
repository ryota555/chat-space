$(function() {
  function buildHTML(comment){
    var html =  `<div class="chat">
                  <div class="chat__name">
                   ${messagese.user.name}
                  </div>
                  <div class="chat__message">
                    ${message.content}
                  </div>
                </div>`
    return html;
  }
  function scroll(){
    $('.chat').animate({scrollTop: $('.chat')[0].scrollHeight},'fast')
  }
  $('.form').on("submit", function(e) {
    e.preventDefault();
    var formDate = new FormDate(this);
    $.ajax({
      type: 'post',
      url: '/messages/create',
      data: formDate,
      dataType: 'json',
      processData: false,
      contentType: false
    });
    .done(function(){
      var html = buildHTML(date);
      $('.chat__message').append(html)
      $('.form__mask').val()
    })
    .fail(function(){
      alert('送信できませんでした')
    })
  });
});
