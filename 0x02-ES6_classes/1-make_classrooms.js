import ClassRoom from './0-classroom';

/**
 * Initializes class rooms with a specific number of students
 *
 * This func creates class rooms with a predefined number of maximum students.
 *
 * @returns {Array<ClassRoom>} An array of ClassRoom instances with different
 * max student capacities.
 */
export default function initializeRooms() {
  const maxStudents = [19, 20, 34];

  return maxStudents.map((students) => new ClassRoom(students));
}
