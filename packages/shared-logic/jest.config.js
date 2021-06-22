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
  setupFilesAfterEnv: ["./test/setup-env.ts"]
}