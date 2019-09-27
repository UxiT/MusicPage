
var song = new Audio();
var fillbar = document.getElementById('fill');
var currentTime = document.getElementById('timer');



function Song(songId){
	var iconId = '#' + event.target.id;
	var PId = '#p'+event.target.id;
	console.log(PId);
	if(song.src === songId){
		togglePlay(iconId, PId);
	}
	else{
		$('.fas').attr('class','fas fa-play play');
		$('p').css('color','white');
		song.src = songId;
		togglePlay(iconId, PId);
	}
}


function togglePlay(id, PId)
{
	if(song.paused){
		icon(id);
		song.volume = 0.6;
		song.play();
		$(PId).css('color','#A328FB')		
	}
	else{
		icon(id);
		song.pause();
		$(PId).css('color','white')
	}
}


function icon(id){
	if($(id).hasClass("fa-pause")){
		$(id).attr('class', "fas fa-play play");
	}
	else if($(id).hasClass("fa-play")){
		$(id).attr('class', "fas fa-pause play");
	}
}


song.addEventListener('timeupdate', function(){
	var position = song.currentTime / song.duration;

	fillbar.style.width = position * 100+'%';

	convertTime(Math.round(song.currentTime));

	if (song.ended) {
		$("fas").attr('class', "fas fa-play play");
	}
});

fillbar.addEventListener('MouseEvent', function(){
	console.log('click');
})

function convertTime(seconds)
{
	var min = Math.floor(seconds/60);
	var sec = seconds%60;

	min = (min<10) ? "0" + min : min;
	sec = (sec<10) ? "0" + sec : sec;

	currentTime.textContent = min+":"+sec;

}

