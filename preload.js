
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationAPI: {
    sendNotification(message){
      // console.log(message)
      ipcRenderer.sendSync('notify', message)
    }
  }
})