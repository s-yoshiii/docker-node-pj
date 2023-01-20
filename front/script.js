"use strict";
{
  const target = document.querySelector("img");
  const motion = () => {
    console.log("fired!");
  };
  const options = {
    threshold: [0.2, 0.8],
  };
  const observer = new IntersectionObserver(motion, options);
  observer.observe(target);
}
