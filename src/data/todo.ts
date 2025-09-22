// {
//   "title": "My goals I wnat to reach",
//   "goal-reached": {
//     "first": "Learned react fundamentals.",
//     "second": "Built my personal portfolio website.",
//     "third": "Completed several web project for client."
//   },
//   "goal-to-reach": {
//     "first": "Master a framework",
//     "second": "Contribute to open source project",
//     "third ": "Land a frontend developer internship."
//   }
// }

export type Todos = {
  title: string;
  goalReached: string[];
  goaldToReach: string[];
};

export const todo: Todos = {
  title: "My goal I want to reach",
  goalReached: [
    "Learned react fundamentals.",
    "Built my personal portfolio.",
    "Completed several web project.",
  ],
  goaldToReach: [
    "Master a php and js framework.",
    "Contribute to open source project.",
    "Land frontend developer intership.",
  ],
};
