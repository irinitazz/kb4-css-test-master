$(document).ready(function() {
	$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $('div.sidebar').addClass("active");
    } else {
        $('div.sidebar').removeClass("active");
    }
})
});