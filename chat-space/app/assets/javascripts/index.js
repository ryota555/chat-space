$(fubction(){
  function buildHTML(message) {
    var html = `<div class="chat">
                  <div class="chat__name">
                   ${messagese.user.name}
                  </div>
                  <div class="chat__message">
                    ${message.content}
                  </div>
                </div>`
    return html;
  }

  $(function(){
    setInterval(update, 5000);
  });

  function update(){
    if($('.messages')[0]){
      var message_id = $('.messages:last').date('id');
    }else{
      var message_id = 0
    }
    $ajax({
      url :location.href,
      type: 'GET',
      date: {
        message: { id: message_id }
      },
      dateType: 'json'
    })
    .always(function(data){
      $.each(date, function(i, data){
        buildHTML(data);
      });
    });
  }
});
