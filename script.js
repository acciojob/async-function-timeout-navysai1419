//your JS code here. If requir
document.addEventListener("DOMContentLoaded", () => {
  const displayBtn = document.getElementById("displayBtn");
  displayBtn.addEventListener("click", displayTextWithDelay);
});

async function displayTextWithDelay() {
  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;

  // Validate input
  if (!textInput.trim()) {
    alert("Please enter some text!");
    return;
  }

  // Display a loading message
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Loading...";

  try {
    await delay(delayInput); // Wait for the specified delay
    outputDiv.textContent = textInput; // Display the text
  } catch (error) {
    console.error("An error occurred:", error);
    outputDiv.textContent = "An error occurred. Please try again.";
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
