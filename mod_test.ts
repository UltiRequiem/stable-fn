import { stableFunction } from "./mod.ts";

import { assert } from "https://deno.land/std@0.128.0/testing/asserts.ts";

Deno.test("[stableFunction]", () => {
  assert(stableFunction(() => true));

  let index = 0;

  assert(
    !stableFunction(() => {
      if (++index === 10) {
        return "bar";
      }

      return "foo";
    })
  );
});
