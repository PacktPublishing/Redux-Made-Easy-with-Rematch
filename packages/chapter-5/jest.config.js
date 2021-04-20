module.exports = {
  transform: {
    "^.+\\.js?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  setupFilesAfterEnv: ["./test/setup-env.js"]
}