function loadiframe() {
	var soundcloud = document.createElement("iframe");
	// Add attributes
	soundcloud.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/7394614&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
	// Set size and hide iframe border
	soundcloud.width = "100%";
	soundcloud.height = "450";
	soundcloud.frameBorder ="no";
	soundcloud.scrolling = "no";

	var loadbtn = document.getElementById("loadbtn");
	loadbtn.appendChild(soundcloud);
	loadbtn.style.display = none;
}