# How to reporoduce

1. install dependencies (yarn)
2. run `nx run bar:build2`

The output is

```
> nx run bar:build2


 >  NX   Cannot find module '/Users/ognen/Documents/workspace/tmp/foo/libs/plug/src/executors/build/executor'

   Require stack:
   - /Users/ognen/Documents/workspace/tmp/foo/node_modules/nx/src/config/workspaces.js
   - /Users/ognen/Documents/workspace/tmp/foo/node_modules/nx/src/command-line/run.js
   - /Users/ognen/Documents/workspace/tmp/foo/node_modules/nx/bin/run-executor.js
   Pass --verbose to see the stacktrace.
```

The problem is that `workspaces` in package.json cause yarn to symlink the
plugin into node_modules/ which causes nx to "see" it as a non-local plugin and
therefore it skips the ts-node registration.
