// User.js

export class User {
  constructor(name, userId = null) {
    this.name = name;
    this.userId = userId;
    this.dataPersistence = true;
    this.progress = {};
  }

  async saveProgress({ planet, level, score }) {
    throw new Error('saveProgress must be implemented by subclass');
  }

  getType() {
    return 'User';
  }
}
