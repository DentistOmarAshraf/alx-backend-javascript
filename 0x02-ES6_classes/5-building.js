export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    // Check method if is in class extends Building
    const checkMethod = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    if (!('evacuationWarningMessage' in checkMethod)
        && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
