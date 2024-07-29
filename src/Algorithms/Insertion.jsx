import { awaitTimeout } from "../helpers/promisses";

const insertionSort = async (sortingState, changeBar) => {
  const arr = sortingState.array.map((item) => item.value);

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    changeBar(i, { value: current, state: "selected" });

    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      changeBar(j + 1, { value: arr[j], state: "selected" });
      j--;
      await awaitTimeout(sortingState.delay);
      changeBar(j + 2, { value: arr[j + 1], state: "idle" });
    }

    arr[j + 1] = current;
    changeBar(j + 1, { value: current, state: "idle" });
  }
};

export default insertionSort;
