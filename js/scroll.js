$("body").on("click","nav a",function(){var t=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:t - 40 + 'px'},800),!1});