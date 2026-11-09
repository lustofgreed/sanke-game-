// pixelfx bridge: loads the vendored src/core + the effects used by the game
// (collect-burst, frost-nova, blizzard, power-star, crystal-shard, gem-spin,
// magic-circle-cast, mana-burst, sunburst) and exposes them to the game's
// classic (non-module) script via window.__PIXELFX.
import * as core from "./src/core/index.js";
import * as collectBurst from "./src/fx/pickups/collect-burst.js";
import * as frostNova from "./src/fx/ice/frost-nova.js";
import * as blizzard from "./src/fx/weather/blizzard.js";
import * as powerStar from "./src/fx/pickups/power-star.js";
import * as crystalShard from "./src/fx/pickups/crystal-shard.js";
import * as gemSpin from "./src/fx/pickups/gem-spin.js";
import * as magicCircle from "./src/fx/arcane/magic-circle-cast.js";
import * as manaBurst from "./src/fx/arcane/mana-burst.js";
import * as sunburst from "./src/fx/holy/sunburst.js";
import * as aurora from "./src/fx/weather/aurora.js";

window.__PIXELFX = { core, collectBurst, frostNova, blizzard, powerStar, crystalShard, gemSpin, magicCircle, manaBurst, sunburst, aurora };
