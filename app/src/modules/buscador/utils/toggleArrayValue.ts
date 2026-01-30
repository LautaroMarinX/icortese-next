// Utilidad para alternar un valor en un array (agregar o quitar)
export function toggleArrayValue<T>(array: T[] | null, value: T): T[] {
  const arr = array ?? [];
  return arr.includes(value)
    ? arr.filter((item) => item !== value)
    : [...arr, value];
}
