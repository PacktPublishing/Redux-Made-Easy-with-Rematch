module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          '.ts': 'tsx'
        }
      }
    ]
  },
  setupFilesAfterEnv: ["./setup-env.ts"]
}