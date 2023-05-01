import kaboom from 'kaboom';
import { KaboomSingleton } from '#src/lib/kaboomSingleton';

export default class GameService {
  static init(kaboomOptions) {
    return KaboomSingleton.setInstance(kaboom(kaboomOptions));
  }

  static getKaboom() {
    return KaboomSingleton.getInstance();
  }
}

export { GameService };
