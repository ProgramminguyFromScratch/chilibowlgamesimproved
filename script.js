function populateLinks(targetId, links) {
  const targetDiv = document.getElementById(targetId);

  if (!targetDiv) {
      console.error(`Element with ID "${targetId}" not found.`);
      return;
  }

  // Clear the target div before populating
  targetDiv.innerHTML = '';

  // Create and append links with images
  links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;

      const img = document.createElement('img');
      img.src = link.image; // The `image` property should be added to the link object
      img.alt = link.text; // Fallback text for the image
      img.style.width = "150px"; // Set image dimensions (adjust as needed)
      img.style.height = "100px";

      a.appendChild(img);
      targetDiv.appendChild(a);
  });
}

const bestGames = [
  {href: "polytrack-0.4.1-main", text: "Polytrack", image:"thumbnails/polytrack.jpg"},
  {href: "/flash/?g=fancypants", text: "The Fancy Pants Adventures", image: "thumbnails/fpa.jpg"},
  {href: "/flash/?g=riddleschool", text: "Riddle School", image: "thumbnails/riddle.jpg"},
  {href: "/flash/?g=redball", text: "Red Ball", image: "thumbnails/rb1.jpg"},
  {href: "/flash/?g=redball41", text: "Red Ball 4 Part 1", image: "thumbnails/rb41.jpg"},
  {href: "ovo", text: "OVO", image:"thumbnails/ovo.jpg"},
  {href: "offlineparadise", text: "Offline Paradise", image:"thumbnails/offlineparadise.jpg"},
  {href: "miscgame/EaglercraftX_1.8.html", text: "Minecraft 1.8", image:"thumbnails/minecraft.jpg"},
  {href: "ctr", text: "Cut The Rope", image:"thumbnails/ctr.jpg"},
  {href: "hw", text: "Happy Wheels", image:"thumbnails/happywheels.jpg"},
  {href: "moto-frame/x3m1.html", text: "MotoX3M", image:"thumbnails/motox3m.jpg"},
  {href: "slope", text: "Slope", image:"thumbnails/slope.jpg"},
  {href: "SuperHot", text: "Super Hot", image:"thumbnails/superhot.jpg"},
  {href: "timeshooter1", text: "Time Shooter 1", image:"thumbnails/timeshooter1.jpg"},
  {href: "blockblast", text: "Block Blast", image:"thumbnails/blockblast.jpg"},
  {href: "scratch/Appel.html", text: "Appel", image:"thumbnails/appel.png"},
  {href: "scratch/Snail.html", text: "Snail Platformer", image:"thumbnails/Snail.png"},
  {href: "scratch/SMM4.html", text: "Super Mario Maker 4", image:"thumbnails/SMM4.png"},
]

const flashGames = [
  {href: "/flash/?g=line-rider", text: "Line Rider", image: "thumbnails/line-rider.png"},
  {href: "/flash/?g=alien_hominid", text: "Alien Hominid", image: "thumbnails/alien.jpg"},
  {href: "/flash/?g=age_of_war", text: "Age Of War", image: "thumbnails/ageofwar.jpg"},
  {href: "/flash/?g=apple_shooter", text: "Apple Shooter", image: "thumbnails/apple.jpg"},
  {href: "/flash/?g=asteroids", text: "Asteroids", image: "thumbnails/asteroids.jpg"},
  {href: "/flash/?g=abobos_big_adventure", text: "Abobbos Big Adventure", image: "thumbnails/abobbos.jpg"},
  {href: "/flash/?g=bloxorz", text: "Bloxorz", image: "thumbnails/Bloxorz.jpg"},
  {href: "/flash/?g=bloodyrage", text: "Bloody Rage", image: "thumbnails/BloodyRage.jpg"},
  {href: "/flash/?g=bloonstd", text: "Bloons Tower Defense", image: "thumbnails/btd.jpg"},
  {href: "/flash/?g=bubble-shooter", text: "Bubble Shooter", image: "thumbnails/bubble.jpg"},
  {href: "/flash/?g=collderix", text: "Colliderix", image: "thumbnails/Colliderix.jpg"},
  {href: "/flash/?g=color_combat", text: "Color Combat", image: "thumbnails/color.jpg"},
  {href: "/flash/?g=commando", text: "Commando", image: "thumbnails/comando.jpg"},
  {href: "/flash/?g=cubefield", text: "Cubefield", image: "thumbnails/cube.jpg"},
  {href: "/flash/?g=dadnme", text: "Dad n' Me", image: "thumbnails/dadnme.jpg"},
  {href: "/flash/?g=Donkey_Kong", text: "Donkey Kong", image: "thumbnails/dk.jpg"},
  {href: "/flash/?g=ducklife", text: "Duck Life", image: "thumbnails/dl.jpg"},
  {href: "/flash/?g=ducklife2", text: "Duck Life 2", image: "thumbnails/dl2.jpg"},
  {href: "/flash/?g=ducklife3", text: "Duck Life 3", image: "thumbnails/dl3.jpg"},
  {href: "/flash/?g=defend_castle", text: "Defend Your Castle", image: "thumbnails/defendcastle.jpg"},
  {href: "/flash/?g=duckhunt", text: "Duck Hunt", image: "thumbnails/duckhunt.jpg"},
  {href: "/flash/?g=electricman2", text: "Electricman 2", image: "thumbnails/eman2.jpg"},
  {href: "/flash/?g=breakingthebank", text: "Breaking The Bank", image: "thumbnails/btb.jpg"},
  {href: "/flash/?g=escapingtheprison", text: "Escaping the Prison", image: "thumbnails/etp.jpg"},
  {href: "/flash/?g=InfiltratingtheAirship", text: "Infiltrating the Airship", image: "thumbnails/ita.jpg"},
  {href: "/flash/?g=fleeingthecomplex", text: "Fleeing the Complex", image: "thumbnails/ftc.jpg"},
  {href: "/flash/?g=stealingthediamond", text: "Stealing the Diamond", image: "thumbnails/std.jpg"},
  {href: "/flash/?g=fancypants", text: "The Fancy Pants Adventures", image: "thumbnails/fpa.jpg"},
  {href: "/flash/?g=FPA2", text: "The Fancy Pants Adventures 2", image: "thumbnails/fpa2.jpg"},
  {href: "/flash/?g=FPA3", text: "The Fancy Pants Adventures 3", image: "thumbnails/fpa3.jpg"},
  {href: "/flash/?g=FPAWorldPart1", text: "The Fancy Pants Adventures World 4 Part 1", image: "thumbnails/fpa41.jpg"},
  {href: "/flash/?g=FPAWorldPart2", text: "The Fancy Pants Adventures World 4 Part 2", image: "thumbnails/fpa42.jpg"},
  {href: "/flash/?g=hobo", text: "Hobo", image: "thumbnails/hobo.jpg"},
  {href: "/flash/?g=hobo_prison_brawl", text: "Hobo 2: Prison Brawl", image: "thumbnails/hobo2.jpg"},
  {href: "/flash/?g=learntofly", text: "Learn to Fly", image: "thumbnails/ltf.jpg"},
  {href: "/flash/?g=learn2fly2", text: "Learn to Fly 2", image: "thumbnails/fly2.jpg"},
  {href: "/flash/?g=ltf3", text: "Learn to Fly 3", image: "thumbnails/fly3.jpg"},
  {href: "/flash/?g=miami-shark", text: "Miami Shark", image: "thumbnails/ms.jpg"},
  {href: "/flash/?g=new_york_shark", text: "New York Shark", image: "thumbnails/nys.jpg"},
  {href: "/flash/?g=this_is_the_only_level", text: "This is the Only Level", image: "thumbnails/titol.jpg"},
  {href: "/flash/?g=pacman", text: "Pac-Man", image: "thumbnails/pacman.jpg"},
  {href: "/flash/?g=papaburger", text: "Papa's Burgeria", image: "thumbnails/papa.jpg"},
  {href: "/flash/?g=pong", text: "Pong", image: "thumbnails/PONG.jpg"},
  {href: "/flash/?g=Portal", text: "Portal: The Flash Version", image: "thumbnails/portal.jpg"},
  {href: "/flash/?g=supermario63", text: "Super Mario 63", image: "thumbnails/sm63.jpg"},
  {href: "/flash/?g=supermarioflash.html", text: "Super Mario Flash", image: "thumbnails/smf.jpg"},
  {href: "/flash/?g=mariocombat.html", text: "Mario Combat", image: "thumbnails/mariocombat.jpg"},
  {href: "/flash/?g=Meat_Boy", text: "Meat Boy", image: "thumbnails/meat.jpg"},
  {href: "/flash/?g=miniputt", text: "Mini Putt", image: "thumbnails/miniputt.jpg"},
  {href: "/flash/?g=my_friend_pedro", text: "My Friend Pedro", image: "thumbnails/pedro.jpg"},
  {href: "/flash/?g=gunblood", text: "Gunblood", image: "thumbnails/gunblood.jpg"},
  {href: "/flash/?g=riddleschool", text: "Riddle School", image: "thumbnails/riddle.jpg"},
  {href: "/flash/?g=riddleschool2", text: "Riddle School 2", image: "thumbnails/riddle2.jpg"},
  {href: "/flash/?g=riddleschool3", text: "Riddle School 3", image: "thumbnails/riddle3.jpg"},
  {href: "/flash/?g=rs4", text: "Riddle School 4", image: "thumbnails/riddle4.jpg"},
  {href: "/flash/?g=riddleschool5", text: "Riddle School 5", image: "thumbnails/riddle5.jpg"},
  {href: "/flash/?g=run", text: "Run", image: "thumbnails/run.jpg"},
  {href: "/flash/?g=run2", text: "Run 2", image: "thumbnails/run2.jpg"},
  {href: "/flash/?g=smileyswar", text: "Smile War", image: "thumbnails/smilewars.jpg"},
  {href: "/flash/?g=stickrpg", text: "Stick RPG", image: "thumbnails/stickrpg.jpg"},
  {href: "/flash/?g=tetris", text: "Tetris", image: "thumbnails/tetris.jpg"},
  {href: "/flash/?g=TheImpossibleQuiz", text: "The Impossible Quiz", image: "thumbnails/quiz.jpg"},
  {href: "/flash/?g=theimpossiblequiz2", text: "The Impossible Quiz 2", image: "thumbnails/quiz2.jpg"},
  {href: "/flash/?g=theworldshardestgame", text: "The World's Hardest Game", image: "thumbnails/World'sHardestGame.jpg"},
  {href: "/flash/?g=theworldshardestgame2", text: "The World's Hardest Game 2", image: "thumbnails/whg2.jpg"},
  {href: "/flash/?g=redball", text: "Red Ball", image: "thumbnails/rb1.jpg"},
  {href: "/flash/?g=redball3", text: "Red Ball 3", image: "thumbnails/rb3.jpg"},
  {href: "/flash/?g=redball41", text: "Red Ball 4 Part 1", image: "thumbnails/rb41.jpg"},
  {href: "/flash/?g=redball42", text: "Red Ball 4 Part 2", image: "thumbnails/rb42.jpg"},
  {href: "/flash/?g=redball43", text: "Red Ball 4 Part 3", image: "thumbnails/rb43.jpg"},
  {href: "/flash/?g=RedAndBlueBalls", text: "Red and Blue Balls", image: "thumbnails/rabb.png"},
  {href: "/flash/?g=RedAndBlueBalls2", text: "Red and Blue Balls", image: "thumbnails/rabb2.png"},
  {href: "/flash/?g=RedAndBlueBalls3", text: "Red and Blue Balls", image: "thumbnails/rabb3.png"},
  {href: "/flash/?g=fbwgthe-forest-temple", text: "Fire Boy And Water Girl The Forest Temple", image: "thumbnails/fbwgft.png"},
  {href: "/flash/?g=fbwgthe-light-temple", text: "Fire Boy And Water Girl The Light Temple", image: "thumbnails/fbwglt.png"},
  {href: "/flash/?g=fbwgthe-ice-temple", text: "Fire Boy And Water Girl The Ice Temple", image: "thumbnails/fbwgit.png"},
  {href: "/flash/?g=fbwgthe-cristal-temple", text: "Fire Boy And Water Girl The Cristal Temple", image: "thumbnails/fbwgct.png"},
  {href: "/flash/?g=toss_the_turtle", text: "Toss the Turtle", image: "thumbnails/tossturtle.jpg"},
  {href: "/flash/?g=ultimate_flash_sonic", text: "Ultimate Flash Sonic", image: "thumbnails/sonic.jpg"}
];

const otherGames = [
  {href: "blockblast", text: "Block Blast", image:"thumbnails/blockblast.jpg"},
  {href: "subwaysurfers", text: "Subway Surfers", image:"thumbnails/subwaysurfers.jpg"},
  {href: "jetpackjoyride", text: "Jetpack Joyride", image:"thumbnails/jetpackjoyride.jpg"},
  {href: "offlineparadise", text: "Offline Paradise", image:"thumbnails/offlineparadise.jpg"},
  {href: "ovo", text: "OVO", image:"thumbnails/ovo.jpg"},
  {href: "templerun2", text: "Temple Run 2", image:"thumbnails/templerun2.jpg"},
  {href: "flappy", text: "Flappy Bird", image:"thumbnails/flappy.png"},
  {href: "crossy", text: "Crossy Roads", image:"thumbnails/crossy.jpg"},
  {href: "driftboss", text: "Drift Boss", image:"thumbnails/driftboss.jpg"},
  {href: "stickmanhook", text: "Stickman Hook", image:"thumbnails/stickmanhook.png"},
  {href: "stack", text: "Stack", image:"thumbnails/stack.jpg"},
  {href: "knifehit", text: "Knife Hit", image:"thumbnails/knifehit.jpg"},
  {href: "basketrandom", text: "Basket Random", image:"thumbnails/basketrandom.jpg"},
  {href: "volleyrandom", text: "Volley Random", image:"thumbnails/volleyrandom.jpg"},
  {href: "watermelongame", text: "Watermelon Game", image:"thumbnails/watermelongame.jpg"},
  {href: "thereisnogame", text: "There Is No Game", image:"thumbnails/thereisnogame.jpg"},
  {href: "sandtrix", text: "Sandtrix", image:"thumbnails/sandtrix.jpg"},
  {href: "colorswitch", text: "Color Switch", image:"thumbnails/colorswitch.jpg"},
  {href: "gdlite", text: "Geometry Dash Lite", image:"thumbnails/gdlite.jpg"},
  {href: "SuperHot", text: "Super Hot", image:"thumbnails/superhot.jpg"},
  {href: "timeshooter1", text: "Time Shooter 1", image:"thumbnails/timeshooter1.jpg"},
  {href: "timeshooter2", text: "Time Shooter 2", image:"thumbnails/timeshooter2.jpg"},
  {href: "timeshooter3", text: "Time Shooter 3", image:"thumbnails/timeshooter3.jpg"},
  {href: "miscgame/EaglercraftX_1.8.html", text: "Minecraft 1.8 (Requires Mouse)", image:"thumbnails/minecraft.jpg"},
  {href: "bitlife", text: "Bitlife", image:"thumbnails/bitlife.png"},
  {href: "sausage-flip", text: "Sausage Flip", image:"thumbnails/sausage.png"},
  {href: "slow-roads-main", text: "Slowroads", image:"thumbnails/slowroads.jpg"},
  {href: "polytrack-0.4.1-main", text: "Polytrack", image:"thumbnails/polytrack.jpg"},
  {href: "2048", text: "2048", image:"thumbnails/2048.jpg"},
  {href: "bstars", text: "Basketball Stars", image:"thumbnails/bballstars.jpg"},
  {href: "blackjack", text: "BlackJack", image:"thumbnails/blackjack.jpg"},
  {href: "cookie", text: "Cookie Clicker", image:"thumbnails/cookie.jpg"},
  {href: "ctr", text: "Cut The Rope", image:"thumbnails/ctr.jpg"},
  {href: "FNAF/2", text: "FNAF 2", image:"thumbnails/fnaf2.jpg"},
  {href: "FNAF/3", text: "FNAF 3", image:"thumbnails/fnaf3.jpg"},
  {href: "googdino", text: "Google Dinosaur", image:"thumbnails/dino.jpg"},
  {href: "EdgeSurf", text: "Edge Surf", image:"thumbnails/surf.jpg"},
  {href: "operius", text: "Operius", image:"thumbnails/operius.webp"},
  {href: "googsnake", text: "Google Snake", image:"thumbnails/googlesnake.jpg"},
  {href: "hw", text: "Happy Wheels", image:"thumbnails/happywheels.jpg"},
  {href: "mario", text: "Mari0", image:"thumbnails/mari0.jpg"},
  {href: "minesweep", text: "Minesweeper", image:"thumbnails/minesweeper.jpg"},
  {href: "minecrap", text: "MineCraft (Classic)", image:"thumbnails/minecraftclassic.jpg"},
  {href: "moto-frame/x3m1.html", text: "MotoX3M", image:"thumbnails/motox3m.jpg"},
  {href: "moto-frame/other/moto-x3m-2/", text: "MotoX3M 2", image:"thumbnails/moto2.jpg"},
  {href: "moto-frame/other/moto-x3m-3/", text: "MotoX3M 3", image:"thumbnails/moto3.jpg"},
  {href: "moto-frame/winter/", text: "MotoX3M Winter", image:"thumbnails/motowinter.jpg"},
  {href: "moto-frame/pool-party/", text: "MotoX3M Pool Party", image:"thumbnails/motopool.jpg"},
  {href: "retrobowl", text: "Retro Bowl", image:"thumbnails/retrobowl.jpg"},
  {href: "run3", text: "Run 3", image:"thumbnails/run3.jpg"},
  {href: "slope", text: "Slope", image:"thumbnails/slope.jpg"},
  {href: "sm64", text: "Super Mario 64", image:"thumbnails/sm64.jpg"},
  {href: "wolfen", text: "Wolfenstein 3D", image:"thumbnails/Wolfenstein.jpg"}
];

const scratchGames = [
  {href: "scratch/Appel.html", text: "Appel", image:"thumbnails/appel.png"},
  {href: "scratch/Celeste.html", text: "Celeste", image:"thumbnails/Celeste.png"},
  {href: "scratch/EpicNinja.html", text: "Epic Ninja", image:"thumbnails/EpicNinja.jpg"},
  {href: "scratch/PaperGlider.html", text: "Paper Glider", image:"thumbnails/PaperGlider.png"},
  {href: "scratch/sm2da.html", text: "Super Mario 2D Adventure", image:"thumbnails/sm2da.png"},
  {href: "scratch/SMFS4.html", text: "Super Mario for Scratch 4", image:"thumbnails/SMFS4.png"},
  {href: "scratch/SMM4.html", text: "Super Mario Maker 4", image:"thumbnails/SMM4.png"},
  {href: "scratch/SMoS5.html", text: "Super Mario on Scratch 5", image:"thumbnails/SMoS5.png"},
  {href: "scratch/Submersible.html", text: "Submersible", image:"thumbnails/Submersible.png"},
  {href: "scratch/Snail.html", text: "Snail Platformer", image:"thumbnails/Snail.png"},
];

const emulatedGames = [
  {href: "example/batman.html", text: "Batman (NES)", image:"thumbnails/batman.jpg"},
  {href: "miscgame/dd.html", text: "Double Dragon (NES)", image:"thumbnails/dd.jpg"},
  {href: "example/ducktales.html", text: "Duck Tales (NES)", image:"thumbnails/ducktales.jpg"},
  {href: "example/f13.html", text: "Friday the 13th (NES)", image:"thumbnails/friday13.jpg"},
  {href: "miscgame/megamandos.html", text: "Mega Man 2 (NES)", image:"thumbnails/mm2.jpg"},
  {href: "example/rivercity.html", text: "River City Ransom (NES)", image:"thumbnails/rcr.jpg"},
  {href: "miscgame/mariones.html", text: "Super Mario Bros. (NES)", image:"thumbnails/smb1.jpg"},
  {href: "example/sm2.html", text: "Super Mario Bros. 2 (NES)", image:"thumbnails/smb2.jpg"},
  {href: "example/sm3.html", text: "Super Mario Bros. 3 (NES)", image:"thumbnails/smb3.jpg"},
  {href: "GBA-gh-pages/launcher.html#dkc", text: "Donkey Kong Country (GBA)", image:"thumbnails/dkc.jpg"},
  {href: "GBA-gh-pages/launcher.html#dm", text: "DOOM (GBA)", image:"thumbnails/doom.jpg"},
  {href: "GBA-gh-pages/launcher.html#gta", text: "Grand Theft Auto (GBA)", image:"thumbnails/gta.jpg"},
  {href: "GBA-gh-pages/launcher.html#nbaj", text: "NBA Jam 2002 (GBA)", image:"thumbnails/nbajam.jpg"},
  {href: "GBA-gh-pages/launcher.html#pokemonemerald", text: "Pokemon Emerald (GBA)", image:"thumbnails/pokemonemerald.jpg"},
  {href: "GBA-gh-pages/launcher.html#pokemonred", text: "Pokemon Fire Red (GBA)", image:"thumbnails/PokemonFireRed.jpg"},
  {href: "GBA-gh-pages/launcher.html#pokemongreen", text: "Pokemon Leaf Green (GBA)", image:"thumbnails/PokemonLeafGreen.jpg"},
  {href: "GBA-gh-pages/launcher.html#super_street_fighter_3_alpha", text: "Street Fighter Alpha III (GBA)", image:"thumbnails/sfa3.jpg"},
  {href: "GBA-gh-pages/launcher.html#supermarioadvance2", text: "Super Mario World (GBA)", image:"thumbnails/smw.jpg"}
];

populateLinks("bestGames", bestGames);
populateLinks("flashGames", flashGames);
populateLinks("otherGames", otherGames);
populateLinks("scratchGames", scratchGames);
populateLinks("emulatedGames", emulatedGames);

function filterGames() {
  const searchTerm = document.getElementById('gameSearch').value.toLowerCase();

  const filteredFlashGames = flashGames.filter(game => game.text.toLowerCase().includes(searchTerm));
  const filteredOtherGames = otherGames.filter(game => game.text.toLowerCase().includes(searchTerm));
  const filteredScratchGames = scratchGames.filter(game => game.text.toLowerCase().includes(searchTerm));
  const filteredEmulatedGames = emulatedGames.filter(game => game.text.toLowerCase().includes(searchTerm));

  if (searchTerm != ""){
    populateLinks("bestGames", []);
    document.getElementById("removableTitle").textContent="";
  }else{
    populateLinks("bestGames", bestGames);
    document.getElementById("removableTitle").textContent=" Ian's Favorites ";
  }

  populateLinks("flashGames", filteredFlashGames);
  populateLinks("otherGames", filteredOtherGames);
  populateLinks("scratchGames", filteredScratchGames);
  populateLinks("emulatedGames", filteredEmulatedGames);
}
