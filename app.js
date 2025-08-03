const translations = {
  en: {
    title: "Hello, Camille🎀",
    description: "This is a sample text that will switch language when you press the button above.",
    action: "Click me"
  },
  th: {
    title: "สวัสดี, Camille🎀",
    description: "นี่คือตัวอย่างข้อความที่จะเปลี่ยนภาษาตามปุ่มด้านบน",
    action: "คลิกฉัน"
  }
};

const switchBtn = document.getElementById("Addons");
let currentLang = "th"; // เริ่มต้นเป็นไทย

function updateText(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // ใส่เอฟเฟกต์จางก่อนเปลี่ยน
      el.classList.add("fade-out");
      setTimeout(() => {
        el.textContent = translations[lang][key];
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
        setTimeout(() => el.classList.remove("fade-in"), 300);
      }, 200);
    }
  });
  // ปรับปุ่มแสดงภาษาตรงข้ามที่จะเปลี่ยนไป
  if (lang === "en") {
    switchBtn.textContent = "🌐 ไทย";
    switchBtn.setAttribute("data-lang", "th");
  } else {
    switchBtn.textContent = "🌐 English";
    switchBtn.setAttribute("data-lang", "en");
  }
  currentLang = lang;
}

// เมื่อคลิกสลับภาษา
switchBtn.addEventListener("click", () => {
  const target = switchBtn.getAttribute("data-lang");
  updateText(target);
});

// เริ่มต้นแสดงตาม currentLang
updateText(currentLang);
