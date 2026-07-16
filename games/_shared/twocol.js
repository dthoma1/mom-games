/* ==========================================================================
   Shared two-column lesson layout for Mom's Arcade games (behaviour).
   Restructures the common game skeleton at runtime so we don't have to
   hand-edit every game's bespoke DOM:
     1. Build a #topbar with Classroom (left) + language picker (right).
     2. Wrap the lesson text, progress bar and step counter in a left
        #lessonCol; the rest of the play container becomes the game on the
        right (marked with the .twocol class).
   Two skeletons are supported: #mainView + #banner (most games) and
   #lessonView + #stage (e.g. trackpad-game). Games keep their own
   progression logic untouched; any game that populates #lessonNav shows
   Previous / Next there.
   ========================================================================== */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
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

    if (document.getElementById("lessonCol")) return;

    /* 2) figure out the play container + lesson-text vs game area ------ */
    var container, keepAsGame;
    var mv = document.getElementById("mainView");
    var banner = document.getElementById("banner");
    var lv = document.getElementById("lessonView");
    var stage = document.getElementById("stage");

    if (mv && banner && banner.parentNode === mv) {
      container = mv;
      keepAsGame = null; // game area = everything except the lesson column
    } else if (lv && stage && stage.parentNode === lv) {
      container = lv;
      keepAsGame = stage; // keep #stage on the right; move the rest into the column
    } else {
      return; // unknown skeleton: top bar only
    }

    var col = document.createElement("div");
    col.id = "lessonCol";
    container.insertBefore(col, container.firstChild);

    // Move the lesson-text nodes into the left column.
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
