/**
 * 智慧树学习助手
 * @author Jerry <calljerryli@outlook.com>
 * @version 1.4.0
 */

// 任务周期，单位秒
var taskTime = 5;

// 功能列表，不需要的功能直接在这里删掉即可
var features = [
    ClosePopup, // 自动关闭弹窗
    NextLesson, // 自动进入下一节
    SpeedX150,  // 自动 1.5 倍速
    Play,       // 自动播放
    Silent,     // 自动静音
];

var tasksID = new Array();

function ClosePopup() {
    var closeButton = $('.popboxes_close')[0];
    if (closeButton != undefined) {
        closeButton.click();
        console.log('ClosePopup() success');
    }
}

function NextLesson() {
    var progress = $('div.progressbar_box_tip span')[0];
    if (progress.textContent == "本节视频,累计观看时间『100%』") {
        var nextButton = $('.next_lesson_bg')[0];
        nextButton.click();
        console.log("NextLesson() success");
    }
}

function SpeedX150() {
    var speedButton = $('.speedTab15')[0];
    speedButton.click();
}

function Play() {
    var playButton = $('.playButton')[0];
    if (playButton != undefined) {
        playButton.click();
        console.log('Play() success');
    }
}

function Silent() {
    if (!IsSilent()) {
        var volumeButton = $('.volumeIcon')[0];
        volumeButton.click();
        console.log('Silent() success');
    }
}

function IsSilent() {
    return $('.volumeNone').length != 0;
}

function start() {
    for (var i = 0; i < features.length; i++) {
        features[i]();
        var taskID = setInterval(features[i], taskTime * 1000);
        tasksID.push(taskID);
    }
    console.log('start');
}

function stop() {
    for (var i = 0, len = tasksID.length; i < len; i++) {
        clearInterval(tasksID.shift());
        console.log(tasksID);
    }
    console.log('stop');
}

start();
