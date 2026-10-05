// ==UserScript==
// @name        osu!direct
// @match       https://osu.ppy.sh/*
// @grant       none
// @version     1.0.0
// @icon        https://osu.ppy.sh/images/favicon/favicon-32x32.png
// @author      benjammin4dayz
// @homepage    https://github.com/benjammin4dayz/userscripts
// @description Activate osu!direct links without being a supporter.
// ==/UserScript==
(() => {
  const findOsuDirect = () =>
    [...document.querySelectorAll("*")]
      .find((el) => el.textContent.trim() === "osu!direct")
      ?.closest("a");

  const activateOsuDirect = () => {
    const link = findOsuDirect();
    if (!link) return;

    const id = document
      .querySelector("base")
      .href.match(/\/beatmapsets\/(\d+)/)[1];

    link.href = `osu://b/${id}`;
  };

  new MutationObserver(activateOsuDirect).observe(document, {
    childList: true,
    subtree: true,
  });

  activateOsuDirect();
})();
