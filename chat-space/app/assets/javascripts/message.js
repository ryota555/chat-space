$(function() {
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
  });
});
