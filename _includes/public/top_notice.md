<script>
var targetDateA = new Date("Nov 16, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceA = targetDateA - now;
  var daysA = Math.floor(distanceA / (1000 * 60 * 60 * 24));
  document.getElementById("countdowna").innerHTML = "距离 2023 高一上期中检测 还有 " + daysA + " 天";
  if (distanceA < 0) {
    clearInterval(x);
    document.getElementById("countdowna").innerHTML = daysA + "2023 高一上期中检测 就是今天";
  }
}, 1000);
</script>

<blockquote class="greena"><a>市北内卷合作社正在进行变动，部分服务可能不稳定。| </a><a href="https://liubanlaobanzhang.github.io/study-together-docs/docs/notice/32766-合作社改造3.html">更多信息</a></blockquote>
<blockquote class="reda"><a id="countdowna"></a><a> | </a><a href="/study-together-docs/docs/notice/2023-10-14-2023期中省联考通知.html"> 更多信息 ></a></blockquote>
