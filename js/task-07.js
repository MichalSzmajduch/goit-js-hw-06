const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
});
const initialFontSize = "50px";
textElement.style.fontSize = initialFontSize;
fontSizeControl.value = parseInt(initialFontSize);
