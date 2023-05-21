import { GameObject } from '#src/model/gameObject';

export default class NebulaBackgroundFactoryGameObject extends GameObject {
  load() {
    this.kaboom.loadSprite(this.keyName, 'sprites/nebula.jpg');
    return this;
  }

  add() {
    this.kaboom.add([
      this.kaboom.pos(0, 0),
      this.kaboom.sprite(this.keyName),
    ]);

    return this;
  }
}

export { NebulaBackgroundFactoryGameObject };
