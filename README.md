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

## Try the showcase

1. Get your own key from [Desmos API](https://www.desmos.com/my-api), then start the local server below and open `http://localhost:8000`.
2. Enter the key and load the calculator. The first graph is `y=x²`.
3. Select **Intersection demo**. Click the two gray points where `y=x²` and `y=2x+3` cross. You should see **(-1, 1)** and **(3, 9)**.
4. Select **Clear**, then add **Circle** and **Inequality** to explore an implicit curve and a shaded region. Each example button adds or updates its graph; it does not clear the others.
5. Select **Download PNG** to save the current graph. **Reset view** only restores the default window; **Clear** removes the expressions.

| Showcase moment | What it demonstrates for MathVisualLab |
| --- | --- |
| Intersection demo | Explore where two graphs meet and inspect their coordinates. |
| Circle and inequality | Go beyond single function plots to implicit relations and shaded solutions. |
| PNG download | Take a graph image into a lesson, worksheet, or post. |

This is a static API demonstration, not a step-by-step equation solver. The examples and PNG feature depend on the capabilities of the API key used. Before using this integration on MathVisualLab, check the [Desmos API plans](https://help.desmos.com/hc/en-us/articles/49078363315725-API-Plans-for-Commercial-Use) for the needed programmatic graph and screenshot methods.

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

The key is not committed, stored in browser storage, or sent to this static demo server by the app code. The browser includes it in a request to Desmos when loading `calculator.js`, so it is visible in that request and should not be treated as a secret. The input is cleared after the calculator loads. Use a key authorized for your intended use.

## Files

```text
desmos-graphing-calculator-api-demo/
├── index.html
├── style.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## License

The demo source code is MIT licensed. Desmos and the Desmos API remain subject to Desmos' own terms and licensing.
