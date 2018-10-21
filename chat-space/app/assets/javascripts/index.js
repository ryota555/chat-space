$(fubction(){
  $(function(){
    setInterval(update, 5000);
  });

  function update(){
    var message_id = $('.messages:last').date('id');
    $ajax({
      url :location.href,
      type: 'GET',
      date: {
        message: { id: message_id }
      },
      dateType: 'json'
    })
  }
});
