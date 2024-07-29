import { awaitTimeout } from "../helpers/promisses";

const bubbleSort = async (sortingState, changeBar) => {
  const arr = sortingState.array.map((item) => item.value);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      changeBar(j, { state: "selected" });
      changeBar(j + 1, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        changeBar(j, { value: arr[j + 1] });
        arr[j + 1] = temp;
        changeBar(j + 1, { value: temp });
        await awaitTimeout(sortingState.delay);
      }

      changeBar(j, { state: "idle" });
      changeBar(j + 1, { state: "idle" });
    }
  }
};

export default bubbleSort;
