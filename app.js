(() => {
  "use strict";

  const apiKeyInput = document.getElementById("apiKeyInput");
  const loadBtn = document.getElementById("loadBtn");
  const keyForm = document.getElementById("keyForm");
  const keyStatus = document.getElementById("keyStatus");
  const keyPanel = document.getElementById("keyPanel");
  const calculatorCard = document.getElementById("calculatorCard");
  const calculatorEl = document.getElementById("calculator");
  const statusEl = document.getElementById("status");

  let calculator = null;

  keyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
      keyStatus.textContent = "Please enter a Desmos API key.";
      return;
    }

    loadDesmos(apiKey);
  });

  function loadDesmos(apiKey) {
    loadBtn.disabled = true;
    loadBtn.textContent = "Loading…";
    keyStatus.textContent = "Loading the Desmos API…";

    const script = document.createElement("script");
    script.src =
      "https://www.desmos.com/api/v1.12/calculator.js?apiKey=" +
      encodeURIComponent(apiKey);

    script.onload = () => initializeCalculator();
    script.onerror = () => {
      loadBtn.disabled = false;
      loadBtn.textContent = "Load calculator";
      keyStatus.textContent = "Desmos API could not be loaded. Check your key and connection, then retry.";
      script.remove();
    };

    document.head.appendChild(script);
  }

  function initializeCalculator() {
    if (
      typeof window.Desmos === "undefined" ||
      typeof window.Desmos.GraphingCalculator !== "function"
    ) {
      loadBtn.disabled = false;
      loadBtn.textContent = "Load calculator";
      keyStatus.textContent = "GraphingCalculator is not available for this API key.";
      return;
    }

    apiKeyInput.value = "";
    calculatorCard.classList.remove("hidden");
    keyPanel.classList.add("hidden");

    calculator = window.Desmos.GraphingCalculator(calculatorEl, {
      expressions: true,
      keypad: true,
      settingsMenu: true,
      zoomButtons: true,
      pointsOfInterest: true
    });

    calculator.setMathBounds({
      left: -10,
      right: 10,
      bottom: -7,
      top: 7
    });

    calculator.setExpression({
      id: "start",
      latex: "y=x^2"
    });

    statusEl.textContent = "Calculator ready.";

    bindControls();
  }

  function bindControls() {
    document.querySelectorAll(".example-btn").forEach((button, index) => {
      button.addEventListener("click", () => {
        calculator.setExpression({
          id: "example-" + index,
          latex: button.dataset.latex
        });
        statusEl.textContent = button.textContent + " graph added. Select Clear to start fresh.";
      });
    });

    document.getElementById("intersectionDemoBtn").addEventListener("click", () => {
      calculator.setBlank();

      calculator.setExpression({
        id: "curve-1",
        latex: "y=x^2"
      });

      calculator.setExpression({
        id: "curve-2",
        latex: "y=2x+3"
      });

      calculator.setMathBounds({
        left: -5,
        right: 5,
        bottom: -3,
        top: 12
      });

      statusEl.textContent =
        "Intersection demo loaded. Click the gray intersection points.";
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
      calculator.setMathBounds({
        left: -10,
        right: 10,
        bottom: -7,
        top: 7
      });
      statusEl.textContent = "Default view restored; expressions are still on the graph.";
    });

    document.getElementById("clearBtn").addEventListener("click", () => {
      calculator.setBlank();
      statusEl.textContent = "Graph cleared.";
    });

    document.getElementById("downloadBtn").addEventListener("click", () => {
      calculator.asyncScreenshot(
        {
          width: 1600,
          height: 1000,
          targetPixelRatio: 2,
          showLabels: true,
          format: "png"
        },
        (dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "desmos-graph.png";
          document.body.appendChild(link);
          link.click();
          link.remove();
          statusEl.textContent = "PNG downloaded.";
        }
      );
    });
  }
})();
