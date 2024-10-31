function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const toggleIcon = element.querySelector(".question-button");

  if (answer.classList.contains("hidden-element")) {
    answer.classList.add("visible-element");
    answer.classList.remove("hidden-element");
    toggleIcon.textContent = "-";
  } else {
    answer.classList.remove("visible-element");
    answer.classList.add("hidden-element");
    toggleIcon.textContent = "+";
  }
}

const navigation = document.getElementById("navigation");
const button = document.getElementById("menu-icon");
button.addEventListener("click", function () {
  if (navigation.classList.contains("hidden-element")) {
    navigation.classList.add("visible-element");
    navigation.classList.remove("hidden-element");
  } else {
    navigation.style.display = "none";
  }
});
