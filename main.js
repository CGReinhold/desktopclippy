const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, ipcMain, Menu, Tray } = require('electron');
const { getRandomQuote } = require('./quotes');

let mainWindow = null;
let tray = null;
let interval = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 230,
    height: 210,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    alwaysOnTop: true
  });

  const screenSize = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow.setPosition(screenSize.width - 230, screenSize.height - 210);
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => mainWindow = null);

  setupTray();
  startInterval();
}

const changeAgent = (menuItem) => {
  mainWindow.webContents.send('changeAgent', menuItem.id);
}

const setupTray = () => {
  tray = new Tray(path.join(__dirname, 'assets/tray.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Give me a random quote!', click: showRandomQuote },
    { label: 'Animate! ', click: animate },
    { label: 'Agent', submenu: [
      { label: 'Clippy', id: 'Clippy' , type: 'radio', click: changeAgent, checked: true },
      { label: 'Bonzi', id: 'Bonzi', type: 'radio', click: changeAgent },
      { label: 'F1', id: 'F1', type: 'radio', click: changeAgent },
      { label: 'Genie', id: 'Genie', type: 'radio', click: changeAgent },
      { label: 'Genius', id: 'Genius', type: 'radio', click: changeAgent },
      { label: 'Links', id: 'Links', type: 'radio', click: changeAgent },
      { label: 'Merlin', id: 'Merlin', type: 'radio', click: changeAgent },
      { label: 'Peedy', id: 'Peedy', type: 'radio', click: changeAgent },
      { label: 'Rocky', id: 'Rocky', type: 'radio', click: changeAgent },
      { label: 'Rover', id: 'Rover', type: 'radio', click: changeAgent }
    ]},
    { label: 'Exit', click: () => process.exit() }
  ]);
  tray.setToolTip('Clippy');
  tray.setContextMenu(contextMenu);
}

const startInterval = () => {
  if (!interval) {
    interval = setInterval(() => {
      showRandomQuote();
    }, 600000);
  }
}

const showRandomQuote = () => {
  mainWindow.show();
  mainWindow.webContents.send('message', getRandomQuote());
}

const animate = () => {
  mainWindow.show();
  mainWindow.webContents.send('animate');
}

app.on('ready', createWindow)
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); })
app.on('activate', () => { if (mainWindow === null) createWindow(); })

ipcMain.on('timeout', () => { 
  mainWindow.hide()
  interval = null;
});
