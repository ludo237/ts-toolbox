/**
 * Remove empty properties from a given object, the check is done only on values
 * and it's recursive, meaning that if a key:value pair is an object the we will check that too
 * 
 * @returns A new object without the empty properties
 */
const removeEmptyProperties = (obj: {}): Object =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([key, value]) => {
        if(typeof value === "string"){
          return value.length > 0;
        }

        return value !== null;
      })
      .map(([key, value]) => (typeof value === "object" ? [key, removeEmptyProperties(value)] : [key, value])),
  );

export default removeEmptyProperties;
