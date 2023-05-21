export default class Game {
  constructor(keyName, kaboomInstance) {
    if (!keyName) throw new Error('Game::KeyName is not provided');
    if (!kaboomInstance) throw new Error('Game::Kaboom instance is not provided');
    this.keyName = keyName;
    this.kaboom = kaboomInstance;
  }
}

export { Game };
