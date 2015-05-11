$(document).ready(function() {
	$(".start-menu").click(function() {
		$(".menu").toggle(300);
	});
	$('.menu a, .content, .open-app, .nav-apps').click(function() {
		$(".menu").hide(300);
	});


    $('.window .header .move').drags();	
    $( ".window" ).resizable();
});

function tocApp(id){
	$('.app-'+id).toggleClass('selected');
	$("#"+id).toggle(300);
}
function openApp(id, title){
	var test = $('.nav-apps div').is('.app-'+ id);
	if(test == true){
		$('#'+id).effect( "bounce", {times:3}, 300 );
	}
	else{
		var titleApp = '<div class="open-app app-'+ id +' selected" onclick="tocApp(\''+ id +'\')">'+ title +'</div>';
		$('.nav-apps').append(titleApp);
		createWindows(id, title);
	}
}
function createWindows(id, title){
	var window = '<div class="window draggable ui-widget-content" id="'+ id +'">'+
    			'<div class="header">'+
    				'<div class="title">'+
    					'<h5>'+ title +'</h5>'+
    				'</div>'+
    				'<div class="move">'+
    				'</div>'+
    				'<div class="action">'+
	    				'<a href="#" class="minus" onclick="minWindows(\''+ id +'\')"><i class="fa fa-minus"></a></i>'+
	    				'<a href="#" class="max" onclick="maxWindows(\''+ id +'\')"><i class="fa fa-plus"></a></i>'+
	    				'<a href="#" class="closer" onclick="closeWindows(\''+ id +'\')"><i class="fa fa-times"></a></i>'+
    				'</div>'+
    			'</div>'+
    		'</div>';
    $('.content').append(window);
}
function closeWindows(id){

		$('#'+id).fadeOut(600, function(){$(this).detach();});
		$('.app-'+id).fadeOut(600, function(){$(this).detach();});

}
function minWindows(id){
		$('.app-'+id).removeClass('selected');
		$('#'+id).hide(300);
}
function maxWindows(id){
		$('.move').toggle();
		$('#'+id).css("top", "");
		$('#'+id).css("left", "");
		$('#'+id).toggleClass('max');
}
