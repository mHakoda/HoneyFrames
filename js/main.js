$(document).ready(function() {
  // Product selection
  $(".product-btn").click(function() {
    $(".product-btn").removeClass("product-active");
    $(this).addClass("product-active");
    var val = $(this).attr("value");
  });
})
