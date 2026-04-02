import { findKey } from "./recursion_and_stack";

const box1 = {
  a: {
    type: "box",
    content: {
      aa: { type: "box", content: {} },
      ab: { type: "box", content: {} },
    },
  },
  b: { type: "box", content: {} },
  c: { type: "box", content: { ca: { type: "key" } } },
};

const box2 = {
  a: {
    type: "box",
    content: {
      aa: { type: "box", content: {} },
      ab: { type: "box", content: { aba: { type: "key" } } },
    },
  },
  b: { type: "box", content: {} },
  c: { type: "box", content: { ca: { type: "key" } } },
};

const box3 = {
  a: {
    type: "box",
    content: {
      aa: { type: "box", content: {} },
      ab: { type: "box", content: { aba: { type: "box" } } },
    },
  },
  b: { type: "box", content: {} },
  c: { type: "box", content: { ca: { type: "box" } } },
};

describe("recursion and call stack", () => {
  it("findKey: should find key within the first element and two levels down", () => {
    const response = findKey(box2);
    expect(response).toEqual("found key on item aba");
  });

  it("findKey: should find key within the last element and one level down", () => {
    const response = findKey(box1);
    expect(response).toEqual("found key on item ca");
  });

  it("findKey: should not find key and return undefined", () => {
    const response = findKey(box3);
    expect(response).toBeUndefined()
  });
});