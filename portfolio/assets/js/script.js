/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  });
});

/* ================================
   SKILL BAR ANIMATION ON SCROLL
================================ */
const skillSection = document.querySelector("#skills");
const skillFills = document.querySelectorAll(".fill");
let skillsAnimated = false;

const animateSkills = () => {
  if(skillsAnimated) return;

  skillFills.forEach(fill=>{
    const target = fill.style.width;
    fill.style.width = "0%";

    setTimeout(()=>{
      fill.style.transition = "width 1.5s ease";
      fill.style.width = target;
    },200);
  });

  skillsAnimated = true;
};

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      animateSkills();
    }
  });
},{threshold:0.4});

observer.observe(skillSection);

/* ================================
   IMAGE FULLSCREEN POPUP
================================ */
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");

if(popup){
  document.querySelectorAll(".gallery img").forEach(img=>{
    img.addEventListener("click",()=>{
      popup.style.display="flex";
      popupImg.src = img.src;
    });
  });

  document.querySelector(".popup .close").onclick=()=>{
    popup.style.display="none";
  };
}

/* ================================
   ANIMATED COUNTERS
================================ */
document.querySelectorAll(".counter").forEach(counter=>{
  const update=()=>{
    const target=+counter.dataset.target;
    const current=+counter.innerText;
    const inc=target/100;

    if(current<target){
      counter.innerText=Math.ceil(current+inc);
      setTimeout(update,20);
    }else{
      counter.innerText=target;
    }
  };
  update();
});
