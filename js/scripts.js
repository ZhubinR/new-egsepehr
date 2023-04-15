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
      var home_intro_slider = new Swiper(".home_intro_slider", {
         slidesPerView: 1,
         loop: true,
         effect: "fade",
         speed: 800,
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
         },
      });

      var home_products_slider = new Swiper(".home_products_slider", {
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
         
         autoplay: {
            delay: 3000,
            setTimeout: 3500,
         },
         loop: true,
         pagination: false,
         centeredSlides: true,
         breakpoints: {
            0: {
               slidesPerView: 1.5
            },
            568: {
               slidesPerView: 2
            },
            1366: {
               slidesPerView: 3
            },
         }
      });

      var slideSwiper = new Swiper(".slideSwiper", {
         spaceBetween: 30,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         loop: true,
         autoplay: {
            delay: 3000,
            setTimeout: 3500,
         },
         breakpoints: {
            570: {
               slidesPerView: 1
            },
            692: {
               slidesPerView: 1.5
            },
            850: {
               slidesPerView: 2
            },
            1024: {
               slidesPerView: 3
            },
         },
      });

      var product_swiper = new Swiper('.product_swiper', {
         slidesPerView: 1,
         loop: true,
         // effect: "fade",
         speed: 800,
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
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

EGS.searchModal = EGS.searchModal || {};
EGS.searchModal.init = function () {
   try {
      $('a[href="#search"]').click(function (event) {
         event.preventDefault()
         $("#search-box").addClass("-open");
         setTimeout(function () {
            inputSearch.focus();
         }, 800);
      });

      $('a[href="#close"]').click(function (event) {
         event.preventDefault()
         $("#search-box").removeClass("-open");
      });

      $(document).keyup(function (e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
            $("#search-box").removeClass("-open");
         }
      });

   } catch (e) {
      console.log(`Error on EGS.uniAbout.init - ${e}`);
   }
};

EGS.addActice = EGS.addActice || {};
EGS.addActice.init = () => {
   try {
      const menuMobile = document.querySelector(".menuAside")
      const overlay = document.querySelector(".overlay")
      const openBtn = document.querySelector(".open")

      openBtn.addEventListener("click", function () {
         overlay.classList.add("active")
         menuMobile.classList.add("active")
      })

      overlay.addEventListener("click", function () {
         overlay.classList.remove("active")
         menuMobile.classList.remove("active")
      })


   } catch (e) {
      console.log(`Error from EGS.addActice.init = ${e}`)
   }
}

EGS.Modals = EGS.Modals || {};
EGS.Modals.init = function () {
   try {
      function baseModal(btn, modal) {
         document.querySelectorAll(btn).forEach(function (item) {
            if (item) {
               const myModal = document.querySelector(modal),
                  overal = myModal.querySelector(".overal"),
                  closeBtn = myModal.querySelector(".close-modal");

               item.addEventListener("click", function () {
                  document.querySelector("body").classList.add("blured");
                  myModal.classList.add("active");
               });

               overal.addEventListener("click", function () {
                  document.querySelector("body").classList.remove("blured");
                  myModal.classList.remove("active");
               });

               if (closeBtn) {
                  closeBtn.addEventListener("click", function () {
                     document.querySelector("body").classList.remove("blured");
                     myModal.classList.remove("active");
                  });
               }
            }
         });
      }

      // baseModal(".open-order", ".order-modal");

   } catch (e) {
      console.log("Error on EGS.Modals.init " + e);
   }
}

EGS.BuyProduct = EGS.BuyProduct || {};
EGS.BuyProduct.init = function () {
   try {
      var lastScrollTop = 0,
         el = document.querySelector("#buy-product");

      if (el) {
         window.addEventListener(
            "scroll",
            function () {
               var st = window.pageYOffset || document.documentElement.scrollTop;
               if (st > lastScrollTop) {
                  // downscroll code
                  el.classList.remove("show");
               } else {
                  // upscroll code
                  el.classList.add("show");
               }
               lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            },
            false
         );
      }

   } catch (e) {
      console.log("Error on EGS.BuyProduct.init " + e);
   }
}

EGS.ProductForm = EGS.ProductForm || {};
EGS.ProductForm.init = function () {
   try {
      const modalTitleEl = document.querySelector(".order-modal .modal-box .title-row .title span"),
         mainTitleEl = document.querySelector(".product_single_content>.title"),
         inputEl = document.querySelector(".site-modal .modal-box #pname input");

      if (modalTitleEl) {
         modalTitleEl.textContent = mainTitleEl.textContent;
         inputEl.value = mainTitleEl.textContent;
      }

      // Append Slideshow
      const targetEl = document.querySelector("#p-slideshow"),
         currentEl = document.querySelector(".product_custom_slide")
      if (currentEl) {
         targetEl.append(currentEl)
      }

      // Apend Description
      const descriptionTag = document.querySelector("meta[property='og:description']").getAttribute("content"),
         pTag = document.querySelector("#p-sub-desc");
      if (pTag) {
         pTag.textContent = descriptionTag;
      }

      // remove style attribute automatic
      const descElements = document.querySelectorAll("#description *");
      descElements.forEach(el => {
         if (el) {
            el.removeAttribute("style");
            el.removeAttribute("dir");
            el.removeAttribute("align");
         }
      })

      // Format Price with ,
      let priceEl = document.querySelector(".product_single_content .price span");
      if (priceEl) {
         let mainPrice = Number(priceEl.textContent),
            dollarUS = Intl.NumberFormat("en-US", {
               // style: "currency",
               // currency: "USD",
               // useGrouping: true,
               maximumSignificantDigits: 3,
            });
         priceEl.textContent = dollarUS.format(mainPrice)
      }

      // Append FAQ
      const faqEl = document.querySelector("#faq_tab"),
         faqcurrentEl = document.querySelector(".faq_container")
      if (faqcurrentEl) {
         faqEl.append(faqcurrentEl)
      }

      // Delete Post-wrapper
      const product_single = document.querySelector(".product_single");
      if (product_single) {
         // document.querySelector(".post-wrapper").classList.add("display-hide")
         document.querySelector(".blog_details").innerHTML = "";
         document.querySelector(".blog_details").classList.add("d-none");
      }

   } catch (e) {
      console.log("Error on EGS.ProductForm.init " + e);
   }
}

EGS.WhatsAppSupport = EGS.WhatsAppSupport || {};
EGS.WhatsAppSupport.init = function () {
    try {
        // Whatsapp Modal
        const callBtn = document.querySelectorAll(".openCallBoxTrigger"),
            bodyOverlay = document.querySelector(".bodyOverlay"),
            backBtn = document.querySelector(".user-bar .back"),
            modalEl = document.querySelector(".callNow_modal");

        callBtn.forEach(btn => {
            btn.addEventListener("click", function () {
                bodyOverlay.classList.toggle("active");
                modalEl.classList.toggle("show");
            })
        })

        bodyOverlay.addEventListener("click", function () {
            bodyOverlay.classList.remove("active");
            modalEl.classList.remove("show");
        })
		
        backBtn.addEventListener("click", function () {
            bodyOverlay.classList.remove("active");
            modalEl.classList.remove("show");
        })

        // Apend Title to whatsapp box
        const titleMetaTag = document.querySelector("meta[property='og:title']").getAttribute("content"),
            pbTag = document.querySelector("#pb-name");
        if (pbTag) {
            pbTag.textContent = titleMetaTag;
        }

        // Check Mobile Or Desktop
        window.mobileAndTabletCheck = function () {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        function setLink(url) {
            const urlEl = document.getElementById("whatsappCall");
            urlEl.setAttribute("href", url);
        }

        mobileAndTabletCheck() ? setLink(`https://wa.me/+989125656142?text=سلام،%20درباره%20(${titleMetaTag})%20سوال%20دارم`) : setLink(`https://web.whatsapp.com/send?phone=+989125656142&text=سلام، درباره (${titleMetaTag}) سوال دارم`);

    } catch (e) {
        console.log("Error on EGS.WhatsAppSupport.init " + e);
    }
}

EGS.Gallery = EGS.Gallery || {};
EGS.Gallery.init = function () {
    try {
        if ($(".image-popup").length > 0) {
            $(".image-popup").magnificPopup({
                type: "image",
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace(
                            "mfp-figure",
                            "mfp-figure mfp-with-anim"
                        );
                        this.st.mainClass = "mfp-zoom-in";
                    }
                },
                closeOnContentClick: true,
                midClick: true,
                gallery: {
                    enabled: true
                }
            });
        }

    } catch (e) {
        console.log("Error on EGS.Gallery.init" + e);
    }
}


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
   EGS.addActice.init();
   EGS.Tabs.init();
   EGS.BuyProduct.init();
   EGS.Modals.init();
   EGS.ProductForm.init();
   EGS.WhatsAppSupport.init();
})

$(function () {
   EGS.Accordion.init();
   EGS.searchModal.init();
   EGS.Gallery.init();
})