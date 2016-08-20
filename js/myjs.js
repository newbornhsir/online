//change img
function changeImg(){
	$("#changeImg").css({
		"height":$(window).height()+"px",
		"backgroundImage":"url(http://pic31.nipic.com/20130726/8157563_104655714000_2.jpg)"
	});
	var imgArr=["http://pic31.nipic.com/20130726/8157563_104655714000_2.jpg",
	"http://pic1.nipic.com/2008-11-13/2008111384358912_2.jpg",
	"http://pic9.nipic.com/20100904/4845745_195609329636_2.jpg",
	"http://imgsrc.baidu.com/forum/pic/item/645b8701a18b87d6e716e197070828381e30fdae.jpg",
	"http://pic10.nipic.com/20101103/5063545_000227976000_2.jpg",
	"http://pic31.nipic.com/20130726/8157563_104655714000_2.jpg"
	]
	var n = 0;
	function change(){
		$("#changeImg").fadeTo(3000,0.4,function(){
			if(n>5){
				n = 1;
			}
			$("#changeImg").css("backgroundImage","url("+imgArr[n]+")");
			n++;
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
