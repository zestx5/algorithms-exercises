import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let swap = false;
  let iter = 0;
  do {
    swap = false;
    snapshot(nums);
    for (let i = 0; i < nums.length - iter; i++) {
      if (nums[i] > nums[i + 1]) {
        const tmp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = tmp;
        swap = true;
      }
    }
    iter++;
  } while (swap);
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(100)));
  done();
  return <App />;
}
