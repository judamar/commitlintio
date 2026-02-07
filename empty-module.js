// Mock module for Node.js built-ins that can't run in browser
module.exports = {
  promises: {
    readFile: () => Promise.reject(new Error('fs not available in browser')),
    writeFile: () => Promise.reject(new Error('fs not available in browser')),
    readdir: () => Promise.resolve([]),
    stat: () => Promise.reject(new Error('fs not available in browser'))
  },
  readFileSync: () => { throw new Error('fs not available in browser'); },
  writeFileSync: () => { throw new Error('fs not available in browser'); },
  existsSync: () => false,
  readdirSync: () => []
};
