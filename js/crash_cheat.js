var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '看不见我🙈~看不见我🙈~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });


作者: Hermoso
链接: https://imszz.com/p/1b825486/#%E6%A8%B1%E8%8A%B1%E9%A3%98%E8%90%BD%E8%83%8C%E6%99%AF
来源: hermoso
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。