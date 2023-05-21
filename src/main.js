import { GameService } from '#src/service/game';
import { TestScene } from '#src/scene/test';

GameService
  .init();

const kaboom = GameService
  .getKaboom();

new TestScene(kaboom)
  .load()
  .add()
  .go();
