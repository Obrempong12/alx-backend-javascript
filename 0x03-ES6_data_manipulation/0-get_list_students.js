/**
 * Retrieves a list of students
 *
 * This function returns an array of student objects with their id, first
 * name, and location.
 *
 * @returns {Array} An array of student objects
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
