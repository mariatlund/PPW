"use strict";
import { animate, scroll } from "https://cdn.skypack.dev/motion";
window.addEventListener("DOMContentLoaded", load);
function load() {
  document.querySelectorAll("h2").forEach((item) => {
    scroll(animate(item, { color: "#3153ff" }), {
      target: item,
      duration: 1,
      offset: ["start end", "end start"],
    });
  });
}
