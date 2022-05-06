// function toggleSound() {
//             var music = document.querySelector('.song-audio-autoplay');//获取ID  
//                 console.log(music);
//                 console.log(music.paused);
//             if (music.paused) { //判读是否播放  
//                 music.paused=false;
//                 music.play(); //没有就播放 
//                 }         
//         }

// setInterval("toggleSound()",10);




window.addEventListener("load", () => {
    new Container(config.wish, config.time);
});

function Container(wish, time) {
    this.passedSeconds = 0;
    this.finalText = wish;
    this.beginDate = time;

    document.querySelector('.pass-time .finalText').innerHTML = this.finalText;
    setInterval(() => {
        this.passedSeconds = Math.ceil((+ new Date() - new Date(this.beginDate).getTime()) / 1000);

        let list = ['days', 'hours', 'minutes', 'seconds'];

        list.forEach(item => {
            document.querySelector(`.pass-time .${item}`).innerHTML = this[item]();
        })
    }, 500);
}

Container.prototype = {
    

    beginDate() {
        return this.time;
    },
    days: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / (3600 * 24));
    },
    hours: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 3600) % 24;
    },
    minutes: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 60) % 60;
    },
    seconds: function () {
        if (this.passedSeconds === 0) return "";
        return this.passedSeconds % 60;
    },
};
