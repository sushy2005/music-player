const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 360,
    height: 640,
    frame: false, // Hides the native title bar
    resizable: true, // Enables resizing
    transparent: true, // <--- add this
    icon: path.join(__dirname, 'assets', 'icon.ico'), // <--- Add this line
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });
  
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
