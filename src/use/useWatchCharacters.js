import { watch } from "vue";
export function useWatchCharacters(valueToWatch, maxLength = 100) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxLength) {
      alert(`Maximum ${maxLength} character can contain`);
    }
  });
}
