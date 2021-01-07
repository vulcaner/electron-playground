(this["webpackJsonpelectron-playground"]=this["webpackJsonpelectron-playground"]||[]).push([[22,122,123,124,127,129,132,135],{1333:function(n,e,t){n.exports=["## \u4e0b\u8f7d\u7ba1\u7406\u5668\n\n\u70b9\u51fb\u201c\u8bd5\u4e00\u8bd5\u201d\u6309\u94ae\u4f53\u9a8c\u4e00\u4e0b\u3002\n\n```js\n// @@code-renderer: runner\n// @@code-props: {hideRight: true, mProcess: false}\nconst {ipcRenderer} = require('electron')\nipcRenderer.invoke('openDownloadManager', '/download-manager/demo')\n```\n\n\u6587\u4ef6\u4e0b\u8f7d\u662f\u6211\u4eec\u5f00\u53d1\u4e2d\u6bd4\u8f83\u5e38\u89c1\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u6bd4\u5982\uff1a\u5bfc\u51fa excel\u3002\n\nweb \u5e94\u7528\u6587\u4ef6\u4e0b\u8f7d\u5b58\u5728\u4e00\u4e9b\u5c40\u9650\u6027\uff0c\u901a\u5e38\u662f\u8ba9\u540e\u7aef\u5c06\u54cd\u5e94\u7684\u5934\u4fe1\u606f\u6539\u6210 `Content-Disposition: attachment; filename=xxx.pdf`\uff0c\u89e6\u53d1\u6d4f\u89c8\u5668\u7684\u4e0b\u8f7d\u884c\u4e3a\u3002\n\n\u5728 electron \u4e2d\u7684\u4e0b\u8f7d\u884c\u4e3a\uff0c\u90fd\u4f1a\u89e6\u53d1 session \u7684 [will-download](https://www.electronjs.org/docs/api/session#instance-events) \u4e8b\u4ef6\u3002\u5728\u8be5\u4e8b\u4ef6\u91cc\u9762\u53ef\u4ee5\u83b7\u53d6\u5230 [downloadItem](https://www.electronjs.org/docs/api/download-item) \u5bf9\u8c61\uff0c\u901a\u8fc7 [downloadItem](https://www.electronjs.org/docs/api/download-item) \u5bf9\u8c61\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u6587\u4ef6\u4e0b\u8f7d\u7ba1\u7406\u5668\uff1a\n\n","![\u6548\u679c\u56fe]("+t(475)+")","\n\n## \u5982\u4f55\u89e6\u53d1\u4e0b\u8f7d\n\n\u7531\u4e8e electron \u662f\u57fa\u4e8e chromium \u5b9e\u73b0\u7684\uff0c\u901a\u8fc7\u8c03\u7528 webContents \u7684 [downloadURL](https://www.electronjs.org/docs/api/web-contents#contentsdownloadurlurl) \u65b9\u6cd5\uff0c\u76f8\u5f53\u4e8e\u8c03\u7528\u4e86 chromium \u5e95\u5c42\u5b9e\u73b0\u7684\u4e0b\u8f7d\uff0c\u4f1a\u5ffd\u7565\u54cd\u5e94\u5934\u4fe1\u606f\uff0c\u89e6\u53d1 [will-download](https://www.electronjs.org/docs/api/session#instance-events) \u4e8b\u4ef6\u3002\n\n```js\n// \u89e6\u53d1\u4e0b\u8f7d\nwin.webContents.downloadURL(url)\n\n// \u76d1\u542c will-download\nsession.defaultSession.on('will-download', (event, item, webContents) => {})\n```\n  \n## \u4e0b\u8f7d\u6d41\u7a0b\u56fe\n\n","![\u6d41\u7a0b\u56fe]("+t(477)+")","\n\n## \u529f\u80fd\u8bbe\u8ba1\n\n\u5728\u4e0a\u9762\u7684\u6548\u679c\u56fe\u4e2d\uff0c\u5b9e\u73b0\u7684\u7b80\u5355\u6587\u4ef6\u4e0b\u8f7d\u7ba1\u7406\u5668\u529f\u80fd\u5305\u542b\uff1a\n\n- \u8bbe\u7f6e\u4fdd\u5b58\u8def\u5f84\n- \u6682\u505c/\u6062\u590d\u548c\u53d6\u6d88\n- \u4e0b\u8f7d\u8fdb\u5ea6\n- \u4e0b\u8f7d\u901f\u5ea6\n- \u4e0b\u8f7d\u5b8c\u6210\n- \u6253\u5f00\u6587\u4ef6\u548c\u6253\u5f00\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\n- \u6587\u4ef6\u56fe\u6807\n- \u4e0b\u8f7d\u8bb0\u5f55\n\n### \u8bbe\u7f6e\u4fdd\u5b58\u8def\u5f84\n\n\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u4fdd\u5b58\u8def\u5f84\uff0celectron \u4f1a\u81ea\u52a8\u5f39\u51fa\u7cfb\u7edf\u7684\u4fdd\u5b58\u5bf9\u8bdd\u6846\u3002\u4e0d\u60f3\u4f7f\u7528\u7cfb\u7edf\u7684\u4fdd\u5b58\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u4f7f\u7528 [setSavePath](https://www.electronjs.org/docs/api/download-item#downloaditemsetsavepathpath) \u65b9\u6cd5\uff0c\u5f53\u6709\u91cd\u540d\u6587\u4ef6\u65f6\uff0c\u4f1a\u76f4\u63a5\u8986\u76d6\u4e0b\u8f7d\u3002\n\n```js\nitem.setSavePath(path)\n```\n\n\u4e3a\u4e86\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u81ea\u5df1\u9009\u62e9\u4fdd\u5b58\u4f4d\u7f6e\u64cd\u4f5c\u3002\u5f53\u70b9\u51fb\u4f4d\u7f6e\u8f93\u5165\u6846\u65f6\uff0c\u6e32\u67d3\u8fdb\u7a0b\u901a\u8fc7 ipc \u4e0e\u4e3b\u8fdb\u7a0b\u901a\u4fe1\uff0c\u6253\u5f00\u7cfb\u7edf\u6587\u4ef6\u9009\u62e9\u5bf9\u8bdd\u6846\u3002\n\n","![\u9009\u62e9\u4fdd\u5b58\u4f4d\u7f6e]("+t(479)+")","\n\n\u4e3b\u8fdb\u7a0b\u5b9e\u73b0\u4ee3\u7801\uff1a\n\n```ts\n/**\n * \u6253\u5f00\u6587\u4ef6\u9009\u62e9\u6846\n * @param oldPath - \u4e0a\u4e00\u6b21\u6253\u5f00\u7684\u8def\u5f84\n */\nconst openFileDialog = async (oldPath: string = app.getPath('downloads')) => {\n  if (!win) return oldPath\n\n  const { canceled, filePaths } = await dialog.showOpenDialog(win, {\n    title: '\u9009\u62e9\u4fdd\u5b58\u4f4d\u7f6e',\n    properties: ['openDirectory', 'createDirectory'],\n    defaultPath: oldPath,\n  })\n\n  return !canceled ? filePaths[0] : oldPath\n}\n\nipcMain.handle('openFileDialog', (event, oldPath?: string) => openFileDialog(oldPath))\n```\n\n\u6e32\u67d3\u8fdb\u7a0b\u4ee3\u7801\uff1a\n\n```js\nconst path = await ipcRenderer.invoke('openFileDialog', 'PATH')\n\nconsole.log(path)\n```\n\n### \u6682\u505c/\u6062\u590d\u548c\u53d6\u6d88\n\n\u62ff\u5230 [downloadItem](https://www.electronjs.org/docs/api/download-item) \u540e\uff0c\u6682\u505c\u3001\u6062\u590d\u548c\u53d6\u6d88\u5206\u522b\u8c03\u7528 `pause`\u3001`resume` \u548c `cancel` \u65b9\u6cd5\u3002\u5f53\u6211\u4eec\u8981\u5220\u9664\u5217\u8868\u4e2d\u6b63\u5728\u4e0b\u8f7d\u7684\u9879\uff0c\u9700\u8981\u5148\u8c03\u7528 cancel \u65b9\u6cd5\u53d6\u6d88\u4e0b\u8f7d\u3002\n\n### \u4e0b\u8f7d\u8fdb\u5ea6\n\n\u5728 [downloadItem](https://www.electronjs.org/docs/api/download-item) \u4e2d\u76d1\u542c updated \u4e8b\u4ef6\uff0c\u53ef\u4ee5\u5b9e\u65f6\u83b7\u53d6\u5230\u5df2\u4e0b\u8f7d\u7684\u5b57\u8282\u6570\u636e\uff0c\u6765\u8ba1\u7b97\u4e0b\u8f7d\u8fdb\u5ea6\u548c\u6bcf\u79d2\u4e0b\u8f7d\u7684\u901f\u5ea6\u3002\n\n```js\n// \u8ba1\u7b97\u4e0b\u8f7d\u8fdb\u5ea6\nconst progress = item.getReceivedBytes() / item.getTotalBytes()\n```\n\n","![\u4e0b\u8f7d\u8fdb\u5ea6]("+t(476)+")","\n\n\u5728\u4e0b\u8f7d\u7684\u65f6\u5019\uff0c\u60f3\u5728 Mac \u7cfb\u7edf\u7684\u7a0b\u5e8f\u575e\u548c Windows \u7cfb\u7edf\u7684\u4efb\u52a1\u680f\u5c55\u793a\u4e0b\u8f7d\u4fe1\u606f\uff0c\u6bd4\u5982\uff1a\n - \u4e0b\u8f7d\u6570\uff1a\u901a\u8fc7 app \u7684 [badgeCount](https://www.electronjs.org/docs/api/app#appbadgecount-linux-macos) \u5c5e\u6027\u8bbe\u7f6e\uff0c\u5f53\u4e3a 0 \u65f6\uff0c\u4e0d\u4f1a\u663e\u793a\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7 dock \u7684 [setBadge](https://www.electronjs.org/docs/api/app#appsetbadgecountcount-linux-macos) \u65b9\u6cd5\u8bbe\u7f6e\uff0c\u8be5\u65b9\u6cd5\u652f\u6301\u7684\u662f\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u4e0d\u8981\u663e\u793a\uff0c\u9700\u8981\u8bbe\u7f6e\u4e3a ''\u3002\n - \u4e0b\u8f7d\u8fdb\u5ea6\uff1a\u901a\u8fc7\u7a97\u53e3\u7684 [setProgressBar](https://www.electronjs.org/docs/api/browser-window#winsetprogressbarprogress-options) \u65b9\u6cd5\u8bbe\u7f6e\u3002\n\n> \u7531\u4e8e Mac \u548c Windows \u7cfb\u7edf\u5dee\u5f02\uff0c\u4e0b\u8f7d\u6570\u4ec5\u5728 Mac \u7cfb\u7edf\u4e2d\u751f\u6548\u3002\u52a0\u4e0a process.platform === 'darwin' \u6761\u4ef6\uff0c\u907f\u514d\u5728\u975e Mac\u3001Linux \u7cfb\u7edf\u4e0b\u51fa\u73b0\u5f02\u5e38\u9519\u8bef\u3002\n\n\u4e0b\u8f7d\u8fdb\u5ea6\uff08Windows \u7cfb\u7edf\u4efb\u52a1\u680f\u3001Mac \u7cfb\u7edf\u7a0b\u5e8f\u575e\uff09\u663e\u793a\u6548\u679c\uff1a\n\n","![windows \u8fdb\u5ea6]("+t(481)+")","\n\n","![mac \u7a0b\u5e8f\u575e]("+t(478)+")","\n\n```js\n// mac \u7a0b\u5e8f\u575e\u663e\u793a\u4e0b\u8f7d\u6570\uff1a\n// \u65b9\u5f0f\u4e00\napp.badgeCount = 1\n// \u65b9\u5f0f\u4e8c\napp.dock.setBadge('1')\n\n// mac \u7a0b\u5e8f\u575e\u3001windows \u4efb\u52a1\u680f\u663e\u793a\u8fdb\u5ea6\nwin.setProgressBar(progress)\n```\n\n### \u4e0b\u8f7d\u901f\u5ea6\n\n\u7531\u4e8e [downloadItem](https://www.electronjs.org/docs/api/download-item) \u6ca1\u6709\u76f4\u63a5\u4e3a\u6211\u4eec\u63d0\u4f9b\u65b9\u6cd5\u6216\u5c5e\u6027\u83b7\u53d6\u4e0b\u8f7d\u901f\u5ea6\uff0c\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002\n\n> \u601d\u8def\uff1a\u5728 updated \u4e8b\u4ef6\u91cc\u901a\u8fc7 getReceivedBytes \u65b9\u6cd5\u62ff\u5230\u672c\u6b21\u4e0b\u8f7d\u7684\u5b57\u8282\u6570\u636e\u51cf\u53bb\u4e0a\u4e00\u6b21\u4e0b\u8f7d\u7684\u5b57\u8282\u6570\u636e\u3002\n\n```js\n// \u8bb0\u5f55\u4e0a\u4e00\u6b21\u4e0b\u8f7d\u7684\u5b57\u8282\u6570\u636e\nlet prevReceivedBytes = 0\n\nitem.on('updated', (e, state) => {\n  const receivedBytes = item.getReceivedBytes()\n  // \u8ba1\u7b97\u6bcf\u79d2\u4e0b\u8f7d\u7684\u901f\u5ea6\n  downloadItem.speed = receivedBytes - prevReceivedBytes\n  prevReceivedBytes = receivedBytes\n})\n```\n\n> \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cupdated \u4e8b\u4ef6\u6267\u884c\u7684\u65f6\u95f4\u7ea6 500ms \u4e00\u6b21\u3002\n\n","![updated_event]("+t(480)+")","\n### \u4e0b\u8f7d\u5b8c\u6210\n\n\u5f53\u4e00\u4e2a\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u3001\u4e2d\u65ad\u6216\u8005\u88ab\u53d6\u6d88\uff0c\u9700\u8981\u901a\u77e5\u6e32\u67d3\u8fdb\u7a0b\u4fee\u6539\u72b6\u6001\uff0c\u901a\u8fc7\u76d1\u542c [downloadItem](https://www.electronjs.org/docs/api/download-item) \u7684 done \u4e8b\u4ef6\u3002\n\n```js\nitem.on('done', (e, state) => {\n  downloadItem.state = state\n  downloadItem.receivedBytes = item.getReceivedBytes()\n  downloadItem.lastModifiedTime = item.getLastModifiedTime()\n\n  // \u901a\u77e5\u6e32\u67d3\u8fdb\u7a0b\uff0c\u66f4\u65b0\u4e0b\u8f7d\u72b6\u6001\n  webContents.send('downloadItemDone', downloadItem)\n})\n```\n\n### \u6253\u5f00\u6587\u4ef6\u548c\u6253\u5f00\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\n\n\u4f7f\u7528 electron \u7684 shell \u6a21\u5757\u6765\u5b9e\u73b0\u6253\u5f00\u6587\u4ef6\uff08[openPath](https://www.electronjs.org/docs/api/shell#shellopenpathpath)\uff09\u548c\u6253\u5f00\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\uff08[showItemInFolder](https://www.electronjs.org/docs/api/shell#shellshowiteminfolderfullpath)\uff09\u3002\n\n> \u7531\u4e8e openPath \u65b9\u6cd5\u652f\u6301\u8fd4\u56de\u503c `Promise<string>`\uff0c\u5f53\u4e0d\u652f\u6301\u6253\u5f00\u7684\u6587\u4ef6\uff0c\u7cfb\u7edf\u4f1a\u6709\u76f8\u5e94\u7684\u63d0\u793a\uff0c\u800c showItemInFolder \u65b9\u6cd5\u8fd4\u56de\u503c\u662f `void`\u3002\u5982\u679c\u9700\u8981\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u53ef\u4f7f\u7528 nodejs \u7684 fs \u6a21\u5757\uff0c\u5148\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002\n\n```ts\nimport fs from 'fs'\n\n// \u6253\u5f00\u6587\u4ef6\nconst openFile = (path: string): boolean => {\n  if (!fs.existsSync(path)) return false\n\n  shell.openPath(path)\n  return true\n}\n\n// \u6253\u5f00\u6587\u4ef6\u6240\u5728\u4f4d\u7f6e\nconst openFileInFolder = (path: string): boolean => {\n  if (!fs.existsSync(path)) return false\n\n  shell.showItemInFolder(path)\n  return true\n}\n```\n\n### \u6587\u4ef6\u56fe\u6807\n\n\u5f88\u65b9\u4fbf\u7684\u662f\u4f7f\u7528 app \u6a21\u5757\u7684 [getFileIcon](https://www.electronjs.org/docs/api/app#appgetfileiconpath-options) \u65b9\u6cd5\u6765\u83b7\u53d6\u7cfb\u7edf\u5173\u8054\u7684\u6587\u4ef6\u56fe\u6807\uff0c\u8fd4\u56de\u7684\u662f `Promise<NativeImage>` \u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 toDataURL \u65b9\u6cd5\u8f6c\u6362\u6210 base64\uff0c\u4e0d\u9700\u8981\u6211\u4eec\u53bb\u5904\u7406\u4e0d\u540c\u6587\u4ef6\u7c7b\u578b\u663e\u793a\u4e0d\u540c\u7684\u56fe\u6807\u3002\n\n```ts\nconst getFileIcon = async (path: string) => {\n  const iconDefault = './icon_default.png'\n  if (!path) Promise.resolve(iconDefault)\n\n  const icon = await app.getFileIcon(path, {\n    size: 'normal'\n  })\n\n  return icon.toDataURL()\n}\n```\n\n### \u4e0b\u8f7d\u8bb0\u5f55\n\n\u968f\u7740\u4e0b\u8f7d\u7684\u5386\u53f2\u6570\u636e\u8d8a\u6765\u8d8a\u591a\uff0c\u4f7f\u7528 [electron-store](https://github.com/sindresorhus/electron-store) \u5c06\u4e0b\u8f7d\u8bb0\u5f55\u4fdd\u5b58\u5728\u672c\u5730\u3002\n"].join("")},475:function(n,e,t){n.exports=t.p+"static/media/demo.4098ac15.gif"},476:function(n,e,t){n.exports=t.p+"static/media/download_progress.0167736e.png"},477:function(n,e,t){n.exports=t.p+"static/media/flow_chart.8abaebf8.png"},478:function(n,e,t){n.exports=t.p+"static/media/mac_download_progress.7f0cbbad.png"},479:function(n,e,t){n.exports=t.p+"static/media/select_path.cba24646.gif"},480:function(n,e,t){n.exports=t.p+"static/media/updated_event.81e36068.png"},481:function(n,e,t){n.exports=t.p+"static/media/windows_progress.15688fe1.png"}}]);