/**
 * Ensure a function is stable, meaning the same input always produces the same output.
 *
 * @param testFunction - Function to be tested.
 * @param count - Count is the number of times to call the `testFunction` (Default: `1000`).
 * @returns Whether the output of `testFunction` was stable.
 *
 * @example
 * ```javascript
 * import { stableFunction } from "https://deno.land/x/stable_fn/mod.ts";
 * stableFunction(() => true); //=> true
 * ```
 */
export function stableFunction(
  testFunction: () => unknown,
  count = 1000
): boolean {
  const first = testFunction();

  let currentValue: unknown;

  for (let index = 0; index < count; index++) {
    currentValue = testFunction();

    if (currentValue !== first) {
      return false;
    }
  }

  return true;
}
