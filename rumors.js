$(document).ready(function() {
  let rumors = [
    "Bird folk inhabit a monastery that hangs on the side of a plateau many miles up the Olung River, past the Laughing Gorge. The bird folk are holding the last royal heir of Chult as their prisoner.",
    "Deep in the heart of the jungle is a city built by minotaurs. It's now overrun by snake people, but even worse things dwell below. In visions, I have seen strange devils screaming in the dark.",
    "If you head up the Tiryki River about five days by canoe, you'll see a stone spire to the east. Natives call it Firefinger. \"Terror folk\" nest there, and if they spot you, you're in for a fight.",
    "One must purchase a charter of exploration at Fort Beluarian before undertaking any jungle expedition. The Flaming Fist punishes explorers who don't have the required paperwork.",
    "Chult had many kings and queens, but none more beautiful than Queen Zalkoré. Thousands of warriors killed and died for her, but the only memorial of her reign is the garden palace of Nangalore, which lies near the eastern shore of the River Olung, north of Lake Luo.",
    "Chult was once a playground for a green dragon. Her bones mark the location of a hidden treasure trove. If you travel to Mezro and head east across the Laughing Gorge, then south toward Kir Sabal, you might stumble on the dragon's bones and earn yourself a place in the history books!",
    "The city of Mezro was not destroyed during the Spellplague after all. Its ruins are an illusion. I heard a pale-skinned man whisper this to a dinosaur man with a big sword. The dinosaur man smelled like honeysuckle.",
    "Dwarves are determined to reclaim Wyrmheart Mine, but a red dragon lives there now. Haven't seen one of them in a while.",
    "The jungle is full of nature spirits—weird little elemental creatures with masks. They don't speak, and I've never known one to be harmful, but their magical powers should not be taken lightly.",
    "Some city folk were expecting the arrival of a Halruaan airship called the Star Goddess. It never arrived. I bet it crashed in the jungle somewhere.",
    "There are giant snapping turtles in Snapping Turtle Bay. One of them is as big as a house. He's known as King Toba, and his shell has gemstones embedded in it.",
    "The Order of the Gauntlet came here to cleanse the jungle of undead. They lost one of their encampments not too long ago. They're just barely hanging on to another one. I see their emissaries all the time, heading up the River Soshenstar in canoes to get more supplies and templars from Port Nyanzaru.",
    "Watch out for any mist with a blue tinge to it. It spreads a fever that drives people mad.",
    "A dragon turtle named Aremag lives in the Bay of Chult. If you wish to set sail from Port Nyanzaru, you'll need treasure to appease the greedy monster. How much treasure, I can't say. Aremag will tell you what it wants, and you'd best give it what it demands.",
    "A ruined city lies up the River Tath, past Kahakla Gorge. Supposedly, no one's explored past the gorge, but that's not true. It's just that the few who made it out alive mostly keep quiet about what they found there. I have it on good authority that the ruins are guarded by a naga who is both wise and generous.",
    "The great god Ubtao once guided the people of Chult, be he tired of their constant warring and abandoned them. Since then, Chultans have turned to the worship of other gods, some of which were tricksters and deceivers.",
    "Long ago, a peaceful tribe of fisherfolk called the Aldani angered Ubtao by catching and eating all the lobsters in a river. As punishment for their greed, they were all transformed into monsters that dwell in the Aldani Basin.",
    "Perched atop a plateau overlooking the Aldani Basin is a ghost village. All the people there disappeared. No one knows why. You can reach the Aldani Basin by following the River Soshenstar.",
    "The great god Ubtao loved mazes. If you happen upon a maze of any kind, trace a path through it. You will earn Ubtao's favor by doing so."
  ];
  let known_rumors = [];

  function updateRumors() {
    $("#rumors-container").empty();
    if ( known_rumors.length > 0 ) {
      for (r of known_rumors) {
        let cell = $("<td>")
          .html( rumors[r] );
        let row = $("<tr>")
          .append( cell );
        $("#rumors-container")
          .append( row );
      }
    } else {
      let empty_cell = $("<td>")
        .addClass("has-text-centered")
        .html("No rumor known");
      let empty_row = $("<tr>")
        .append( empty_cell );
      $("#rumors-container")
        .append( empty_row );
    }
  }

  // Check if there are rumors
  if ( localStorage.getItem("rumors") ) {
    // If there are, set them
    $("#my-rumors").val( localStorage.getItem("rumors") );
    known_rumors = localStorage.getItem("rumors").split(",");
    console.log( "Known rumors' IDs: " + known_rumors );
  } else {
    // If there aren't, create empty
    $("#my-rumors").val( known_rumors.join() );
    localStorage.setItem("rumors", known_rumors.join() );
  }
  updateRumors();

  $("#learn-rumor").on("click", function() {
    let new_rumor = rndInt(1, 100);
    let new_rumor_id = rumorId( new_rumor );
    while ( known_rumors.includes( new_rumor_id ) ) {
      new_rumor = rndInt(1, 100);
      new_rumor_id = rumorId( new_rumor );
    }
    known_rumors.push( new_rumor_id );
    $("#my-rumors").val( known_rumors.join() );
    localStorage.setItem("rumors", known_rumors.join() );
    updateRumors();
  });
});

function rumorId(i) {
  if (i <= 5) { return 0; }
  else if (i <= 12) { return 1; }
  else if (i <= 17) { return 2; }
  else if (i <= 22) { return 3; }
  else if (i <= 28) { return 4; }
  else if (i <= 33) { return 5; }
  else if (i <= 40) { return 6; }
  else if (i <= 45) { return 7; }
  else if (i <= 50) { return 8; }
  else if (i <= 55) { return 9; }
  else if (i <= 60) { return 10; }
  else if (i <= 65) { return 11; }
  else if (i <= 71) { return 12; }
  else if (i <= 77) { return 13; }
  else if (i <= 82) { return 14; }
  else if (i <= 87) { return 15; }
  else if (i <= 92) { return 16; }
  else if (i <= 96) { return 17; }
  else { return 18; }
}

function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
