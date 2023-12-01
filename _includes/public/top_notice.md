<!--12月月考-->
<script>
var targetDateA = new Date("Dec 25, 2023 00:09:00").getTime();
var targetDateAA = new Date("Dec 25, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distanceAA = targetDateAA - now;
  var distanceA = targetDateA - now;
  var daysAA = Math.floor(distanceAA / (1000 * 60 * 60 * 24))+1 ;
  var daysA = Math.floor(distanceA / (1000 * 60 * 60 * 24)) ;
  var hoursA = Math.floor((distanceA % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 24 * daysA;
  var minsA = Math.floor((distanceA % (1000 * 60 * 60)) / (1000 * 60));
  var secondA = Math.floor((distanceA % (1000 * 60)) / 1000);
  var msecondA = Math.floor(distanceA % 1000);
  document.getElementAyId("countdownA").innerHTML ="距离 2023 年 12 月 高一选科指导测试还有 " + daysAA + " 天（" + hoursA + ":" + minsA + ":" + secondA+ ":" + msecondA +"）";
  document.getElementAyId("countdownSideA").innerHTML ="12月月考 | " + daysAA + " 天";
  if (distanceA < 0) {
    clearInterval(x);
    document.getElementAyId("countdownA").innerHTML = "此倒计时已结束，请等待网站管理员进行调整。";
  }
}, 73);
</script>

<!--期末-->
<script>
var targetDateB = new Date("Jan 25, 2024 00:09:00").getTime();
var targetDateBB = new Date("Jan 25, 2024 00:00:00").getTime();
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
  document.getElementById("countdownB").innerHTML ="距离 2024 年 1 月 高一期末考试还有 " + daysBB + " 天（" + hoursB + ":" + minsB + ":" + secondB+ ":" + msecondB +"）";
  document.getElementById("countdownSideB").innerHTML ="期末 | " + daysBB + " 天";
  if (distanceB < 0) {
    clearInterval(x);
    document.getElementById("countdownB").innerHTML = "此倒计时已结束，请等待网站管理员进行调整。";
  }
}, 73);
</script>

<blockquote class="note-title"><a id="countdownA"></a></blockquote>
<blockquote class="note-title"><a id="countdownB"></a></blockquote>

