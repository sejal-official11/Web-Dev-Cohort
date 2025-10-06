import { atom, selector } from "recoil";

export const counterAtom = atom({
  // holding a global state
  default: 0,
  key: "counter", //unique
});





export const evenSelector = selector({
  key: "isEvenSelector",
  // does not have default value, it has getter
  get: function ({ get }) {
    const currentCount = get(counterAtom);  // this selector depend on this atom
    const isEven = (currentCount % 2 == 0);
    return isEven;
  },

});

