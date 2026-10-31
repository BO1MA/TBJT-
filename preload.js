const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopAPI", {
  isDesktop: true,
  setDisplayMode: (mode) => {
    const allowedModes = ["fullscreen", "borderless", "windowed"];
    if (allowedModes.includes(mode)) {
      ipcRenderer.send("set-display-mode", mode);
    }
  },
  quitApp: () => ipcRenderer.send("quit-app"),
  restartForUpdate: () => ipcRenderer.send("restart-for-update"),
  onUpdateStatus: (callback) => {
    if (typeof callback !== "function") {
      return () => {};
    }

    const listener = (_event, data) => callback(data);
    ipcRenderer.on("update-status", listener);
    return () => ipcRenderer.removeListener("update-status", listener);
  }
});