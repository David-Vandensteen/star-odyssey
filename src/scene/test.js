import { GameScene } from '#src/model/gameScene';
import { PlayerGameObject } from '#src/gameObject/player';

export default class TestScene extends GameScene {
  constructor(kaboom) {
    super(kaboom);
    this.player = new PlayerGameObject(this.kaboom);
  }

  loadSprite() {
    this.player.loadSprite();
    return this;
  }

  add() {
    this.kaboom.scene('game', () => {
      this.player.add(120, 120);
    });
    return this;
  }

  go() {
    this.kaboom.go('game');
    return this;
  }
}

export { TestScene };
