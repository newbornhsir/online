//change img
function changeImg(){
	$("#changeImg").css({
		"height":$(window).height()+"px",
		"backgroundImage":"url(img/bg_1.jpg)"
	})
	var n = 1;
	function change(){
		$("#changeImg").fadeTo(3000,0.4,function(){
			n++;
			if(n>3){
				n = 1;
			}
			$("#changeImg").css("backgroundImage","url(img/bg_"+n+".jpg");
			$("#changeImg").fadeTo(3000,1,function(){change()});
		})
	}
	change();
}
changeImg();

//fortune
var fortuneArr = [	"Pain past is pleasure.",
"Nothing is impossible to a willing heart.",
"Follow your heart, but be quiet for a while first. learn to trust your heart. ",
"When there’s no expectation, losing won’t bring hurt, gaining makes you surprised.",
"I love waking up and seeing text messages on my phone",
"Life is sad at times, but it is up to you to make your own life happy.",
"Can give me a chance to show your talents!"
];
setInterval(function(){
	$(".fortune").eq(0).html(fortuneArr[parseInt(Math.random()*7)]);
},4000);

//height
console.log($(".skillList").eq(0).innerHeight());
$(".skill_img").eq(0).innerHeight($(".skillList").eq(0).innerHeight());
//$(".contact>div").innerHeight($(".contact>div").innerHeight())
//header
setTimeout(function(){
	$(".header").eq(0).css("opacity","0");
},2000);
