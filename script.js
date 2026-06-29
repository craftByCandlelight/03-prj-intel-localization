// Auto-detect RTL languages safely
function applyRTLIfNeeded() {
  const lang = document.documentElement.lang;
  const rtlLanguages = ["ar", "he", "fa", "ur"];

  if (rtlLanguages.includes(lang)) {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
}

// Run once on load
applyRTLIfNeeded();

// MutationObserver that ONLY reacts when the lang attribute changes
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes" && mutation.attributeName === "lang") {
      applyRTLIfNeeded();
    }
  }
});

// Only watch for changes to the lang attribute
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});
