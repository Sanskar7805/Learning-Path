// Example JavaScript for interactivity
document.querySelectorAll('.time-filters button').forEach(button => {
    button.addEventListener('click', () => {
      alert(`Filter applied: ${button.textContent}`);
    });
  });