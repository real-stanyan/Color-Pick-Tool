const RegWarningContainer = document.querySelector("#reg_warning_container");
const CloseWarning = document.querySelector("#reg_warning button");

const OutsideBelt = document.querySelector("#outside_belt");
const OutsidePPC = document.querySelector("#outside_ppc");
const InsideBelt = document.querySelector("#inside_belt");
const InsidePPC = document.querySelector("#inside_ppc");

const Inputs = document.querySelectorAll(".inputs");

const OutsideBeltColor = document.querySelector("#outsideBelt_color");
const InsideBeltColor = document.querySelector("#insideBelt_color");
const PPCBorderColor = document.querySelector("#ppcBorder_color");
const PPCBackgroundColor = document.querySelector("#ppc_bgcolor");
const PPCImageColor = document.querySelector("#ppcImage_color");

const OutsideBeltColorDisplay = document.querySelector(
  "#outsideBelt_color_display"
);
const InsideBeltColorDisplay = document.querySelector(
  "#insideBelt_color_display"
);
const PPCBorderColorDisplay = document.querySelector(
  "#ppcBorder_color_display"
);
const PPCBackgroundColorDisplay = document.querySelector(
  "#ppc_bgcolor_display"
);
const PPCImageColorDisplay = document.querySelector("#ppcImage_color_display");

const SaveDesign = document.querySelector("#save_design");
const ChooseColor = document.querySelector("#choose_color");
const ResetColors = document.querySelector("#reset_colors");

const DisplayDesign = document.querySelector("#display_design");
const CloseDisplayDesign = document.querySelector("#display_design div");

// Init Color
OutsideBelt.style.backgroundColor = localStorage.getItem("outsideBeltColorHex");
OutsideBeltColor.value = localStorage.getItem("outsideBeltColorPantone");
OutsideBeltColorDisplay.style.backgroundColor = localStorage.getItem(
  "outsideBeltColorHex"
);
// ----------------
InsideBelt.style.backgroundColor = localStorage.getItem("insideBeltColorHex");
InsideBeltColor.value = localStorage.getItem("insideBeltColorPantone");
InsideBeltColorDisplay.style.backgroundColor =
  localStorage.getItem("insideBeltColorHex");
// ----------------
OutsidePPC.style.borderColor = localStorage.getItem("ppcBorderColorHex");
InsidePPC.style.borderColor = localStorage.getItem("ppcBorderColorHex");
PPCBorderColor.value = localStorage.getItem("ppcBorderColorPantone");
PPCBorderColorDisplay.style.backgroundColor =
  localStorage.getItem("ppcBorderColorHex");
// ----------------
OutsidePPC.style.color = localStorage.getItem("ppcImageColorHex");
PPCImageColor.value = localStorage.getItem("ppcImageColorPantone");
PPCImageColorDisplay.style.backgroundColor =
  localStorage.getItem("ppcImageColorHex");
// ----------------
OutsidePPC.style.backgroundColor = localStorage.getItem(
  "ppcBackgroundColorHex"
);
InsidePPC.style.backgroundColor = localStorage.getItem("ppcBackgroundColorHex");
PPCBackgroundColor.value = localStorage.getItem("ppcBackgroundColorPantone");
PPCBackgroundColorDisplay.style.backgroundColor = localStorage.getItem(
  "ppcBackgroundColorHex"
);
// Outside Belt Color
OutsideBeltColor.addEventListener("blur", (e) => {
  let color = pantoneToHex(e.target.value);
  if (!color) {
    regWarning();
    e.target.value = "";
    return;
  }
  OutsideBelt.style.backgroundColor = color;
  OutsideBeltColorDisplay.style.backgroundColor = color;
  localStorage.setItem("outsideBeltColorHex", color);
  localStorage.setItem("outsideBeltColorPantone", e.target.value);
});

// Inside Belt Color
InsideBeltColor.addEventListener("blur", (e) => {
  let color = pantoneToHex(e.target.value);
  if (!color) {
    regWarning();
    e.target.value = "";
    return;
  }
  InsideBelt.style.backgroundColor = color;
  InsideBeltColorDisplay.style.backgroundColor = color;
  localStorage.setItem("insideBeltColorHex", color);
  localStorage.setItem("insideBeltColorPantone", e.target.value);
});

// PPC Border Color
PPCBorderColor.addEventListener("blur", (e) => {
  let color = pantoneToHex(e.target.value);
  if (!color) {
    regWarning();
    e.target.value = "";
    return;
  }
  OutsidePPC.style.borderColor = color;
  InsidePPC.style.borderColor = color;
  PPCBorderColorDisplay.style.backgroundColor = color;
  localStorage.setItem("ppcBorderColorHex", color);
  localStorage.setItem("ppcBorderColorPantone", e.target.value);
});

// PPC Background Color
PPCBackgroundColor.addEventListener("blur", (e) => {
  let color = pantoneToHex(e.target.value);
  if (!color) {
    regWarning();
    e.target.value = "";
    return;
  }
  OutsidePPC.style.backgroundColor = color;
  InsidePPC.style.backgroundColor = color;
  PPCBackgroundColorDisplay.style.backgroundColor = color;
  localStorage.setItem("ppcBackgroundColorHex", color);
  localStorage.setItem("ppcBackgroundColorPantone", e.target.value);
});

// PPC Image Color
PPCImageColor.addEventListener("blur", (e) => {
  let color = pantoneToHex(e.target.value);
  if (!color) {
    regWarning();
    e.target.value = "";
    return;
  }
  OutsidePPC.style.color = color;
  PPCImageColorDisplay.style.backgroundColor = color;
  localStorage.setItem("ppcImageColorHex", color);
  localStorage.setItem("ppcImageColorPantone", e.target.value);
});

// Enter to Blur
Inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        input.blur();
      }
    });
  });
});

// Reg Warning
function regWarning() {
  RegWarningContainer.style.display = "flex";
  RegWarningContainer.style.animation = "regWarning 0.5s ease-in-out";
}

// Close Warning
CloseWarning.addEventListener("click", () => {
  RegWarningContainer.style.display = "none";
});

SaveDesign.addEventListener("click", () => {
  // alert(
  //   "Haven't finished yet! Please screan shot the 'Outside Look and Inside Look' by your self, THX!."
  // );
  html2canvas(document.querySelector("#display_area")).then((canvas) => {
    document.querySelector("#display_design").appendChild(canvas);
  });
  DisplayDesign.style.display = "flex";
});

CloseDisplayDesign.addEventListener("click", () => {
  const Canvas = document.querySelector("#display_design canvas");
  DisplayDesign.style.display = "none";
  Canvas.remove();
});

ResetColors.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

ChooseColor.addEventListener("click", () => {
  location.href = "colorSpin.html";
});
