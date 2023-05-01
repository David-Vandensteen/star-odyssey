import { PlayerGameObject } from '#src/gameObject/player';

let kaboomInstance;

const register = (kaboom) => {
  if (!kaboom) throw new Error('GameScene::Kaboom instance is not provided');
  kaboomInstance = kaboom;
};

export default class GameScene {
  static init(kaboom) {
    register(kaboom);
    PlayerGameObject
      .init(kaboomInstance);
    return GameScene;
  }

  static draw() {
    kaboomInstance
      .scene('game', () => {
        PlayerGameObject
          .draw(120, 80);
      });
    return GameScene;
  }

  static run() {
    kaboomInstance
      .go('game');
    return GameScene;
  }
}

export { GameScene };
