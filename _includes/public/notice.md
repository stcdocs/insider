<script>
var targetDateB = new Date("Jun 7, 2026 00:09:00").getTime();
var targetDateBB = new Date("Jun 7, 2026 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceBB = targetDateBB - now;
  var distanceB = targetDateB - now;
  var daysBB = Math.floor(distanceBB / (1000 * 60 * 60 * 24))+1 ;
  var daysB = Math.floor(distanceB / (1000 * 60 * 60 * 24)) ;
  var hoursB = Math.floor((distanceB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 24 * daysB;
  var minsB = Math.floor((distanceB % (1000 * 60 * 60)) / (1000 * 60));
  var secondB = Math.floor((distanceB % (1000 * 60)) / 1000);
  var msecondB = Math.floor(distanceB % 1000);
  document.getElementById("countdownB").innerHTML ="距离 2026 高考 " + daysBB + " 天（" + hoursB + ":" + minsB + ":" + secondB+ ":" + msecondB +"）";
  document.getElementById("countdownSideB").innerHTML = daysBB + " 天";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownB").innerHTML = "祝高考顺利！";
  }
}, 207);
</script>

<blockquote class="note-title"><a id="countdownB"></a></blockquote>

{: .reda }
> 选科建议 [点击查看>>](/study-together-docs/docs/notice/32765-选科建议公告.html)

{: .blue-title }
> 公告（预发布）
>
> [合作社部分服务预停运公告](/study-together-docs/docs/notice/-1-Pre-%E5%90%88%E4%BD%9C%E7%A4%BE%E9%83%A8%E5%88%86%E6%9C%8D%E5%8A%A1%E9%A2%84%E5%81%9C%E8%BF%90%E5%85%AC%E5%91%8A.html)

