/* ==========================================================================
   Shared two-column lesson layout for Mom's Arcade games (behaviour).
   Restructures the common game skeleton at runtime so we don't have to
   hand-edit every game's bespoke DOM:
     1. Build a #topbar with Classroom (left) + language picker (right).
     2. Wrap the lesson text, progress bar and step counter in a left
        .lessonCol; the rest of the play container becomes the game on the
        right (marked with the .twocol class).
   Three containers are handled, whichever a game shows:
     - #introView (welcome/story screen): title + text + buttons on the
       left, the big illustration (#introArt) on the right.
     - #mainView + #banner (most games): banner text on the left, the
       interactive game on the right.
     - #lessonView + #stage (e.g. trackpad-game): everything but #stage on
       the left, #stage on the right.
   Games keep their own progression logic untouched; any game that
   populates #lessonNav shows Previous / Next there.
   ========================================================================== */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function newCol() {
    var col = document.createElement("div");
    col.className = "lessonCol";
    return col;
  }

  ready(function () {
    var app = document.getElementById("app");
    if (!app || app.dataset.twocol === "1") return;
    app.dataset.twocol = "1";

    /* 1) top bar ------------------------------------------------------- */
    var home = document.getElementById("homeBtn");
    var lang = document.getElementById("langToggle");
    if (home && lang && !document.getElementById("topbar")) {
      var bar = document.createElement("div");
      bar.id = "topbar";
      app.insertBefore(bar, app.firstChild);
      bar.appendChild(home);
      bar.appendChild(lang);
    }

    /* 2) intro / welcome screen --------------------------------------- */
    var iv = document.getElementById("introView");
    var art = document.getElementById("introArt");
    if (iv && art && art.parentNode === iv && !iv.classList.contains("twocol")) {
      var icol = newCol();
      iv.insertBefore(icol, iv.firstChild);
      Array.prototype.slice.call(iv.children).forEach(function (ch) {
        if (ch === icol || ch === art) return;
        icol.appendChild(ch); // title, text, buttons -> left; #introArt stays right
      });
      iv.classList.add("twocol");
    }

    /* 3) main lesson / play container --------------------------------- */
    var mv = document.getElementById("mainView");
    var banner = document.getElementById("banner");
    var lv = document.getElementById("lessonView");
    var stage = document.getElementById("stage");

    var container, keepAsGame;
    if (mv && banner && banner.parentNode === mv) {
      container = mv;
      keepAsGame = null; // game area = everything except the lesson column
    } else if (lv && stage && stage.parentNode === lv) {
      container = lv;
      keepAsGame = stage; // keep #stage on the right; move the rest into the column
    } else {
      return; // unknown skeleton: top bar (+ intro) only
    }
    if (container.classList.contains("twocol")) return;

    var col = newCol();
    container.insertBefore(col, container.firstChild);

    Array.prototype.slice.call(container.children).forEach(function (ch) {
      if (ch === col || ch === keepAsGame) return;
      if (keepAsGame) {
        col.appendChild(ch); // lessonView: everything but #stage is lesson text
      } else if (ch.id === "banner") {
        col.appendChild(ch); // mainView: only the banner is lesson text
      }
    });

    // Progress bar + step counter live in the header; pull them in too.
    var pw = document.getElementById("progressWrap");
    var stx = document.getElementById("stepText");
    if (pw) col.appendChild(pw);
    if (stx) col.appendChild(stx);

    var nav = document.createElement("div");
    nav.id = "lessonNav";
    col.appendChild(nav);

    container.classList.add("twocol");
  });
})();
