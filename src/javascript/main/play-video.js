document.addEventListener("DOMContentLoaded", function () {
    VideoShow.init()
});

var VideoShow = {
    init: function () {
        this.playVideo();
    },

    playVideo: function () {
        var playButton = document.querySelector('.js__play');
        playButton.addEventListener('click', function () {
            playButton.parentElement.innerHTML = '<iframe width="1280" height="720" src="https://www.youtube.com/embed/WtulWh_5_X0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        });

    },

};
