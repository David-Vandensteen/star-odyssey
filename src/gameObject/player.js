import { GameObject } from '#src/model/gameObject';

export default class PlayerGameObject extends GameObject {
  loadSprite() {
    this.kaboom.loadSprite('player', 'sprites/neocore.png');
    return this;
  }

  add(x, y) {
    const speed = 320;
    const player = this.kaboom.add([
      this.kaboom.pos(x, y),
      this.kaboom.sprite('player'),
    ]);

    this.kaboom.onKeyDown('up', () => {
      player.move(0, -speed);
    });

    this.kaboom.onKeyDown('down', () => {
      player.move(0, speed);
    });

    this.kaboom.onKeyDown('left', () => {
      player.move(-speed, 0);
    });

    this.kaboom.onKeyDown('right', () => {
      player.move(speed, 0);
    });

    this.kaboom.onClick(() => this.kaboom.addKaboom(this.kaboom.mousePos()));
    return this;
  }
}

export { PlayerGameObject };
