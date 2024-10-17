function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 60 * i);
    });
  }
  
  const titulo = document.querySelector('.titulo');
  
  typeWriter(titulo);
  

  
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } else{
      entry.target.classList.remove('show')
    }
  })
})


const element = document.querySelectorAll('.hidden')

element.forEach((element) => myObserver.observe(element))
