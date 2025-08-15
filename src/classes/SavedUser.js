// SavedUser.js

import { User } from './User';
import { storeLevelProgress } from '../services/playersService';

export class SavedUser extends User {
  constructor(name, playerId, progress = {}) {
    super(name, playerId);
    this.playerId = playerId;
    this.progress = progress;
    this.dataPersistence = true;
  }

  async saveProgress({ planet, level, score }) {
    await storeLevelProgress(this.playerId, planet, level, score);

    if (!this.progress[planet]) {
      this.progress[planet] = {};
    }

    this.progress[planet][`level${level}`] = score;
  }

  getType() {
    return 'SavedUser';
  }
}
