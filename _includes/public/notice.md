<script>
var targetDate = new Date("Jun 7, 2026 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))+1;
  document.getElementById("countdown").innerHTML ="距离 2026 高考 " + days + " 天";
  if (distance < 0) {
    if (distance > -345600000)
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "稳定心态，认真答卷。祝各位社员高考顺利！";
    else
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "高考结束，祝成功！";
  }
}, 1000);
</script>
<blockquote class="note-title"><a></a><a id="countdown"></a></blockquote>

{: .reda }
> 选科建议 [点击查看>>](/study-together-docs/docs/notice/32765-选科建议公告.html)

{: .blue-title }
> 置顶二维码
>
> 更新内容：
> - [必修一政治提纲（电子版）](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/29 王浩铭_

