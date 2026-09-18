# Desmos Graphing Calculator API Demo — No API Key Included

This repository demonstrates how to embed the Desmos Graphing Calculator API without committing an API key to GitHub.

## How it works

When the page opens, the user enters their own Desmos API key locally in the browser. The key is then used to load the Desmos API dynamically.

The repository itself contains no Desmos API key.

## Features

- Interactive Desmos graphing calculator
- Parabola, sine, circle, and inequality examples
- Two-curve intersection demo
- Reset view
- Clear graph
- Download graph as PNG
- Responsive HTML/CSS/JavaScript interface

## Run locally

You can serve the folder with any simple static web server.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Enter your own Desmos API key when prompted.

## Security note

A Desmos browser API key is necessarily visible in browser network requests while the API is being used. This project simply avoids permanently committing a personal key to a public GitHub repository.

## Files

```text
desmos-graphing-calculator-no-key/
├── index.html
├── style.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## License

The demo source code is MIT licensed. Desmos and the Desmos API remain subject to Desmos' own terms and licensing.
