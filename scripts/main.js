"use strict";!function(){function s(s){var i=1===s.data,t=2===s.data,a=0===s.data;e(i,t,a)}function e(s,e,i){s&&(t.classList.remove("is-paused"),t.classList.toggle("is-playing")),e&&(t.classList.remove("is-playing"),t.classList.toggle("is-paused")),i&&t.classList.remove("is-playing","is-paused")}var i,t=document.getElementById("featured-video"),a=t.clientHeight;window.onYouTubeIframeAPIReady=function(){i=new YT.Player("featured-video",{events:{onStateChange:s}})};new Waypoint({element:t,offset:a/-2,handler:function(s){"down"===s&&t.classList.contains("is-playing")&&t.classList.add("is-sticky"),"up"===s&&t.classList.contains("is-sticky")&&t.classList.remove("is-sticky")}})}();