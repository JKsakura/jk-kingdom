$(document).ready(function() {
    iniCheckSearchRadio();  
    /* ---------- Carousel function ---------- */
    $("#myCarousel").swiperight(function() {  
        $(this).carousel('prev');  
    });  
    $("#myCarousel").swipeleft(function() {  
        $(this).carousel('next');  
    });
});  

$(document).ready(function() {
    var $ham_menu = $(".ham_menu");
    var $menu_panel = $(".mobile_menu");
    var $search_icon = $(".search_icon");
    var $searchBar = $("#searchBar");
    var $searchBtn = $("#searchBtn");
    var $calculator = 0;
    var searchCalculator = [];
    $ham_menu.click(function() {
    $calculator++;
        $menu_panel.slideToggle(500);
    });
    
    $search_icon.click(function() {
        $search_icon.hide(500);
        $searchBar.show(500);
        });
    
    $('body').click(function(e) {
        if(e.target.className != 'searchfield' && e.target.className != 'search_icon' && e.target.className != 'searchPanel' && e.target.className != 'searchFlip') {
            $searchBar.hide(500);
            $search_icon.show(500);
        }
    });
    
    $(".page_title").hide();
    $(".page_title").show(1000);
    $(".character-wrapper").hide();
    $(".character-wrapper").fadeIn(1000);
});

$(document).ready(function() {
});


$("#back_top").on('click', function(event) {
    var target = $(this);
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
});

/* ---------- Search ---------- */
/* ---------- Set the global variables for all of the search functions ---------- */
var searchFlip = document.getElementById("searchFlip");
var searchRadio = document.getElementsByName("searchRadio");
var $clearBtn = $("#clearBtn");
/* ---------- gett the search text field & search button ---------- */
var searchField = document.getElementById("searchField");
var searchBtn = document.getElementById("searchBtn");
var $reslutBox = $("#resultBox");
/* ---------- add the event to the search panel's radio button ---------- */
for(var i=0; i<searchRadio.length; i++) {
    searchRadio[i].addEventListener("click", checkSearchRadio, false);
}

/* ---------- set the option panel for the user to select a searching field ---------- */
function iniCheckSearchRadio() {
    for(var i=0; i<searchRadio.length; i++) {
        if(searchRadio[i].checked == true ) {
            //Testing
            //console.log(searchRadio[i].value);
            searchFlip.value = searchRadio[i].value;
        }
    }
}

/* ---------- get the value from the search radio and set to the panel ---------- */
function checkSearchRadio(event) {
    if(this.checked == true) {
        //Testing
        //console.log(this.value);
        searchFlip.value = this.value;
    }
}

/* ---------- Slide down the SearchPanel ---------- */

$(document).ready(function(){
    var $calculator = 0;
    var $downArrow = $('#downArrow');
    var $upArrow = $('#upArrow');
    $downArrow.show();
    $upArrow.hide();
    $("#searchFlip").click(function(){
        $("#searchPanel").slideToggle("fast");
        if($calculator == 0) {
            $downArrow.hide();
            $upArrow.show();
            $calculator++;
        }
        else {
            $downArrow.show();
            $upArrow.hide();
            $calculator = 0;
        }
    });
});
/* ---------- this function is used to set the default Event to Enter ---------- */
function searchEnter(event) {
    var x = event.which;
    if(x == 13 && searchField.value != '') {
        search();
    }
}

/* ---------- this function set the searchBar's value to empty if the mouse focus on the search text field ---------- */
function searchFocus() {
    var element = document.getElementById("searchField");
    if(element.value == 'Search') {
        element.value = "";
    }
}

/* ---------- this function sets the searchBar's value to Search if the mouse move out of the search text field ---------- */
function searchBlur() {
    var element = document.getElementById("searchField");
    if(element.value == '') {
        element.value = "Search";
    }
}

/* ---------- This function is to make the effect of portfolio page ---------- */
$(function(){
    //the default value is box-hover-modal-m
    $(".box-hover-modal").boxhovermodal(".box-hover-modal-m");
});
(function ($) {
	$.fn.extend({
		"boxhovermodal": function (value) {
			//get the cover div
			var $childmodal = $(value) || $(".box-hover-modal-m");

			//mouseenter event
			$(this).mouseenter(function () {
				//getMouseWay()return the valua 0~3,according to the left,top,right,and bottom
				var wayNum = getMouseWay(this);
				if (wayNum == 0) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": "0",
						"left": -$(this).width()
					}).animate({
						"left": "0"
					}, 200);
				}
				else if (wayNum == 1) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": -$(this).height(),
						"left": '0'
					}).animate({
						"top": "0"
					}, 200);
				}
				else if (wayNum == 2) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": "0",
						"left": $(this).width()
					}).animate({
						"left": "0"
					}, 200);
				}
				else if (wayNum == 3) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": $(this).height(),
						"left": 0
					}).animate({
						"top": "0"
					}, 200);
				}
			}).mouseleave(function () {
				var wayNum = getMouseWay(this);
				if (wayNum == 0) {
					$(this).children($childmodal).animate({
						"left": -$(this).width()
					}, 200);
				}
				else if (wayNum == 1) {
					$(this).children($childmodal).animate({
						"top": -$(this).height()
					}, 200);
				}
				else if (wayNum == 2) {
					$(this).children($childmodal).animate({
						"left": 2 * $(this).width()
					}, 200);
				}
				else if (wayNum == 3) {
					$(this).children($childmodal).animate({
						"top": $(this).height()
					}, 200);
				}
			});
			//when the mouse enter the border of the div
			//left,top,right, and bottom=>0,1,2,3
			function getMouseWay(nowEle) {
				//get the position of the mouse 
				var mx = event.pageX;
				var my = event.pageY;

				//get the top,bottom,left and right of the element
				var bl = $(nowEle).offset().left;
				var bt = $(nowEle).offset().top;
				var br = bl + parseInt($(nowEle).width());
				var bb = bt + parseInt($(nowEle).height());
                
                //calculate the nearest border
				var ml = Math.abs(mx - bl);
				var mt = Math.abs(my - bt);
				var mr = Math.abs(br - mx);
				var mb = Math.abs(bb - my);

				//put the results into the Array
				var bm = [ml, mt, mr, mb];
				//calculate the minimum of the result
				var bmMin = Math.min.apply(null, bm);
				//get the nearest border according to the result
				var way;
				$.each(bm, function (index, content) {
					if (content == bmMin) {
						way = index;
					}
				});
				return way;
			}
		}
	});
})(jQuery);

/* ---------- About page functions ---------- */
$(document).ready(function() {
    $(".about_map").fadeIn(500);
    $(window).scroll(function() {
        var scrollTo = $(window).scrollTop();
        var scrollHeight = $(window).height();
        if(scrollTo > 600) {
            $(".monster_title").show(1000);
            $(".about_monster").fadeIn(1000);
        }
        if(scrollTo >1400) {
            $(".item_title").show(1000);
            $(".about_item").fadeIn(1000);
        }
    });
});

