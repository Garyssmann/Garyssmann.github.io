const initOptions = () => {
  const optionsContainer = document.querySelector(".options");
  const options = document.querySelectorAll(".option");

  optionsContainer.style.setProperty("--total-options", options.length);

  optionsContainer.addEventListener("click", (event) => {
    // if (event.target.classList.contains("option")) {
    //   const activeOption = document.querySelector(".option.active");
    //   activeOption.classList.remove("active");
    //   event.target.classList.add("active");
    // }
    const clickedOption = event.target.closest(".option");
    if (!clickedOption || clickedOption.classList.contains("active")) return;
    options.forEach((option) => option.classList.remove("active"));
    clickedOption.classList.add("active");
  });
};
document.addEventListener("DOMContentLoaded", initOptions);
