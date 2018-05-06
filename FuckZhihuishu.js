/**
 * @author Jerry <calljerryli@outlook.com>
 * @description 智慧树学习助手：自动下一节、自动关闭弹窗、自动 1.5 倍速、自动播放、自动静音
 * @version 1.3.0
 */

var taskTime = 5;

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
    if(!IsSilent()) {
        var volumeButton = $('.volumeIcon')[0];
        volumeButton.click();
    }
}

function IsSilent() {
    return $('.volumeNone').length != 0;
}

function start() {
    ClosePopup();
    NextLesson();
    SpeedX150();
    Play();
    Silent();
    autoClosePopupTaskID = setInterval(ClosePopup, taskTime * 1000);
    autoNextLessonTaskID = setInterval(NextLesson, taskTime * 1000);
    autoSpeedX150TaskID = setInterval(SpeedX150, taskTime * 1000);
    autoPlayTaskID = setInterval(Play, taskTime * 1000);
    aotuSilentTaskID = setInterval(Silent, taskTime * 1000);
    console.log('start');
}

function stop() {
    clearInterval(autoClosePopupTaskID);
    clearInterval(autoNextLessonTaskID);
    clearInterval(autoSpeedX150TaskID);
    clearInterval(autoPlayTaskID);
    clearInterval(aotuSilentTaskID);
    console.log('stop');
}

start();
