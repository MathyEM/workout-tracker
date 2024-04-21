import Dexie from 'dexie';

export const db = new Dexie('workoutTracker')
db.version(1).stores({
  exercises: 'hash,name,category,type,muscleGroups,notes', // Primary key and indexed props
});