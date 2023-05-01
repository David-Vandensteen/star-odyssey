let kaboomInstance;

const register = (kaboom) => {
  if (!kaboom) throw new Error('PalyerGameObject::Kaboom instance is not provided');
  kaboomInstance = kaboom;
};

export default class PlayerGameObject {
  static init(kaboom) {
    register(kaboom);
    const { loadSprite } = kaboomInstance;
    loadSprite('player', 'sprites/neocore.png');
    return PlayerGameObject;
  }

  static draw(x, y) {
    const {
      add,
      pos,
      sprite,
      onKeyDown,
      onClick,
      addKaboom,
      mousePos,
    } = kaboomInstance;

    const speed = 320;

    const player = add([
      pos(x, y),
      sprite('player'),
    ]);

    onKeyDown('up', () => {
      player.move(0, -speed);
    });

    onKeyDown('down', () => {
      player.move(0, speed);
    });

    onKeyDown('left', () => {
      player.move(-speed, 0);
    });

    onKeyDown('right', () => {
      player.move(speed, 0);
    });

    onClick(() => addKaboom(mousePos()));
    return PlayerGameObject;
  }
}

export { PlayerGameObject };
