"use strict";
{
  const target = document.querySelector("img");
  const motion = () => {
    console.log("fired!");
  };
  const observer = new IntersectionObserver(motion);
  observer.observe(target);
}
