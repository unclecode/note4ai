import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { setupDatabase, STORE_NAME } from './database.js';
import { setupThemeToggle } from './theme.js';
import { setupZenMode } from './zenMode.js';

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize database
  const db = await setupDatabase();
  
  // Initialize the editor
  const editor = new Editor({
    element: document.querySelector('#editor'),
    extensions: [StarterKit],
    content: '<p>Welcome to Note4AI! Start typing here...</p>',
    autofocus: true,
    onUpdate: ({ editor }) => {
      // Save content to IndexedDB when it changes
      saveContent(editor.getHTML(), db);
      updateStatus('Saving...');
    },
  });

  // Set up theme toggle
  setupThemeToggle();
  
  // Set up zen mode
  setupZenMode(editor);
  
  // Load saved content on startup
  loadContent(editor, db);
});

// Save content to IndexedDB
async function saveContent(content, db) {
  try {
    const timestamp = new Date().toISOString();
    await db.put(STORE_NAME, {
      id: 'main-note',
      content,
      updatedAt: timestamp
    });
    
    // Update status with a small delay to show saving
    setTimeout(() => {
      updateStatus('Saved');
    }, 500);
  } catch (error) {
    console.error('Error saving content:', error);
    updateStatus('Error saving');
  }
}

// Load content from IndexedDB
async function loadContent(editor, db) {
  try {
    updateStatus('Loading...');
    const note = await db.get(STORE_NAME, 'main-note');
    if (note) {
      editor.commands.setContent(note.content);
      updateStatus('Loaded');
      
      // Update status with a small delay to show loading completed
      setTimeout(() => {
        updateStatus('Ready');
      }, 500);
    } else {
      // First time use - no saved note yet
      updateStatus('Ready');
    }
  } catch (error) {
    console.error('Error loading content:', error);
    updateStatus('Error loading');
    
    // Continue with default content on error
    setTimeout(() => {
      updateStatus('Ready');
    }, 500);
  }
}

// Update the status message in the footer
function updateStatus(message) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
}