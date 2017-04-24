// this array tracks what page is open
var open;
for(i = 0; i < 4; i++) open[i] = false;

// wait for document to be ready
$(document).ready(function(){
	
	// hides all content pages
	$(".site_content").slideUp(0);
	
	// shows the games page by default
	$("#games").slideDown(0);
	$("#container3").animate({
		top: '180px'
	}, 500);
	$(".grow_shrink").animate({
		top: '5%'
	});
	
	
	$(".grow_shrink").hover(
		function(){
			$(this).animate({
				height: "150px",
				width: "150px",
				margin: "-=25px"
			});
		},
		function(){
			$(this).animate({
				height: "100px",
				width: "100px",
				margin: "+=25px"
			});
		}
	);
	
	// shows a content page or hides and returns to the default view
	$(".grow_shrink").click(function() {
		
		// if the view is not currently set to content, this'll do it
		$("#container3").animate({
			top: '180px'
		}, 500);
		$(".grow_shrink").animate({
			top: '5%'
		});
		
		// reset all html pages to hide
		$(".site_content").slideUp(500);
		
		// checks to see what content should be shown or hidden
		switch($(this).attr("id")) {
			case "bubble1":
				if(open[0]) {
					hide_content();
					for(i = 0; i < 4; i++) open[i] = false;
				}
				else {
					for(i = 0; i < 4; i++) open[i] = false;
					open[0] = true;
					$("#main_page").slideDown(500);
				}
				break;
			case "bubble2":
				if(open[1]) {
						hide_content();
						for(i = 0; i < 4; i++) open[i] = false;
					}
					else {
						for(i = 0; i < 4; i++) open[i] = false;
						open[1] = true;
						$("#games").slideDown(500);
					}
					break;
			case "bubble3":
				if(open[2]) {
						hide_content();
						for(i = 0; i < 4; i++) open[i] = false;
					}
					else {
						for(i = 0; i < 4; i++) open[i] = false;
						open[2] = true;
						$("#contact").slideDown(500);
					}
					break;
			case "bubble4":
				if(open[3]) {
						hide_content();
						for(i = 0; i < 4; i++) open[i] = false;
					}
					else {
						for(i = 0; i < 4; i++) open[i] = false;
						open[3] = true;
						$("#socials").slideDown(500);
					}
					break;
		}
	});
});

// this function is used to hide a content window
function hide_content() {
	$("#container3").animate({
		top: '100%'
	}, 500);
	$(".grow_shrink").animate({
		top: '40%'
	}, 500);
};
