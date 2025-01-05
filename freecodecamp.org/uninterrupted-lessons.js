// ==UserScript==
// @name        Uninterrupted Lessons
// @match       https://www.freecodecamp.org/*
// @grant       none
// @version     1.1
// @icon        https://www.freecodecamp.org/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7
// @author      benjammin4dayz
// @homepage    https://github.com/benjammin4dayz/userscripts
// @description Avoid badgering from the donation request modal during lessons.
// ==/UserScript==
// @ts-check
(() => {
  setInterval(() => {
    // Do not exceed maximum unsaved challenge range of ~= 10
    const completedChallenges = sessionStorage.getItem(
      "session-completed-challenges"
    );
    if (completedChallenges) {
      sessionStorage.setItem(
        "saved-session-completed-challenges",
        completedChallenges
      );
    }

    // Simulate minimum view time elapsed
    const now = String(Date.now() - 30000);
    localStorage.setItem("lo-non-moc-membership-upsell|dismissed-at", now);
    sessionStorage.setItem("modalShownTimestamp", now);
  }, Math.floor(Math.random() * 50000 + 10000));
})();
