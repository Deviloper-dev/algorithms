import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  test("creates new linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("adds new node to linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
  });

  test("prepends new node to linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Prepend(2);
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(1);
  });

  test("contains value in linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    expect(list.Contains(2)).toBe(true);
    expect(list.Contains(4)).toBe(false);
  });

  test("deletes node from linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    list.Delete(2);
    expect(list.Contains(2)).toBe(false);
  });

  test("deletes head node from linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    expect(list.head.value).toBe(1);
    list.Delete(1);
    expect(list.Contains(1)).toBe(false);
    expect(list.head.value).toBe(2);
  });

  test("deletes tail node from linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    expect(list.tail.value).toBe(3);
    list.Delete(3);
    expect(list.Contains(3)).toBe(false);
    expect(list.tail.value).toBe(2);
  });

  test("deletes only node from linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Delete(1);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("deletes node from empty linked list", () => {
    const list = new LinkedList();
    expect(list.Delete(1)).toBe(false);
  });

  test("traverses linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    const values = list.Traverse();
    expect(values.next()).toEqual({ done: false, value: 1 });
    expect(values.next()).toEqual({ done: false, value: 2 });
    expect(values.next()).toEqual({ done: false, value: 3 });
    expect(values.next()).toEqual({ done: true, value: undefined });
  });

  test("reverse traverses linked list", () => {
    const list = new LinkedList();
    list.Add(1);
    list.Add(2);
    list.Add(3);
    const values = list.ReverseTraversal();
    expect(values.next()).toEqual({ done: false, value: 3 });
    expect(values.next()).toEqual({ done: false, value: 2 });
    expect(values.next()).toEqual({ done: false, value: 1 });
    expect(values.next()).toEqual({ done: true, value: undefined });
  });
});
