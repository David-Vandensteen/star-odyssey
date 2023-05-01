import { GameService } from '#src/service/game';
import { GameScene } from '#src/scene/game';

GameService
  .init();

const kaboom = GameService
  .getKaboom();

GameScene
  .init(kaboom)
  .draw()
  .run();
