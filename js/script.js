document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // SCROLL PROGRESS (SAFE)
  // ==========================
  const progressBar = document.querySelector(".progress-bar");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }

  // ==========================
  // LOOPING LOVE EMOJI
  // ==========================
  const emoji = document.getElementById("love-emoji");

  if (emoji) {
    const text = "💖";

    function typeAndErase() {

      // Type
      let i = 0;
      function type() {
        if (i < text.length) {
          emoji.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, 200);
        } else {
          // Tunggu bentar sebelum erase
          setTimeout(erase, 1200);
        }
      }

      // Erase
      function erase() {
        let current = emoji.innerHTML;
        if (current.length > 0) {
          emoji.innerHTML = current.substring(0, current.length - 1);
          setTimeout(erase, 150);
        } else {
          // Delay sebelum ulang lagi
          setTimeout(typeAndErase, 800);
        }
      }

      type();
    }

    // Delay awal biar title muncul dulu
    setTimeout(typeAndErase, 800);
  }

});
