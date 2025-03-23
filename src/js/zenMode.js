// Setup zen mode functionality
export function setupZenMode(editor) {
  const zenModeToggle = document.getElementById('zenModeToggle');
  const app = document.getElementById('app');
  const mainContent = document.querySelector('main');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const editorElement = document.getElementById('editor');
  let isZenMode = false;
  
  // Create a exit zen mode button
  const exitButton = document.createElement('button');
  exitButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
  exitButton.classList.add('fixed', 'flex', 'justify-center', 'items-center', 'hidden', 'top-2', 'right-2', 'sm:top-4', 'sm:right-4', 'p-1.5', 'sm:p-2', 'rounded-full', 'bg-opacity-30', 'bg-neutral-800', 'text-white', 'hover:bg-opacity-50', 'z-50', 'shadow-md', 'cursor-pointer', 'touch-manipulation');
  exitButton.title = "Exit Zen Mode (Press Esc)";
  exitButton.id = "exitZenModeButton";
  document.body.appendChild(exitButton);
  
  // Ensure exit button works on both click and touch
  exitButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleZenMode();
  });
  
  exitButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleZenMode();
  });
  
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
  
  // Add a tap zone at the bottom of the screen for mobile exit
  const mobileExitZone = document.createElement('div');
  mobileExitZone.classList.add('fixed', 'bottom-0', 'left-0', 'w-full', 'h-16', 'z-50', 'hidden', 'bg-opacity-0');
  mobileExitZone.id = "mobileExitZone";
  mobileExitZone.innerHTML = `
    <div class="w-full text-center text-xs text-white bg-black bg-opacity-20 py-1 rounded-t-lg">
      Tap here to exit Zen Mode
    </div>
  `;
//   document.body.appendChild(mobileExitZone);
  
  mobileExitZone.addEventListener('click', (e) => {
    e.preventDefault();
    if (isZenMode) {
      toggleZenMode();
    }
  });
  
  mobileExitZone.addEventListener('touchend', (e) => {
    e.preventDefault();
    if (isZenMode) {
      toggleZenMode();
    }
  });
  
  // Handle double tap to exit
  let lastTap = 0;
  document.addEventListener('touchend', (e) => {
    if (!isZenMode) return;
    
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    
    if (tapLength < 300 && tapLength > 0) {
      // Double tap detected
      toggleZenMode();
      e.preventDefault();
    }
    
    lastTap = currentTime;
  });
  
  // Toggle zen mode
  function toggleZenMode() {
    isZenMode = !isZenMode;
    
    if (isZenMode) {
      // Enter zen mode
      mainContent.classList.add('zen-mode');
      header.classList.add('hidden');
      footer.classList.add('hidden');
      editorElement.classList.add('rounded-lg', 'p-8');
      exitButton.classList.remove('hidden');
      mobileExitZone.classList.remove('hidden');
      
      // Add special class to body for zen mode
      document.body.classList.add('in-zen-mode');
      
      // Focus the editor
      editor.commands.focus();
      
      // Show help popup for 3 seconds
      showZenModeHelp();
    } else {
      // Exit zen mode
      mainContent.classList.remove('zen-mode');
      header.classList.remove('hidden');
      footer.classList.remove('hidden');
      editorElement.classList.remove('rounded-lg', 'p-8');
      exitButton.classList.add('hidden');
      mobileExitZone.classList.add('hidden');
      
      // Remove special class from body
      document.body.classList.remove('in-zen-mode');
    }
    
    // Update the localStorage
    localStorage.setItem('zenMode', isZenMode ? 'true' : 'false');
  }
  
  // Show a brief help tooltip in zen mode
  function showZenModeHelp() {
    // Create a help tooltip
    const helpTooltip = document.createElement('div');
    helpTooltip.classList.add('fixed', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2',
      'bg-neutral-800', 'bg-opacity-50', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'text-center', 'text-sm',
      'transition-opacity', 'duration-500', 'z-50');
    helpTooltip.innerHTML = `
      <p>You're in Zen Mode</p>
      <p class="text-xs mt-1">Tap the X or double-tap to exit</p>
    `;
    document.body.appendChild(helpTooltip);
    
    // Fade out and remove after 3 seconds
    setTimeout(() => {
      helpTooltip.classList.add('opacity-0');
      setTimeout(() => {
        document.body.removeChild(helpTooltip);
      }, 500);
    }, 1000);
  }
  
  // Check for saved zen mode preference on startup
  const savedZenMode = localStorage.getItem('zenMode') === 'true';
  if (savedZenMode) {
    toggleZenMode();
  }
}