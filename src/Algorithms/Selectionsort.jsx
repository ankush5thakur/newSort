import { awaitTimeout } from "../helpers/promisses";

const selectionSort = async (sortingState, changeBar) => {
  const arr = sortingState.array.map((item) => item.value);

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    changeBar(min, { state: "selected" });

    for (let j = i + 1; j < arr.length; j++) {
      changeBar(j, { state: "selected" });
      await awaitTimeout(sortingState.delay);

      if (arr[j] < arr[min]) {
        changeBar(min, { state: "idle" });
        min = j;
        changeBar(min, { state: "selected" });
      } else {
        changeBar(j, { state: "idle" });
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      changeBar(i, { value: arr[min], state: "idle" });
      arr[min] = temp;
      changeBar(min, { value: temp, state: "idle" });
    } else {
      changeBar(i, { state: "idle" });
      changeBar(min, { state: "idle" });
    }
  }
};

export default selectionSort;
