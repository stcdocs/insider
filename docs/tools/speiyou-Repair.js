// ==UserScript==
// @name         教研云解析修复
// @namespace    https://greasyfork.org/zh-CN
// @version      114.514
// @description   教研云解析修复
// @match        https://ziyuanyetnt.jiaoyanyun.com/
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_openInTab
// @downloadURL  https://ghproxy.net/https://raw.githubusercontent.com/liubanlaobanzhang/speiyou-Repair/main/main.js
// @updateURL    https://ghproxy.net/https://raw.githubusercontent.com/liubanlaobanzhang/speiyou-Repair/main/main.js
// ==/UserScript==

(function() {
    'use strict';

    // 定义试卷
    var query = location.search;

    // 这是解析获取POST地址
    var jiexiurl = "https://app-pub.jiaoyanyun.com/console-pub/v1/search/resource";

    console.log("【教研云解析修复】开始运行");
    console.log("【教研云解析修复】目前支持<50题的试卷");


    function doSomething() {

        // 遍历试题找到试题ID并获取解析
        for (var i = 0; i < 80; i++) {
            var element = document.querySelector("#print-body > div:nth-child(" + i + ") > div.print-question.is-default > div > div > div");
            var output = "#print-body > div:nth-child("+i+") > div.print-question.is-default > div > div.talqs > div > div > div > div.talqs_analyze.clearfix > div"
            var outputanswer = "#print-body > div:nth-child("+i+") > div.print-question.is-default > div > div.talqs > div > div > div > div.talqs_answer.clearfix > div"
            // 判断元素是否存在
            if (element) {
                // 获取data-talqs-root的值
                var value = element.getAttribute("data-talqs-root");
                // 判断值是否存在
                if (value) {
                    var data = {
                        "keyword": value,
                        "sources": [6],
                        "orgId": 1,
                        "page": 1,
                        "page_size": 10,
                        "periodId": 3,
                        "subjectId": 4
                    };
                    var post = JSON.stringify(data);
                    console.log("请求解析：" + value)

                    // 方案1：Fetch（返回null，去掉）
                    //fetch("https://app-pub.jiaoyanyun.com/console-pub/v1/search/resource", {method: "POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify(data)})
                    //.then(response => response.json())
                    //.then(data => console.log(data));

                    // 方案2：XHR
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", jiexiurl, false);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onload = function() {
                        // 显示返回的结果中的"data.question.list[0].analysis"的内容
                        // var result = document.createElement("div");
                        // 解析返回的结果为JSON对象
                        var json = JSON.parse(this.responseText);
                        // 获取"data.question.list[0].analysis"的值
                        var answer = json.data.question.list[0].answer[0];
                        var analysis = json.data.question.list[0].analysis[0];
                        // 将"data.question.list[0].analysis"的值转换为HTML;
                        //console.log("输出："+i)
                        var element0 = document.querySelector(output);
                        var element1 = document.querySelector(outputanswer);
                        element0.innerHTML = analysis;
                        element1.innerHTML = answer;
                        MathJax.typeset([element0]);
                        MathJax.typeset([element1]);

                    };
                    xhr.send(post);


                }

            }
        }

    };

    function button(){

        var input = document.createElement("input");

        // 设置 input 元素的 type 属性为 "button"
        input.type = "button";
        // 设置 input 元素的 value 属性为 "点击我"
        input.value = "  点击此处修复解析";
        // 获取您想要插入按钮的元素，这里使用了您提供的 CSS 选择器
        var element223 = document.querySelector("#app > div > div > div > div.print-head > div > div.print-head-left > div.print-version-menu");
        // 将 input 元素作为子元素添加到您选择的元素中
        element223.appendChild(input);
        // 定义一个函数，用于处理按钮的点击事件
        // 给 input 元素绑定一个函数，这里使用了 addEventListener 方法
        input.addEventListener("click", doSomething);
    }

    setTimeout(button, 500);
})();
