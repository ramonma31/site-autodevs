const activeClass = "active"

function addinformation() {
  const activeClass = "active"
  const figura = document.querySelectorAll(".js-menu li")
  const conteudo = document.querySelectorAll(".js-conteudo section")

  if(figura.length && conteudo.length) {
    conteudo[0].classList.add(activeClass)
  }

  function active(index) {
    conteudo.forEach(section => {
      section.classList.remove(activeClass)
    });
    conteudo[index].classList.add(activeClass)
  }
  figura.forEach((item, index) => {
    item.addEventListener("click", () => {
      active(index)
    })
  })
}

function abrirPerguntas() {
  const activeClass = "active"
  const acord = document.querySelectorAll(".js-acord dt")
  if(acord.length) {
    acord[0].classList.add(activeClass);
    acord[0].nextElementSibling.classList.add(activeClass)
  }

  function activeacord() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  acord.forEach(item => {
    item.addEventListener("click", activeacord);
  });
}

function linkAnimashion() {
  const linkinterno = document.querySelectorAll(".js-menu1 li a[href^='#']");
  function scrolltosection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  };
  linkinterno.forEach(link => {
    link.addEventListener("click", scrolltosection);
  });
}

function scrollanimation1() {
  const sections = document.querySelectorAll(".js-scroll")
  if(sections.length) {
    const windowmetade = innerHeight * 0.8;

    function animacaoscroll() {
      sections.forEach(section => {
        const sectiontop = section.getBoundingClientRect().top;
        const issectionvisible = (sectiontop - windowmetade) < 0;
        if(issectionvisible) {
          section.classList.add("active")
        }
      })
    }
  }
  animacaoscroll();
  window.addEventListener("scroll", animacaoscroll)
}

addinformation()
abrirPerguntas()
linkAnimashion()
scrollanimation1()
