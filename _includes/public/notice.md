<script>
var targetDate = new Date("Jun 7, 2026 00:09:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML = days + " 天";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "今天高考";
  }
}, 1000);
</script>
<blockquote class="note-title"><a>距离 2026 高考 </a><a id="countdown"></a></blockquote>

{: .reda }
> 选科建议 [点击查看>>](/study-together-docs/docs/notice/32765-选科建议公告.html)

{: .blue-title }
> 置顶二维码
>
> 更新内容：
> - [必修一政治提纲（电子版）](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/29 王浩铭_

