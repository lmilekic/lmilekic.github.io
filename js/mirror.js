//Set the page to auto reload (to update)
setTimeout(function () {
    refreshPage();
}, 1000 * 60 * 60 * 2) // 3 hours



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

//set the src version of all scripts to be equal to current date so there's no caching
var curr = new Date();
$(".customScript").each(function(index) {
    this.src = this.src + "?" + curr;
});