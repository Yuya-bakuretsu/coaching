'use strict'
function main() {
    //値の取得
    try {
        var answer = document.getElementById("answers");
        var response = [];
        var result = document.getElementById("assert");
        for (var i = 0; i < 20; i++) {
            eval("response.push(answer.q" + i + ".value);");
            response[i] = Number(response[i]);
            if (response[i] == 0) {
                throw new Error("エラー")
            }
        }
        console.log(response);
        //点数
        var controller = 11 - response[3] - response[6] - response[16] - response[18] - response[19];
        var promoter = 12 - response[1] - response[5] - response[7] - response[10] - response[13];
        var supporter = 12 - response[2] - response[8] - response[12] - response[15] - response[17];
        var analyser = 13 - response[0] - response[4] - response[9] - response[11] - response[14];

        var correct1 = document.getElementById("result1");
        var correct2 = document.getElementById("result2");
        var correct3 = document.getElementById("result3");
        var correct4 = document.getElementById("result4");

        // var Max = Math.max(correct1, correct2, correct3, correct4);

        correct1.innerHTML = `あなたのコントローラー適性は${controller}点です`
        correct2.innerHTML = `あなたのプロモーター適性は${promoter}点です`
        correct3.innerHTML = `あなたのサポーター適性は${supporter}点です`
        correct4.innerHTML = `あなたのアナライザー適性は${analyser}点です`

        // document.innerHTML = `あなたのタイプは`

    }
    catch (e) {
        alert("未記入の項目があります。記入後にもう一度診断ボタンを押してください。")
    }
}