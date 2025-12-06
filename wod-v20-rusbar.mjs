const SYSTEM_ID = "wod-v20-rusbar";
const SYSTEM_NAME = "WoD v20 by RUSBAR";

/**
 * Initialize the WoD v20 by RUSBAR system.
 */
Hooks.once("init", function () {
  console.log(`${SYSTEM_ID} | Initializing ${SYSTEM_NAME} system`);

  // Future system configuration will go here:
  // - Document type registration
  // - System settings
  // - Sheet registration
});

/**
 * Called when the game is ready.
 */
Hooks.once("ready", function () {
  console.log(`${SYSTEM_ID} | ${SYSTEM_NAME} system is ready`);
});
