const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'coverflow', // Change this to 'cube', 'coverflow', etc. for different effects
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 1000, // Speed of transition
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const slides = document.querySelectorAll('.slide1');
  let currentSlide = 0;
  
  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      document.querySelector('.slider1').style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  setInterval(nextSlide, 2000);
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    const textElement = document.getElementById('colorText');
    textElement.style.color = getRandomColor();
  }
  
  setInterval(changeColor, 1000);
  
  