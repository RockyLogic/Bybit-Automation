import { Task } from "../task/task";
import { sleep } from "../utils/sleep";

export function retry(
  delay: number,
  onError?: (self: Task, error: any) => void | Promise<void> // callback parameter that takes task/error params MUST be passed
) {
  return (
    _target: Object, // the class being used
    _key: string | symbol, // the name of the function
    descriptor: PropertyDescriptor // the holder of the function call
  ) => {
    const originalFunction = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      while (true) {
        try {
          const result = await originalFunction.apply(this, args);
          return result;
        } catch (error) {
          if (onError != null) {
            await onError(this as Task, error);
          }
          await sleep(delay);
        }
      }
    };
    return descriptor;
  };
}
