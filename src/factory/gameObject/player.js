import { GameObject } from '#src/model/gameObject';

export default class PlayerFactoryGameObject extends GameObject {
  #player;

  load() {
    this.kaboom.loadSprite(this.keyName, 'sprites/neocore.png');
    return this;
  }

  #eventRegister() {
    const speed = 320;

    this.kaboom.onKeyDown('up', () => {
      this.#player.move(0, -speed);
    });

    this.kaboom.onKeyDown('down', () => {
      this.#player.move(0, speed);
    });

    this.kaboom.onKeyDown('left', () => {
      this.#player.move(-speed, 0);
    });

    this.kaboom.onKeyDown('right', () => {
      this.#player.move(speed, 0);
    });

    this.kaboom.onClick(() => this.kaboom.addKaboom(this.kaboom.mousePos()));
    return this;
  }

  add(x, y) {
    this.#player = this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.sprite(this.keyName),
    ]);
    this.#eventRegister();
    return this;
  }
}

export { PlayerFactoryGameObject };
