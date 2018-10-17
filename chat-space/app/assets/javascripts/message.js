$(function() {
  $('.form').on("click", function() {

    var formDate = new FormDate(this);

    $.ajax({
      type: 'post',
      url: '/messages/create',
      data: formDate,
      dataType: 'json',
      processData: false,
      contentType: false
    });
  });
});
