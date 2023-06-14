import {describe, expect, test} from '@jest/globals';
import {hello} from "../src";

describe("index", () => {
  test("hello", () => {
    expect(hello()).toEqual("world");
  });
});