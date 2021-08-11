module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "esbuild-jest"
  },
  setupFilesAfterEnv: ["./test/setup-env.js"]
}