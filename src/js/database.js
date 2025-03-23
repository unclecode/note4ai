import { openDB, deleteDB } from 'idb';

// Database name constant to ensure consistency
const DB_NAME = 'note4ai-db';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

// Export the store name for use in other modules
export { STORE_NAME };

// Setup and initialize the IndexedDB database
export async function setupDatabase() {
  try {
    console.log(`Setting up database: ${DB_NAME}, version: ${DB_VERSION}`);
    
    // Create a new database
    const db = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db, oldVersion, newVersion, transaction) {
        console.log(`Database upgrade from version ${oldVersion} to ${newVersion}`);
        
        // Check if store exists first
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          console.log(`Creating ${STORE_NAME} store`);
          // Create a store for notes
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('updatedAt', 'updatedAt');
          console.log(`Store ${STORE_NAME} created successfully`);
        } else {
          console.log(`Store ${STORE_NAME} already exists`);
        }
      },
    });
    
    console.log('Database setup complete. Stores:', db.objectStoreNames);

    return {
      // Get a note by id
      async get(storeName, id) {
        try {
          console.log(`Attempting to get ${id} from store ${storeName}`);
          // Verify the store exists
          if (!db.objectStoreNames.contains(storeName)) {
            console.error(`Store ${storeName} does not exist`);
            return null;
          }
          const result = await db.get(storeName, id);
          console.log(`Get operation for ${id} completed`, result ? 'successfully' : 'with no data');
          return result;
        } catch (error) {
          console.error(`Database get operation failed for ${storeName}/${id}:`, error);
          return null;
        }
      },

      // Put a note into the store
      async put(storeName, item) {
        try {
          console.log(`Attempting to put item with id ${item.id} into store ${storeName}`);
          // Verify the store exists
          if (!db.objectStoreNames.contains(storeName)) {
            console.error(`Store ${storeName} does not exist`);
            throw new Error(`Store ${storeName} does not exist`);
          }
          const result = await db.put(storeName, item);
          console.log(`Put operation for ${item.id} completed successfully`);
          return result;
        } catch (error) {
          console.error(`Database put operation failed for ${storeName}:`, error);
          throw error;
        }
      },

      // Delete a note by id
      async delete(storeName, id) {
        try {
          return await db.delete(storeName, id);
        } catch (error) {
          console.error(`Database delete operation failed for ${storeName}/${id}:`, error);
          throw error;
        }
      },

      // Get all notes
      async getAll(storeName) {
        try {
          return await db.getAll(storeName);
        } catch (error) {
          console.error(`Database getAll operation failed for ${storeName}:`, error);
          return [];
        }
      },

      // Clear all notes
      async clear(storeName) {
        try {
          return await db.clear(storeName);
        } catch (error) {
          console.error(`Database clear operation failed for ${storeName}:`, error);
          throw error;
        }
      }
    };
  } catch (error) {
    console.error('Failed to setup database:', error);
    // Return a dummy DB object that won't crash the app but logs errors
    return {
      async get() { console.error('Database not available'); return null; },
      async put() { console.error('Database not available'); },
      async delete() { console.error('Database not available'); },
      async getAll() { console.error('Database not available'); return []; },
      async clear() { console.error('Database not available'); }
    };
  }
}