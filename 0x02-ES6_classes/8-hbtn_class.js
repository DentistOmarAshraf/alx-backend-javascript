export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = value;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this.location;
    }
    if (type === 'number') {
      return this.size;
    }
    return `${this.location} ${this.size}`;
  }
}
