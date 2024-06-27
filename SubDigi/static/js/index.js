(function (params) {
	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	let navigation = document.getElementById('navigation')
	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	var navBtn = document.getElementById('nav-btn');
	var siteCollapseNavnavBtn = document.getElementById('site-collapse-nav');
	document.getElementById('prev-button').addEventListener('click', function () {
		swiper.slidePrev(); // 滑动到上一张幻灯片  
	});

	document.getElementById('next-button').addEventListener('click', function () {
		swiper.slideNext(); // 滑动到下一张幻灯片  
	});

	function checkScreenSize() {
		// 获取屏幕宽度  
		var screenWidth = window.innerWidth;
		// 如果屏幕宽度小于991px  
		if (screenWidth < 991) {
			// 修改navigation元素的类名为test  
			navigation.className = 'navigation is-transparent affix';
		} else {
			// 如果不超过10px，将navigation的类名重置为原来的值（假设为'nav'） 
			navigation.className = 'navigation is-transparent affix-top';
		}
	}
	navBtn.addEventListener('click', function () {
		// 在这里编写点击按钮后要执行的代码  
		if (navBtn.className == 'navbar-toggle') {
			navBtn.className = 'navbar-toggle collapsed'
			siteCollapseNavnavBtn.className = 'navbar-collapse font-secondary collapse'
		} else {
			navBtn.className = 'navbar-toggle'
			siteCollapseNavnavBtn.className = 'navbar-collapse font-secondary collapse in'
		}

	});
	siteCollapseNavnavBtn.addEventListener('click', function () {
		// 在这里编写点击按钮后要执行的代码   
		siteCollapseNavnavBtn.className = 'navbar-collapse font-secondary collapse'
		navBtn.className = 'navbar-toggle collapsed'
	});
	// 监听resize事件，当屏幕大小变化时触发  
	window.addEventListener('resize', checkScreenSize);

	// 初始检查屏幕大小  
	checkScreenSize();

	// 监听页面滚动事件  
	window.addEventListener('scroll', function () {
		// 检查滚动距离是否超过10px  
		if (window.scrollY > 3) {
			navigation.className = 'navigation is-transparent affix';
		} else {
			// 如果不超过10px，将navigation的类名重置为原来的值（假设为'nav'） 
			navigation.className = 'navigation is-transparent affix-top';
		}
	});
})()
