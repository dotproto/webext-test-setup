import { loadStoredImages } from "./image-store.js";

test('should be a function', () => {
  expect(typeof loadStoredImages).toBe("function");
});
