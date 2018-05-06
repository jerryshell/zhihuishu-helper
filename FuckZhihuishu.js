/**
 * @author Jerry <calljerryli@outlook.com>
 * @description 智慧树学习助手：自动下一节、自动关闭弹窗、自动 1.5 倍速、自动播放、自动静音
 * @version 1.4.0
 */

var taskTime = 5;

var features = [
    ClosePopup,
    NextLesson,
    SpeedX150,
    Play,
    Silent,
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
