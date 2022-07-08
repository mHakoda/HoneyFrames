$(document).ready(function() {
  var language

  var pathname = window.location.pathname

  if (localStorage.language != undefined) {
    if (pathname.indexOf("/") >= 0 && localStorage.language.toLowerCase() == "ua") {

    } else if (pathname.indexOf(localStorage.language.toLowerCase()) <= 0 ) {
      switchLenguage()
    }
  }

  // Language switcher
  $(".language-switcher").change(function() {
    language = $('.language-switcher').val()
    localStorage.language = language;
    switchLenguage()
  })

  // Function to switch lenguage
  function switchLenguage() {
    if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      switch (localStorage.language) {
        default:
        if (pathname.indexOf("ru") >= 0) {
          var newPathname = pathname.replace("/ru/", "/");
          window.location.replace(newPathname);
        }
          break;
        case "RU":
          if (pathname.indexOf("ru") <= 0) {
            var newPathname = pathname.replace("/", "/ru/");
            window.location.replace(newPathname);
          }
          break;
      }
    } else {
      // Sorry! No Web Storage support..
      switch (language) {
        default:
          window.location.replace("/");
          break;
        case "RU":
          window.location.replace("/ru/", "/");
          break;
      }
    }
  }
});
