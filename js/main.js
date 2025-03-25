// document.addEventListener("DOMContentLoaded", () => {
//     const toggleBtn = document.getElementById("darkModeToggle");
  
//     // Load saved theme preference
//     if (localStorage.getItem("theme") === "dark") {
//       document.body.classList.add("dark-mode");
//     }
  
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("dark-mode");
  
//       // Save preference
//       const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
//       localStorage.setItem("theme", theme);
//     });
//   });
  

// document.addEventListener("DOMContentLoaded", () => {
//   // Dark mode toggle logic
//   const toggleBtn = document.getElementById("darkModeToggle");
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark-mode");
//   }
//   toggleBtn?.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
//     localStorage.setItem("theme", theme);
//   });

//   // Section animation logic
//   const animatedSections = document.querySelectorAll('.animate');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target); // Only animate once
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   animatedSections.forEach(section => observer.observe(section));
// });
document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark mode toggle logic
  const toggleBtn = document.getElementById("darkModeToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }

  // ✨ Section animation logic
  const animatedSections = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1
  });

  animatedSections.forEach(section => observer.observe(section));
});
