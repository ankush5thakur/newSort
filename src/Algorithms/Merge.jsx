import { awaitTimeout } from "../helpers/promisses";

const mergeSort = async (sortingState, changeBar) => {
  const arr = sortingState.array.map((item) => item.value);
  await mergeSortHelper(arr, changeBar, sortingState.delay);
};

const mergeSortHelper = async (
  arr,
  changeBar,
  delay,
  start = 0,
  end = arr.length - 1
) => {
  if (start >= end) return;

  const middle = Math.floor((start + end) / 2);
  await mergeSortHelper(arr, changeBar, delay, start, middle);
  await mergeSortHelper(arr, changeBar, delay, middle + 1, end);
  await mergeSortMerger(arr, changeBar, delay, start, middle, end);
};

const mergeSortMerger = async (arr, changeBar, delay, start, middle, end) => {
  let left = arr.slice(start, middle + 1);
  let right = arr.slice(middle + 1, end + 1);

  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      changeBar(k, { value: left[i], state: "selected" });
      arr[k++] = left[i++];
    } else {
      changeBar(k, { value: right[j], state: "selected" });
      arr[k++] = right[j++];
    }
    await awaitTimeout(delay);
  }

  while (i < left.length) {
    changeBar(k, { value: left[i], state: "selected" });
    arr[k++] = left[i++];
    await awaitTimeout(delay);
  }

  while (j < right.length) {
    changeBar(k, { value: right[j], state: "selected" });
    arr[k++] = right[j++];
    await awaitTimeout(delay);
  }

  for (let i = start; i <= end; i++) {
    changeBar(i, { value: arr[i], state: "idle" });
  }
};

export default mergeSort;
