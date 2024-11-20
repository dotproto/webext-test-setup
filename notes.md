1. Clone https://github.com/dotproto/webext-test-setup.git and check out the tag `start`. This extension is based on the `store-collected-images/webextension-with-webpack` example from https://github.com/mdn/webextensions-examples/

2. Install Jest

    ```bash
    npm install --save-dev jest
    ```

3. Add a `test` script in `package.json` to run `jest`.

    ```diff
        "scripts": {
    +     "test": "jest",
          "build": "webpack --display-error-details --progress --colors",
          "build:watch": "npm run build -- -w",
          "start": "npm run build && web-ext run -s extension/"
        },
    ```

4. We're ready to start testing! Try running `npm run test`

    ```
    $ npm run test

    > store-collected-images@1.0.0 test
    > jest

    No tests found, exiting with code 1
    Run with `--passWithNoTests` to exit with code 0
    In /Users/simeon/dev/dotproto/scratchpad/webextension-with-webpack
    12 files checked.
    testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
    testPathIgnorePatterns: /node_modules/ - 12 matches
    testRegex:  - 0 matches
    Pattern:  - 0 matches
    ```

    It didn't work, but only because we haven't created any tests. Let's do that now.
