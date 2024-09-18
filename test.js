const input = document.getElementById("qrcodeurl");
const button = document.getElementById("qrcodegenerate");
const image = document.getElementById("qrcodeimage");

button.addEventListener("click", () => {
  QRCode.toDataURL("sehr stark ").then((dataUrl) => {
    console.log(dataUrl);
  });
});
