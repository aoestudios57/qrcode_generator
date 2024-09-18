const input = document.getElementById("qrcodeurl");
const button = document.getElementById("qrcodegenerate");
const image = document.getElementById("qrcodeimage");

button.addEventListener("click", () => {
  QRCode.toDataURL(input.value).then((dataUrl) => {
    console.log(dataUrl);
    qrcodeimage.src = dataUrl;
  });
});
