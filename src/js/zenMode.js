// Setup zen mode functionality
export function setupZenMode(editor) {
  const zenModeToggle = document.getElementById('zenModeToggle');
  const app = document.getElementById('app');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  let isZenMode = false;
  
  // Toggle zen mode on button click
  zenModeToggle.addEventListener('click', () => {
    toggleZenMode();
  });
  
  // Listen for Escape key to exit zen mode
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isZenMode) {
      toggleZenMode();
    }
  });
  
  // Toggle zen mode
  function toggleZenMode() {
    isZenMode = !isZenMode;
    
    if (isZenMode) {
      // Enter zen mode
      app.classList.add('zen-mode');
      header.classList.add('hidden');
      footer.classList.add('hidden');
      
      // Focus the editor
      editor.commands.focus();
    } else {
      // Exit zen mode
      app.classList.remove('zen-mode');
      header.classList.remove('hidden');
      footer.classList.remove('hidden');
    }
    
    // Update the localStorage
    localStorage.setItem('zenMode', isZenMode ? 'true' : 'false');
  }
  
  // Check for saved zen mode preference on startup
  const savedZenMode = localStorage.getItem('zenMode') === 'true';
  if (savedZenMode) {
    toggleZenMode();
  }
}