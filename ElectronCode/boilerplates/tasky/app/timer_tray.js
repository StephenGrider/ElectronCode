const electron = require('electron');
const { Tray } = electron;

class TimerTray extends Tray {
  constructor(iconPath) {
    super(iconPath);
  }
}

module.exports = TimerTray;
