// User.js

export class User {
  consructor(name) {
    this.name = name;
    this.userId = userId;
    this.dataPersistence = true;
    this.progress = {};
  }

  saveProgress({ planet, level, score }) {
    throw new Error('saveProgress must be implemented by subclass');
  }

  getType() {
    return 'User';
  }
}
