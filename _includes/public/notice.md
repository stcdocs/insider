<script>
var targetDateA = new Date("Jun 7, 2026 00:09:00").getTime();
var targetDate = new Date("Jun 7, 2026 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;
  var distanceA = targetDateA - now;
  var daysAA = Math.floor(distanceA / (1000 * 60 * 60 * 24))+1 ;
  var daysA = Math.floor(distance / (1000 * 60 * 60 * 24)) ;
  var hoursA = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
  var minsA = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) ;
  var secondA = Math.floor((distance % (1000 * 60)) / 1000) +1 ;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))+1;
  document.getElementById("countdown").innerHTML ="距离 2026 高考 " + days + " 天（" + daysA + "天" + hoursA + "小时" + minsA + "分钟" + secondA+ "秒）";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "祝高考顺利！";
  }
}, 1000);
</script>
<blockquote class="note-title"><a id="countdown"></a></blockquote>

{: .reda }
> 选科建议 [点击查看>>](/study-together-docs/docs/notice/32765-选科建议公告.html)

{: .blue-title }
> 置顶二维码
>
> 更新内容：
> - [必修一政治提纲（电子版）](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/29 王浩铭_

