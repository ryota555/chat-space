$(function() {
  $("#user-search-field").on("keyup", fuction() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users/index'
      date: { keyword: input },
      datetype: 'json'
    })

    .done(function(products) {
      $("")
    }
  });
});
