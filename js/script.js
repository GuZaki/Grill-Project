/*Initialize Swiper worksteps*/
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

/*Initialize Swiper our-works*/
var mySwiper = new Swiper(".our-works__swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".our-works .arrow_next",
    prevEl: ".our-works .arrow_prev",
  },
});

// Обработчик события slideChange
mySwiper.on('slideChange', function () {
var currentSlideId = this.slides[this.activeIndex].getAttribute('data-id');
var allWorksteps = document.querySelectorAll(
  ".our-works__coll[data-our-works]"
);

allWorksteps.forEach(function(workstep) {
  var workstepValue = workstep.getAttribute("data-our-works");
  
  if (workstepValue === currentSlideId) {
  workstep.classList.add('active');
  } else {
  workstep.classList.remove('active');
  }
});
});

// Добавляем обработчик события клика для элементов с атрибутом data-worksteps
document
  .querySelectorAll(".our-works__coll[data-our-works]")
  .forEach(function (element) {
    element.addEventListener("click", function () {
      // Получаем значение атрибута data-our-works текущего элемента
      var targetSlideId = this.getAttribute("data-our-works");

      // Ищем индекс слайда с атрибутом data-id, соответствующего targetSlideId
      var targetSlideIndex = Array.from(mySwiper.slides).findIndex(function (
        slide
      ) {
        return slide.getAttribute("data-id") === targetSlideId;
      });

      // Переключаем Swiper на целевой слайд
      mySwiper.slideTo(targetSlideIndex);
    });
  });