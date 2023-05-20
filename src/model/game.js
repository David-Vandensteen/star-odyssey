export default class Game {
  constructor(kaboomInstance) {
    if (!kaboomInstance) throw new Error('Game::Kaboom instance is not provided');
    this.kaboom = kaboomInstance;
  }
}

export { Game };
