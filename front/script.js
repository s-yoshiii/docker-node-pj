"use strict";
{
  const target = document.querySelector(".js-fade-in");
  const motion = (entries, obs) => {
    console.log(entries[0]);
    if (!entries[0].isIntersecting) {
      return;
    }
    entries[0].target.classList.add("is-visible");
    obs.unobserve(entries[0].target);
  };
  const options = {
    threshold: 0.2,
    // rootMargin: "0px 0px -100px",
  };
  const observer = new IntersectionObserver(motion, options);
  observer.observe(target);
}
