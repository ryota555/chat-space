$(function() {
  $("#user-search-field").on("keyup", fuction() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/products/search'
      date: { keyword: input },
      datetype: 'json'
    })
  });
});
