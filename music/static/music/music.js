
var song = new Audio();
var fillbar = document.getElementById('fill');
var currentTime = document.getElementById('timer');
var timebar = document.getElementById('timebar');
var slider = document.getElementById('volRange');


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
	song.volume = volumeChange(slider);	
}

function togglePlay(id, PId)
{
	if(song.paused){
		icon(id);
		song.play();
		$(PId).css('color','#A328FB')		
	}
	else{
		icon(id);
		song.pause();
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

slider.oninput = function(){
	song.volume = slider.value/100; //volume change
}

function volumeChange(slider)
{
	song.volume = slider.value/100;
	return(song.volume);
}
	


song.addEventListener('timeupdate', function(){

	let position = song.currentTime / song.duration;

	fillbar.style.width = position * 100+'%';

	convertTime(Math.round(song.currentTime));

	if (song.ended) {
		$(".fas").attr('class', "fas fa-play play");
	}
});


function convertTime(seconds)
{
	var min = Math.floor(seconds/60);
	var sec = seconds%60;

	min = (min<10) ? "0" + min : min;
	sec = (sec<10) ? "0" + sec : sec;

	currentTime.textContent = min+":"+sec;

}

function getP(event){
	let p = (event.clientX - timebar.offsetLeft)/timebar.clientWidth;
	return p;
}

let mouseDown = false;

timebar.addEventListener('mousedown', function(event){
	let p = getP(event);
	console.log(p);
	fillbar.style.width = p*100 + '%';
	mouseDown = !mouseDown;
});

window.addEventListener('mousemove', function(event){
	if(!mouseDown) return;

	let p = getP(event);
	fillbar.style.width = p*100+'%';
});

window.addEventListener('mouseup', function(event){
	if(!mouseDown) return;

	mouseDown = false;

	let p = getP(event);
	fillbar.style.width = p*100 + '%';

	song.currentTime = p*song.duration;
});

song.oncanplay = function(){
	timebar.addEventListener('click', function(event)
	{
	var pos = event.offsetX;
	var len = timebar.offsetWidth;
	song.pause();
	song.currentTime = Math.round(song.duration/len*pos);
	song.play();
	})
}
