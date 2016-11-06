var navitems = ["ourstory", "partners", "joinus"];

$(function() {
	var hash =  window.location.hash; // get the hash
	if (hash) {
		var hashstr = hash.substr(1); // remove '#' from hash
		if (navitems.indexOf(hashstr) == -1) {
			window.location.hash = "";
			return;
		}
		selectActiveItem("." + hashstr, ".nav-item a", "active");
		removeClassFromElem(".content-child", hash, "hidden")
	}

	setEventHandlers();
});

/*** EVENT HANDLERS ***/
function setEventHandlers() {
	$(".nav-item a").on("click", function(e) {
		selectActiveItem(this, ".nav-item a", "active");
		
		var hash = $(this)[0].hash;
		removeClassFromElem(".content-child", hash, "hidden")
	});
}

/*** HELPER FUNCTIONS ***/
function selectActiveItem(elment, family, clss) {
	$(family).removeClass(clss);
	$(elment).addClass(clss);
}

function removeClassFromElem(elment, family, clss) {
	$(elment).addClass(clss);
	$(family).removeClass(clss);
}

