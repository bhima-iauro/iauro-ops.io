function getCookies() {
    
    var io_accessToken = getCookie("io_accessToken");
    var io_refreshToken = getCookie("io_refreshToken");
    // let name = cname + "=";
    // let decodedCookie = decodeURIComponent(document.cookie);
    // let ca = decodedCookie.split(';');
    // for(let i = 0; i < ca.length; i++) {
    //   let c = ca[i];
    //   while (c.charAt(0) == ' ') {
    //     c = c.substring(1);
    //   }
    //   if (c.indexOf(name) == 0) {
    //     return c.substring(name.length, c.length);
    //   }
    // }
    if (io_accessToken) {
        // var io_accessToken = getCookie("io_accessToken");
        // var io_refreshToken = getCookie("io_refreshToken");
        return {accessToken : io_accessToken, refreshToken : io_refreshToken}
    }
    return null;
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}