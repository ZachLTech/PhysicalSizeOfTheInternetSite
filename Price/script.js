VanillaTilt.init(document.querySelectorAll(".social__links ul li"), {
		max: 10,
		speed: 800,
        glare: true,
        "max-glare": 1
	});





	gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
	gsap.set('.scrollDist', {width:'100%', height:'200%'})
	gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
		.fromTo('.sky', {y:0},{y:-200}, 0)
		.fromTo('.cloud1', {y:-65},{y:-800}, 0)
		.fromTo('.cloud2', {y:150},{y:-160}, 0)
		.fromTo('.cloud3', {y:150},{y:-650}, 0)
		.fromTo('.mountBgR', {y:-520},{y:-500}, 0)
		.fromTo('.mountBg', {y:-10},{y:-100}, 0)
		.fromTo('.mountMg', {y:-120},{y:-250}, 0)
		.fromTo('.mountFg', {y:550},{y:-400}, 0)
	
	$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
	$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
	$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight+1010, duration:2.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)




	window.addEventListener(
		"scroll",
		() => {
		  const textLargeDOM = document.getElementById("large-text");
		  const textMidDOM = document.getElementById("mid-text");
		  const scrollPercentage = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
	  
		  if (scrollPercentage > 35) {
			textLargeDOM.style.opacity = "0";
			textMidDOM.style.opacity = "0";
			containerMedium = document.getElementById("selectionssContainer").style.transform = "translate(0px, 3000px);";
			containerMedium = document.getElementById("selectionssContainer").style.position = "absolute";
		  } else {
			textLargeDOM.style.opacity = "1";
			textMidDOM.style.opacity = "1";
			containerMedium = document.getElementById("selectionssContainer").style.transform = "translate(0px, 2500px)";
			containerMedium = document.getElementById("selectionssContainer").style.position = "absolute";
		  }
		},
		false
	  );

	  