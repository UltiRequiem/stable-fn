import { expect, it } from "vitest";
import { stableFunction } from "./index.js";

it("[stableFunction]", () => {
  expect(stableFunction(() => true)).toBeTruthy();

  let index = 0;

  expect(
    !stableFunction(() => {
      if (++index === 10) {
        return "bar";
      }

      return "foo";
    }),
  ).toBeTruthy();
});
