var EGS = EGS || {};
EGS.Global = EGS.Global || {};
EGS.Global.init = () => {
   try {
      const emptyLinks = document.querySelectorAll('[href="#"]');
      emptyLinks.forEach(link => {
         link.addEventListener('click', e => {
            e.preventDefault();
         })
      })

   } catch (e) {
      console.log(`Error from EGS.Global.init = ${e}`)
   }
};

EGS.Sliders = EGS.Sliders || {};
EGS.Sliders.init = () => {
   try {
      var swiper = new Swiper(".home_intro_slider", {
         slidesPerView: 1,
         loop: true,
         effect: "fade",
         speed: 800,
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },
      });

      var swiper = new Swiper(".home_products_slider", {
         effect: "coverflow",
         grabCursor: true,
         centeredSlides: true,
         coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
         },
         loop: true,
         pagination: false,
         breakpoints: {
            640: {
               slidesPerView: 2
            },
            768: {
               slidesPerView: 1
            },
            1024: {
               slidesPerView: 2
            },
            1560: {
               slidesPerView: 3
            }
         }
      });

   } catch (e) {
      console.log(`Error from EGS.Sliders.init = ${e}`)
   }
};

EGS.Tabs = EGS.Tabs || {};
EGS.Tabs.init = () => {
   try {
      const tabLink = document.querySelectorAll(".tab_buttons button");
      const tabContent = document.querySelectorAll(".tab_content");

      tabLink.forEach((el) => {
         el.addEventListener("click", activeTab);
      });

      function activeTab(el) {
         const btnTarget = el.currentTarget;
         const content = btnTarget.dataset.content;

         tabContent.forEach((el) => {
            el.classList.remove("active");
         });

         tabLink.forEach((el) => {
            el.classList.remove("active");
         });

         document.querySelector("#" + content).classList.add("active");
         btnTarget.classList.add("active");
      }

   } catch (e) {
      console.log(`Error on: EGS.Tabs.init == ${e}`)
   }
};

EGS.Accordion = EGS.Accordion || {};
EGS.Accordion.init = function () {
   try {
      $(".collapse_header").click(function () {
         $(".collapse_item").slideUp();
         if ($(this).hasClass("active")) {
            $(this).next().slideUp();
            $(this).removeClass("active");
         } else {
            $(this).next().slideDown();
            $(".collapse_header").removeClass("active");
            $(this).addClass("active");
         }
      });
   } catch (e) {
      console.log(`Error on EGS.Accordion.init - ${e}`);
   }
};
// EGS.Global = EGS.Global || {};
// EGS.Global.init = () => {
//     try {

//     } catch (e) {
//         console.log(`Error from EGS.Global.init = ${e}`)
//     }
// }

window.addEventListener("DOMContentLoaded", () => {
   EGS.Global.init();
   EGS.Sliders.init();
})

$(function () {
   EGS.Accordion.init();
})