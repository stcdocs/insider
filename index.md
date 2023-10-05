---
title: "欢迎页"
layout: home
nav_order: 1
---
<script>
// 设置倒计时的目标时间
var targetDate = new Date("Jun 7, 2026 00:09:00").getTime();

// 每秒更新一次倒计时
var x = setInterval(function() {

  // 获取当前时间
  var now = new Date().getTime();
    
  // 计算时间差
  var distance = targetDate - now;
    
  // 计算天、时、分、秒
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  // 显示倒计时结果
  document.getElementById("countdown").innerHTML = days + "天 ";
    
  // 如果倒计时结束，显示提示信息
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "今天高考";
  }
}, 1000);
</script>

<div align="center">
<img src="https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/54/Lectern_JE3_BE2.png">
<h1>市北内卷合作社</h1>
<a>内部官网</a> <a class="label label-green">Beta</a>
</div>

---
## 置顶公告

<blockquote class="note-title"><a>距离 2026 高考</a><a id="countdown"></a></blockquote>

{: .blue-title }
> 置顶二维码
>
> 新增内容：
> - [政治提纲](/study-together-docs/docs/topqr/政治提纲.html) _2023/10/4 王浩铭_

{: .purplea }
> [@一生儿](https://space.bilibili.com/2036187097) 更新生物基础大合集了！[点击查看](/study-together-docs/docs/notice/B站知识区网课.html)

{: .reda }
> (新) 选科变化通知 [点击查看>>](/study-together-docs/docs/notice/2023-9-28-选科变化通知.html)


## 仪表盘

| 服务 | 服务名 | 状态 |
|--|--|--|
|总服务|*Main.Svc*|✅|
| “市北内卷合作社”聊天群|*Chat.Svc*|✅|
|置顶二维码|*TopQR.Svc*|✅|
|合作社主页|*Project.Svc*|[![合作社主页部署](https://github.com/liubanlaobanzhang/study-together-docs/actions/workflows/pages.yml/badge.svg)](https://github.com/liubanlaobanzhang/study-together-docs/actions/workflows/pages.yml)|
