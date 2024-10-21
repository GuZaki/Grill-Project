/*Initialize Swiper*/
 
 
  var mySwiper = new Swiper('.worksteps__swiper', {
    slidesPerView: 1,
	spaceBetween: 15,
	effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.worksteps .arrow_next',
      prevEl: '.worksteps .arrow_prev',
    }
  });

  // Обработчик события slideChange
  mySwiper.on('slideChange', function () {
	var currentSlideId = this.slides[this.activeIndex].getAttribute('data-id');
	var allWorksteps = document.querySelectorAll('.worksteps__coll[data-worksteps]');
  
	allWorksteps.forEach(function(workstep) {
	  var workstepValue = workstep.getAttribute('data-worksteps');
	  
	  if (workstepValue === currentSlideId) {
		workstep.classList.add('active');
	  } else {
		workstep.classList.remove('active');
	  }
	});
  });

  // Добавляем обработчик события клика для элементов с атрибутом data-worksteps
document.querySelectorAll('.worksteps__coll[data-worksteps]').forEach(function(element) {
	element.addEventListener('click', function() {
	  // Получаем значение атрибута data-worksteps текущего элемента
	  var targetSlideId = this.getAttribute('data-worksteps');
	  
	  // Ищем индекс слайда с атрибутом data-id, соответствующего targetSlideId
	  var targetSlideIndex = Array.from(mySwiper.slides).findIndex(function(slide) {
		return slide.getAttribute('data-id') === targetSlideId;
	  });
	  
	  // Переключаем Swiper на целевой слайд
	  mySwiper.slideTo(targetSlideIndex);
	});
  });

    //   var swiper = new Swiper(".news__wrap", {
        
    //     navigation: {
    //         nextEl: ".news__arrows .arrow-next",
    //         prevEl: ".news__arrows .arrow-prev",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    
    //     breakpoints: {
    //         300: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         470: {
    //             slidesPerView: 1.5,
    //             spaceBetween: 20,
    //         },
    //         670: {
    //             slidesPerView: 2,
    //             spaceBetween: 30,
    //         },
    //         769: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //         },
    //     },
    // });
      
    /*
        let header = document.querySelector(".header")
        window.onscroll = function(){
            
    if(window.scrollY > 100){
        header.style.background = "rgba(255, 255, 255)"
    }
    else{
        header.style.background = "rgba(255, 255, 255, 0.8)" 
    }
        }
    */