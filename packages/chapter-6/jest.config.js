module.exports = {
  transform: {
    "^.+\\.jsx?$": "esbuild-jest"
  },
  setupFilesAfterEnv: ["./test/setup-env.js"]
}