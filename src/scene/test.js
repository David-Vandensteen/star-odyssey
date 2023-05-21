import { GameScene } from '#src/model/gameScene';
import { PlayerFactoryGameObject } from '#src/factory/gameObject/player';
import { BulletFactoryGameObject } from '#src/factory/gameObject/bullet';
import { NebulaBackgroundFactoryGameObject } from '#src/factory/gameObject/nebulaBackground';

const keyName = 'scene::test';

export default class TestScene extends GameScene {
  constructor(kaboom) {
    super(keyName, kaboom);
    this.background = new NebulaBackgroundFactoryGameObject('object::nebula', this.kaboom);
    this.player = new PlayerFactoryGameObject('object::player', this.kaboom);
    this.bullet = new BulletFactoryGameObject('object::bullet', this.kaboom);
  }

  load() {
    this.background.load();
    this.player.load();
    this.bullet.load();
    return this;
  }

  add() {
    this.kaboom.scene(keyName, () => {
      this.background.add();
      this.player.add(120, 120);
      this.bullet.add(130, 120);
    });
    return this;
  }

  go() {
    this.kaboom.go(keyName);
    return this;
  }
}

export { TestScene };
