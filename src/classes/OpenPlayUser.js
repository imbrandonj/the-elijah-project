// OpenPlayUser.js

import { User } from './User';

export class OpenPlayUser extends User {
  constructor() {
    super('Guest');
    this.dataPersistence = false;
  }

  async saveProgress({ planet, level, score }) {
    console.log(
      `Open play mode: Not saving score for ${planet}, level ${level}: ${score}`
    );
  }

  getType() {
    return 'OpenPlayUser';
  }
}
