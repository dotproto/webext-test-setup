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
