<script>
var targetDateB = new Date("Jun 7, 2026 00:09:00").getTime();
var targetDateBB = new Date("Jun 7, 2026 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceBB = targetDateBB - now;
  var distanceB = targetDateB - now;
  var daysBB = Math.floor(distanceBB / (1000 * 60 * 60 * 24))+1 ;
  var daysB = Math.floor(distanceB / (1000 * 60 * 60 * 24)) ;
  var hoursB = Math.floor((distanceB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minsB = Math.floor((distanceB % (1000 * 60 * 60)) / (1000 * 60));
  var secondB = Math.floor((distanceB % (1000 * 60)) / 1000);
  var msecondB = Math.floor(distanceB % 1000);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))+1;
  document.getElementById("countdownB").innerHTML ="距离 2026 高考 " + daysBB + " 天（" + daysB + ":" + hoursB + ":" + minsB + ":" + secondB+ ":" + msecondB +"）";
  document.getElementById("countdownSideB").innerHTML = daysBB + " 天";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "祝高考顺利！";
  }
}, 427);
</script>
<blockquote class="note-title"><a id="countdownB"></a></blockquote>

{: .reda }
> 选科建议 [点击查看>>](/study-together-docs/docs/notice/32765-选科建议公告.html)

{: .blue-title }
> 置顶二维码
>
> 更新内容：
> - [必修一政治提纲（电子版）](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/29 王浩铭_

