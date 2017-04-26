const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
