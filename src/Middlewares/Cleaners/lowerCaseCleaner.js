function pascalToCamelCase(obj) {
  if (obj === null || obj === undefined || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => pascalToCamelCase(item));
  }

  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelKey = key.charAt(0).toLowerCase() + key.slice(1);
      result[camelKey] = pascalToCamelCase(obj[key]);
    }
  }

  return result;
}

module.exports = pascalToCamelCase;