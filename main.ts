import { app, BrowserWindow } from 'electron'
import path from 'path'

import { Server } from './server/app'

let mainWindow: BrowserWindow | null

function CreateWindow() {
  Server()

  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
  })

  mainWindow.loadFile('./client/index.html')

  mainWindow.on('closed', () => {
    mainWindow = null

    app.quit()
  })
}

app.on('ready', CreateWindow)

app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) CreateWindow()
})
