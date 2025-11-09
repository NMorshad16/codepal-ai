function getAnswer() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const responseBox = document.getElementById("responseBox");
    const copyBtn = document.getElementById("copyBtn");
    let response = "";
  
    if (input.includes("loop")) {
      response = "A loop repeats code. Example:\nfor i in range(5): print(i)";
    } else if (input.includes("sort")) {
      response = "Python sorting example:\narr = [5, 2, 8, 1]\narr.sort()\nprint(arr)";
    } else if (input.includes("function")) {
      response = "Functions are reusable code blocks.\ndef greet():\n  print('Hi')";
    } else if (input.includes("list")) {
      response = "Lists store multiple items:\nmyList = [1, 2, 3]";
    } else if (input.includes("how to code") || input.includes("start coding") || input.includes("what is coding")) {
      response = "Coding means giving instructions to computers. Start with Python or JavaScript.";
    } else if (input.includes("print(")) {
      response = "print('Hello') displays Hello on the screen.";
    } else if (input.includes("for i in range")) {
      response = "This prints numbers 0 to 4.\nfor i in range(5): print(i)";
    } else if (input.includes("if") && input.includes("else")) {
      response = "if...else controls decisions:\nif x > 0:\n  print('Positive')\nelse:\n  print('Not positive')";
    } else if (input.includes("def ")) {
      response = "Defines a function:\ndef hello():\n  print('Hi')";
    } else {
      response = "Sorry, I don’t understand that yet. Try asking about loops, print, list, function, etc.";
    }
  
    typeText(responseBox, response);
    copyBtn.style.display = "inline-block";
  }
  
  function typeText(element, text, delay = 30) {
    element.innerText = "";
    let index = 0;
    const interval = setInterval(() => {
      element.innerText += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, delay);
  }
  
  document.getElementById("copyBtn").addEventListener("click", () => {
    const responseText = document.getElementById("responseBox").innerText;
    navigator.clipboard.writeText(responseText);
    alert("Copied to clipboard!");
  });
  
  document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  document.getElementById("aboutBtn").addEventListener("click", () => {
    alert("Hi, I’m Niaz Morshad. I built this simple app, CodePal, as a personal project to explore AI-assisted coding tools. You can ask it basic programming questions, and it will try to help based on built-in logic. This is just an MVP (Minimum Viable Product), and I plan to improve it further. Thank you for checking it out!");
  });
  