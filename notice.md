## 公告

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

{: .blue-title }
> 置顶二维码
>
> 新增内容：
> - [政治提纲](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/4 王浩铭_

{: .purplea }
> [@一生儿](https://space.bilibili.com/2036187097) 更新生物基础大合集了！[点击查看](/study-together-docs/docs/notice/B站知识区网课.html)

{: .reda }
> (新) 选科变化通知 [点击查看>>](/study-together-docs/docs/notice/2023-9-28-选科变化通知.html)
