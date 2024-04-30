import SQLite from 'react-native-sqlite-storage';

const DATABASE_NAME = 'todo.db';
const TABLE_NAME = 'tasks';

// Open or create the database
const db = SQLite.openDatabase({ name: DATABASE_NAME, location: 'default' });

// Initialize database tables
const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)`,
      [],
      () => console.log(`Table ${TABLE_NAME} created successfully`),
      error => console.error(`Error creating table ${TABLE_NAME}:`, error)
    );
  });
};

// Insert a new task into the database
const insertTask = (task, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO ${TABLE_NAME} (task) VALUES (?)`,
      [task],
      onSuccess,
      onError
    );
  });
};

// Fetch all tasks from the database
const fetchTasks = (onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM ${TABLE_NAME}`,
      [],
      (tx, results) => {
        const tasks = results.rows.raw();
        onSuccess(tasks);
      },
      onError
    );
  });
};

// Delete a task from the database
const deleteTask = (taskId, onSuccess, onError) => {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM ${TABLE_NAME} WHERE id = ?`,
      [taskId],
      onSuccess,
      onError
    );
  });
};

export { initializeDatabase, insertTask, fetchTasks, deleteTask };
