let showButton = document.querySelector('.brands__show-button');
let hiddenClass = document.querySelectorAll('.brands__link--hidden');


       showButton.onclick =  function() {
              for (let hc of hiddenClass) {
              hc.classList.toggle('brands__link--hidden');
              }

       };
   
       


