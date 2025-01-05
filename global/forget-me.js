// ==UserScript==
// @name        Forget Me
// @namespace   Global
// @match       *://*/*
// @grant       GM_registerMenuCommand
// @version     1.0
// @author      benjammin4dayz
// @homepage    https://github.com/benjammin4dayz/userscripts
// @description Clear session storage, local storage, and cookies for the current URL.
// ==/UserScript==
// @ts-check
(() => {
  GM_registerMenuCommand(
    `Clear storage for ${window.location.hostname || "this site"}`,
    clearPageStorage
  );

  function clearPageStorage() {
    sessionStorage?.clear();
    localStorage?.clear();
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
  }
})();
