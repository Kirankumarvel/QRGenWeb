function generateQR() {
  const input = document.getElementById("qr-input").value;
  if (!input) return alert("Please enter something!");

  const qr = new QRious({
    element: document.createElement("canvas"),
    value: input,
    size: 250,
    background: 'white',
    foreground: 'black'
  });

  const qrContainer = document.getElementById("qr-code");
  qrContainer.innerHTML = ""; // Clear previous
  qrContainer.appendChild(qr.element);
}
