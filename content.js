chrome.runtime.onMessage.addEventListener((request) => {
  if (request.action === "AUTOFILL_FORM") {
    autofillForm();
  }
});

function autofillForm() {
  const data = {
    name: "Sharvari Jadhav",
    email: "sharvari@example.com",
    phone: "9876543210",
    skills: "JavaScript, HTML, CSS, React, Flask, MySQL"
  };

  fillInput("name", data.name);
  fillInput("email", data.email);
  fillInput("phone", data.phone);
  fillTextarea(data.skills);
}

function fillInput(keyword, value) {
  document.querySelectorAll("input").forEach(input => {
    const attr = (input.name + input.id + input.placeholder).toLowerCase();
    if (attr.includes(keyword)) {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function fillTextarea(value) {
  document.querySelectorAll("textarea").forEach(textarea => {
    textarea.value = value;
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  });
}