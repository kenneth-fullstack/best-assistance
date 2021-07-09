AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

    const swiper2 = new Swiper('.mySwiper-1', {
      slidesPerView: "auto",
      // centeredSlides: true,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    let scroll = document.getElementById('scroll-top');

    scroll.addEventListener('click', function () {
      // document.documentElement.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    window.onscroll = function () { stickToTop() };

    let header = document.getElementById('myHeader');
    let sticky = header.offsetTop;

    function stickToTop() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }


    let toggleBtn = document.querySelector('button.navbar-toggler');

    toggleBtn.addEventListener('click', function (e) {
      header.style.backgroundColor = '#fff';
    })

    window.onresize = screen;
    window.onload = screen;

    function screen() {
      let w = window.innerWidth;

      if (w <= '991') {
        document.querySelector('.box-2 .link').innerText = 'Share your story';
      } else {
        document.querySelector('.box-2 .link').innerText = 'Give us your feedback';
      }
    }
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
