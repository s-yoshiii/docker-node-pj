"use strict";
{
  const targets = [...document.querySelectorAll(".js-fade-in")];
  const motion = (entries, obs) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: 0.2,
    // rootMargin: "0px 0px -100px",
  };
  const observer = new IntersectionObserver(motion, options);
  targets.forEach((target) => {
    observer.observe(target);
  });
}
