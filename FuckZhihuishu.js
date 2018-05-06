// 任务周期，单位秒
const TASK_TIME = 5

// 关闭弹窗
function ClosePopup() {
    var closeButton = $('.popboxes_close')[0]
    if (closeButton != undefined) {
        closeButton.click()
        console.log('ClosePopup() success')
    }
}

// 进入下一节课
function NextLesson() {
    var progress = $('div.progressbar_box_tip span')[0]
    if (progress.textContent == "本节视频,累计观看时间『100%』") {
        var nextButton = $('.next_lesson_bg')[0]
        nextButton.click()
        console.log("NextLesson() success")
    }
}

// 1.5 倍速
function SpeedX150() {
    var speedButton = $('.speedTab15')[0]
    speedButton.click()
}

// 开始任务
function start() {
    ClosePopup()
    NextLesson()
    autoClosePopupTaskID = setInterval(ClosePopup, TASK_TIME * 1000)
    autoNextLessonTaskID = setInterval(NextLesson, TASK_TIME * 1000)
    autoSpeedX150TaskID = setInterval(SpeedX150, TASK_TIME * 1000)
    console.log('start')
}

// 取消任务
function stop() {
    clearInterval(autoClosePopupTaskID)
    clearInterval(autoNextLessonTaskID)
    clearInterval(autoSpeedX150TaskID)
    console.log('stop')
}

start()
