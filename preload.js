const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopAPI", {
  isDesktop: true,
  setDisplayMode: (mode) => {
    const allowedModes = ["fullscreen", "borderless", "windowed"];
    if (allowedModes.includes(mode)) {
      ipcRenderer.send("set-display-mode", mode);
    }
  },
  quitApp: () => ipcRenderer.send("quit-app")
});
