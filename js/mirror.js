//Set the page to auto reload (to update)
setTimeout(function () {
    refreshPage();
}, 1000 * 60 * 60 * 12) // 12 hours



document.getElementById('mainBody').addEventListener('click', () => {
	if (screenfull.enabled) {
		screenfull.request();
	}
});

function refreshPage() {
    $.ajax({
        url: "",
        context: document.body,
        success: function(s,x){
            $(this).html(s);
        }
    });
}
