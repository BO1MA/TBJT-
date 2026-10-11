const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 1280,
    minHeight: 720,
    fullscreen: true,
    fullscreenable: true,
    simpleFullscreen: false,
    autoHideMenuBar: true,
    backgroundColor: "#020a12",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
}

ipcMain.on("set-display-mode", (_event, mode) => {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return;
  }

  if (mode === "fullscreen") {
    mainWindow.setSimpleFullScreen(false);
    mainWindow.setFullScreen(true);
  } else if (mode === "borderless") {
    mainWindow.setFullScreen(false);
    mainWindow.setSimpleFullScreen(false);
    mainWindow.maximize();
  } else if (mode === "windowed") {
    mainWindow.setFullScreen(false);
    mainWindow.setSimpleFullScreen(false);
    mainWindow.unmaximize();
    mainWindow.setSize(1280, 720);
    mainWindow.center();
  }
});

ipcMain.on("quit-app", () => {
  app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
