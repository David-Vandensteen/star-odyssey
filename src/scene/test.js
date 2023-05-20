import { GameScene } from '#src/model/gameScene';
import { PlayerGameObject } from '#src/gameObject/player';
import { NebulaBackgroundGameObject } from '#src/gameObject/nebulaBackground';

export default class TestScene extends GameScene {
  constructor(kaboom) {
    super(kaboom);
    this.player = new PlayerGameObject(this.kaboom);
    this.background = new NebulaBackgroundGameObject(this.kaboom);
  }

  loadSprite() {
    this.background.loadSprite();
    this.player.loadSprite();
    return this;
  }

  add() {
    this.kaboom.scene('test', () => {
      this.background.add();
      this.player.add(120, 120);
    });
    return this;
  }

  go() {
    this.kaboom.go('test');
    return this;
  }
}

export { TestScene };
