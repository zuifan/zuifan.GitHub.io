var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = 'ηδΈθ§ζπ~ηδΈθ§ζπ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ΰΉβ’Μγβ’Μ) β§θ’«εη°δΊο½';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });


δ½θ: Hermoso
ιΎζ₯: https://imszz.com/p/1b825486/#%E6%A8%B1%E8%8A%B1%E9%A3%98%E8%90%BD%E8%83%8C%E6%99%AF
ζ₯ζΊ: hermoso
θδ½ζε½δ½θζζγεδΈθ½¬θ½½θ―·θη³»δ½θθ·εΎζζοΌιεδΈθ½¬θ½½θ―·ζ³¨ζεΊε€γ