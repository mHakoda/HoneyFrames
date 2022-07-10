$(document).ready(function() {
  // Capture From with Telegram Bot

  var tToken = btoa("5511925147:AAGcG2_hX1_hdWacymE6uUKAdbxIRj8JrFQ")
  var chatID = btoa("370949601")
  var pathname = window.location.pathname

  $("#submit").on("click", function() {

    if ($("#full-name").val() && $("#phone").val() && $("#checkbox").is(":checked")) {
      $.ajax({
        url: `https://api.telegram.org/bot${atob(tToken)}/sendMessage`,
        method:'POST',
        data:{
          chat_id: atob(chatID),
          parse_mode: "HTML",
          text:
`
<b><a href="https://www.site.com/">Site</a> Product Form</b>

<b>Комплект</b>
${$('.product-active').attr("value").slice(0, 30)}

<b>Прізвище та ім'я</b>
${$('#full-name').val().slice(0, 30)}

<b>Номер телефону</b>
${$('#phone').val().slice(0, 30)}
`
        },
        async: false,
        success: function (data, status) {
          if (pathname.indexOf("/") >= 0 || localStorage.language.toLowerCase() == "ua") {
            $("form").attr('action', '/thanks.html');
          } else {
            $("form").attr('action', '/ru/thanks.html');
          }
          $("form").submit();
        },
        error: function (xhr, desc, err) {
          console.log(xhr)
          console.log(desc)
          console.log(err);
        }
      });
    }
  });
});
