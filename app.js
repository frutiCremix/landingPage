
//scroll smooth
let a = document.querySelectorAll('a');

  a.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      //seccion activa
      for(let i=0;i<a.length;i++){
        a[i].classList.remove("active");
     }
      elem.classList.add("active");
     //evento de smooth 
     e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
   
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
        
        
      });
      
    });
  });
//fin scroll smooth
