const RPC = require("discord-rpc");
const readline = require("readline");
const client = new RPC.Client({ transport: "ipc" });

const clientId = "1360263885885800489";
RPC.register(clientId);

client.on("ready", () => {
  client.setActivity({
    details: "El is sleeping",
    state: "Do not disturb",
    startTimestamp: new Date(),
    largeImageKey: "pepeslep",
    largeImageText: "Sweet Dreams",
  });

  console.log("- Sleep status is active.");
  console.log("- Press 'Y' to stop the bot.");

  // Setup key listener
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (str, key) => {
    if (key.name.toLowerCase() === "y") {
      console.log("Ending bot...");
      client.destroy();
      process.exit();
    }
  });
});

client.login({ clientId }).catch(console.error);
