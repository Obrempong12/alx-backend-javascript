/**
 * Represents a class constructor for creating a classroom with a max student size.
 */
export default class ClassRoom {
  /**
   * Represents a class constructor for setting the max student size.
   * @param {number} maxStudentsSize - The max number of students allowed in the class.
   */
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new Error('maxStudentSize must be a number');
    }
    if (maxStudentsSize <= 0) {
      throw new Error('maxStudentSize must be greater than 0');
    }

    this._maxStudentsSize = maxStudentsSize;
  }
}
