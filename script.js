function speak() {
  const text = document.getElementById("text").value;

  if (text.trim() === "") return;

  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}
