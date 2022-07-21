import { Task } from "../task";

export class checkBal extends Task {
  constructor(taskNum: number) {
    super(taskNum);
  }

  async start() {}
}
