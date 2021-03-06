import removeEmptyProperties from "../src/removeEmptyProperties";

test("it removes the right keys from an object", () => {
  const obj = {
    "name":"Alfonso",
    "surname": "Rossi",
    "birthday":null,
    "tags": {
      "foo":"bar",
      "bar": "",
      "baz": 0,
    },
  }

  expect(removeEmptyProperties(obj)).toStrictEqual({
    "name":"Alfonso",
    "surname": "Rossi",
    "tags": {
      "foo":"bar",
      "baz": 0,
    },
  });
});
