---
title: "欢迎页"
layout: home
nav_order: 1
---

<div align="center">
<img src="https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/54/Lectern_JE3_BE2.png">
<h1>市北内卷合作社</h1>
<a>内部官网</a> <a class="label label-green">Beta</a>
</div>

---
## 置顶公告

<script>
// 设置倒计时的目标时间
var targetDate = new Date("2026-6-7T08:00:00");
// 获取显示倒计时的元素
var countdown = document.getElementById("countdown");
// 定义一个函数，用于更新倒计时
function updateCountdown() {
  // 获取当前时间
  var currentDate = new Date();
  // 计算目标时间和当前时间之间的差值，单位是毫秒
  var diff = targetDate.getTime() - currentDate.getTime();
  // 如果差值在4天内，则正在高考
  if (-354600000 <= diff <= 0) {
    // 设置显示倒计时的元素的内容为"倒计时结束"
    countdown.innerHTML = "祝合作社的各位高考顺利，超常发挥！";
    // 停止执行该函数
    return;
  if (diff <= -354600000) {
    // 设置显示倒计时的元素的内容为"倒计时结束"
    countdown.innerHTML = "欢迎来到市北内卷合作社。高考结束，放松一下吧~！";
    // 停止执行该函数
    return;
  }
  // 将差值转换为天、小时、分钟和秒
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  // 设置显示倒计时的元素的内容为"距离2023年10月31日还有XX天XX小时XX分钟XX秒"
  countdown.innerHTML = "[Beta] 距离 2026 高考 还有" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
}
// 每隔一秒执行一次updateCountdown函数
setInterval(updateCountdown, 1000);
</script>
</head>
<body>
<blockquote class="greena"><p id="countdown"></p></blockquote>




{: .reda }
> (新) 选科变化通知 [点击查看>>](/study-together-docs/docs/notice/2023-9-28-选科变化通知.html)

{: .blue-title }
> 置顶二维码
>
> 新增内容：
> - [高中数学知识思维导图](/study-together-docs/docs/topqr/高中数学知识思维导图.html)
> - [中国历史时间轴](/study-together-docs/docs/topqr/中国历史时间轴.html)


## 仪表盘

| 服务 | 服务名 | 状态 |
|--|--|--|
|总服务|*Main.Svc*|✅|
| “市北内卷合作社”聊天群|*Chat.Svc*|✅|
|置顶二维码|*TopQR.Svc*|✅|
|合作社主页|*Project.Svc*|✅|
