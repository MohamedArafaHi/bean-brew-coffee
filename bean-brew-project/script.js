document.addEventListener("DOMContentLoaded", () => {
  // كل كودك يتحط هنا
  let cartCount = 0;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if(!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - 70;

    const startPosition = window.pageYOffset;

    const distance = targetPosition - startPosition;

    let startTime = null;

    function animation(currentTime){
      if(startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const duration = 1200;

      const progress = Math.min(timeElapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 4);

      window.scrollTo(
        0,
        startPosition + distance * ease
      );

      if(timeElapsed < duration){
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  });
});

/* CART */
function addToCart(item){
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
}

/* MENU FILTER */
function filterMenu(type){
  const items = document.querySelectorAll(".item");

  items.forEach(item => {

    if(type === "all" || item.classList.contains(type)){
      item.style.display = "block";

      setTimeout(()=>{
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      },50);

    }else{
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";

      setTimeout(()=>{
        item.style.display = "none";
      },300);
    }

  });
}


/* ================================
   SMOOTH SCROLL (CLEAN VERSION)
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if(!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // animation on click only
    target.classList.remove("active-anim");
    void target.offsetWidth;
    target.classList.add("active-anim");
  });

});


/* ================================
   REMOVE SCROLL RE-ANIMATION BUG
================================ */
const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });

},{
  threshold:0.15
});

document.querySelectorAll("section").forEach(sec=>{
  observer.observe(sec);
});


/* HERO LOAD ANIMATION */
window.addEventListener("load", ()=>{

  const hero = document.querySelector(".hero-text");

  if(hero){
    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(()=>{
      hero.style.transition = "all 1.2s ease";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    },100);
  }

});


/* CONTACT FORM */
const form = document.querySelector(".contact-form");

if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();

    alert("Message Sent Successfully ☕");
    form.reset();
  });
}
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);

  }, 1500); // وقت اللودر
});
});
