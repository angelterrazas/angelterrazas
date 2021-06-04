$(window).on("load",function(){
     setTimeout(() => {
          $(".flex").fadeOut(1000);
          $("header").fadeIn(1000);
     }, 1000);

     const translate = document.querySelectorAll('.translate');
     const title = document.querySelector('.big-title');
     const header = document.querySelector('header');
     const shadow = document.querySelector('.shadow');
     const content = document.querySelector('.content');
     const section = document.querySelector('section');
     const image_container = document.querySelector('.imgContainer');
     

     
     

     window.addEventListener("scroll" , function(){
           let scroll = window.pageYOffset;

           let sectionY = section.getBoundingClientRect();

           translate.forEach(element => {
                let speed = element.dataset.speed;
                element.style.transform = `translateY(${scroll * speed}px)`;
           })

           let headerHeight = header.offsetHeight;
           let sectionHeight = section.offsetHeight;

           title.style.opacity = - scroll / (headerHeight / 2) + 1;
           
           shadow.style.height = `${scroll * 0.5 + 300}px`;


           content.style.transform = `translateY(${scroll/(sectionHeight + sectionY.top * 50 - 50)}px)`;

           image_container.style.transform = `translateY(${scroll/(sectionHeight + sectionY.top * -50 + 50)}px)`;
     })















});