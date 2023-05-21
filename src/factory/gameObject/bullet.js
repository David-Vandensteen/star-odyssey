import { GameObject } from '#src/model/gameObject';

export default class BulletFactoryGameObject extends GameObject {
  #bullet;

  load() {
    this.kaboom.loadSprite(this.keyName, 'sprites/bullet.png');
    return this;
  }

  #eventRegister() {
    const speed = 320;
    this.#bullet.onUpdate(() => {
      this.#bullet.move(speed, 0);
    });
    return this;
  }

  add(x, y) {
    this.#bullet = this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.sprite(this.keyName),
    ]);
    this.#eventRegister();
    return this;
  }
}

export { BulletFactoryGameObject };
