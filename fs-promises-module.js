// Mock module for node:fs/promises that can't run in browser
module.exports = {
  readFile: () => Promise.reject(new Error('fs not available in browser')),
  writeFile: () => Promise.reject(new Error('fs not available in browser')),
  readdir: () => Promise.resolve([]),
  stat: () => Promise.reject(new Error('fs not available in browser')),
  mkdir: () => Promise.reject(new Error('fs not available in browser')),
  rm: () => Promise.reject(new Error('fs not available in browser'))
};
