const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', () => {
  
});
