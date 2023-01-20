"use strict";
{
  const target = document.querySelector(".js-fade-in");
  const motion = (entries) => {
    if (!entries[0].isIntersecting) {
      return;
    }
    entries[0].target.classList.add("is-visible");
  };
  const options = {
    threshold: 1,
    rootMargin: "0px 0px -100px",
  };
  const observer = new IntersectionObserver(motion, options);
  observer.observe(target);
}
