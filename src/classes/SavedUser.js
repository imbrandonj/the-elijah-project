// SavedUser.js

import { User } from './User';
import { storeLevelProgress } from '../services/playersService';

export class SavedUser extends User {
  constructor(name, playerId, progress = {}) {
    super(name, playerId);
    this.playerId = playerId;
    this.progress = progress;
  }

  async saveProgress({ planet, level, score, timestamp }) {
    await storeLevelProgress(this.playerId, planet, level, score, timestamp);

    if (!this.progress[planet]) {
      this.progress[planet] = {};
    }

    this.progress[planet][`level${level}`] = score;
  }

  getType() {
    return 'SavedUser';
  }
}
