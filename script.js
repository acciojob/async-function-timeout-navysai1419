document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  } else {
    console.error("Form element not found!");
  }
});

async function handleSubmit(event) {
  event.preventDefault();

  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;

  // Validate input
  if (!textInput.trim()) {
    alert("Please enter some text!");
    return;
  }

  // Display a loading message
  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    outputDiv.textContent = "Loading...";
  } else {
    console.error("Output element not found!");
    return;
  }

  try {
    await delay(parseInt(delayInput)); // Wait for the specified delay
    outputDiv.textContent = textInput; // Display the text
  } catch (error) {
    console.error("An error occurred:", error);
    outputDiv.textContent = "An error occurred. Please try again.";
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
