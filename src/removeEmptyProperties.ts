/**
 * Remove empty properties from a given object, the check is done only on values
 * and it's recursive, meaning that if a key:value pair is an object the we will check that too
 * 
 * @returns A new object without the empty properties
 */
const removeEmptyProperties = (object: { key: string, value: any; }): Object =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([_, value]) => value !== null)
      .filter(([_, value]) => (typeof value === "string" ? value.length > 0 : value))
      .map(([key, value]) => (typeof value === "object" ? [key, removeEmptyProperties(value)] : [key, value])),
  );

export default removeEmptyProperties;
