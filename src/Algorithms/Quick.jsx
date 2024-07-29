import { awaitTimeout } from "../helpers/promisses";

const quickSort = async (sortingState, changeBar) => {
  const arr = sortingState.array.map((item) => item.value);
  await quickSortHelper(arr, changeBar, sortingState.delay);
};

const quickSortHelper = async (
  arr,
  changeBar,
  delay,
  start = 0,
  end = arr.length - 1
) => {
  if (start >= end) return;

  const pivot = arr[Math.floor((start + end) / 2)];
  let i = start;
  let j = end;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      changeBar(i, { value: arr[i], state: "selected" });
      changeBar(j, { value: arr[j], state: "selected" });

      await awaitTimeout(delay);

      changeBar(i, { value: arr[i], state: "idle" });
      changeBar(j, { value: arr[j], state: "idle" });
      i++;
      j--;
    }
  }

  await quickSortHelper(arr, changeBar, delay, start, j);
  await quickSortHelper(arr, changeBar, delay, i, end);
};

export default quickSort;
