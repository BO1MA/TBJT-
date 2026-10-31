const { app, BrowserWindow, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");

let mainWindow;

autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

function sendUpdateStatus(status, info = {}) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("update-status", { status, ...info });
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.png"), // أيقونة شريط المهام والنافذة
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.once("ready-to-show", () => {
    autoUpdater.checkForUpdates().catch((error) => {
      sendUpdateStatus("offline", { message: error.message });
    });
  });
}

autoUpdater.on("checking-for-update", () => sendUpdateStatus("checking"));
autoUpdater.on("update-available", (info) => {
  sendUpdateStatus("available", {
    version: info.version,
    releaseNotes: info.releaseNotes
  });
});
autoUpdater.on("update-not-available", (info) => {
  sendUpdateStatus("up-to-date", { version: info.version });
});
autoUpdater.on("download-progress", (progress) => {
  sendUpdateStatus("downloading", { percent: progress.percent });
});
autoUpdater.on("update-downloaded", (info) => {
  sendUpdateStatus("ready", { version: info.version });
});
autoUpdater.on("error", (error) => {
  sendUpdateStatus("offline", { message: error.message });
});

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

ipcMain.on("restart-for-update", () => {
  autoUpdater.quitAndInstall();
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