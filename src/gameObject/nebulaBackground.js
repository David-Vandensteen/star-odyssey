import { GameObject } from '#src/model/gameObject';

export default class NebulaBackgroundGameObject extends GameObject {
  loadSprite() {
    this.kaboom.loadSprite('nebula', 'sprites/nebula.jpg');
    return this;
  }

  add() {
    this.kaboom.add([
      this.kaboom.pos(0, 0),
      this.kaboom.sprite('nebula'),
    ]);

    return this;
  }
}

export { NebulaBackgroundGameObject };
