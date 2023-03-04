const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	bodyElem = document.querySelector('body'),
	overlay = document.querySelector('.menu__overlay'),
	menuItem = document.querySelectorAll('.menu__item');

	hamburger.addEventListener('click', () => {
		bodyElem.classList.add('lock');
	});

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
	});

	closeElem.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	closeElem.addEventListener('click', () => {
		bodyElem.classList.remove('lock');
	});

	overlay.addEventListener('click', e => {
		if (e.target === overlay) {
			menu.classList.remove('active');
			bodyElem.classList.remove('lock');
		}
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('active');
			bodyElem.classList.remove('lock');
		});
	});

const counters = document.querySelectorAll('.skills__ratings-counter');
	lines = document.querySelectorAll('.skills__ratings-line span');

	counters.forEach( (item, i) => {
		lines[i].style.width = item.innerHTML;
	});

// WOW JS
	new WOW().init();

//Smooth scroll and pageup
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn('slow');
		} else {
			$('.pageup').fadeOut();
		}
	});
	$("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                window.location.hash = hash;
            });
        }
    });

const handleClick = (e) => { e.preventDefault()}
;