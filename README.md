# QRGenWeb – Online QR Code Generator 🌐🔳

QRGenWeb is a lightweight, responsive web application that lets users instantly generate and download QR codes from any text or URL. Built using HTML, CSS, and JavaScript, this tool requires no backend and is perfect for deploying on platforms like **Netlify**.

## 🚀 Features

- ✏️ Enter any URL or text to generate a QR code.
- 📸 Instant QR code rendering with smooth canvas support.
- 📥 One-click download as PNG.
- 🌐 100% client-side – no data is sent to a server.
- 🎯 Mobile-friendly and fast.

## 🔧 Tech Stack

- **HTML5** – Page structure
- **CSS3** – Styling and layout (customizable)
- **JavaScript (ES6)** – Logic for QR generation and download
- **[QRious.js](https://github.com/neocotic/qrious)** – Lightweight JavaScript library to generate QR codes

## 📁 Project Structure

```

QRGenWeb/
├── index.html               # Main HTML file
├── style.css                # CSS styling (optional but recommended)
└── README.md                # This file

````

## 🧠 How It Works

- The app uses the `qrious` library to generate a QR code on a `<canvas>` element.
- Users can download the QR image using `toDataURL()` and a hidden anchor tag.

## 🌐 How to Use

1. 🔗 Visit the [Live Demo](https://qrgenweb01.netlify.app/) .
2. 📝 Enter a URL or any text.
3. 🧾 Click “Generate QR Code”.
4. 💾 Click “Download QR” to save it as a PNG image.

## 🛠 Local Development

1. Clone this repository:

```bash
git clone https://github.com/Kirankumarvel/QRGenWeb.git
cd QRGenWeb
````

2. Open `index.html` in your browser.

3. Optional: Modify styles in `style.css`.

## ☁️ Deployment (Netlify)

1. Go to [Netlify](https://netlify.com/).
2. Click “New site from Git” or drag and drop your folder.
3. Deploy 🚀 — No build command needed!

## 📦 Dependencies

* [QRious.js CDN](https://cdnjs.com/libraries/qrious)

You don’t need to install anything manually – the CDN is included in the `index.html`.

## 📸 Screenshot

>
> ![image](https://github.com/user-attachments/assets/baa80dcd-ea41-48de-97fb-f2fcfdf7ccb4)


## 📄 License

MIT License © 2025 \ Kiran Kumar V
---

Made with 💻 + ❤️ for QR enthusiasts!

```


