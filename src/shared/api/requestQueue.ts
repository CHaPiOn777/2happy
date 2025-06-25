type Priority = "high" | "medium" | "low";
type RequestTask<T> = () => Promise<T>;

class StrictPriorityRequestQueue {
  private maxConcurrent: number;
  private activeRequests: number = 0;

  private highPriorityQueue: RequestTask<unknown>[] = [];
  private mediumPriorityQueue: RequestTask<unknown>[] = [];
  private lowPriorityQueue: RequestTask<unknown>[] = [];

  constructor(maxConcurrent: number = 5) {
    this.maxConcurrent = maxConcurrent;
  }

  addRequest<T>(task: RequestTask<T>, priority: Priority = "low"): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const wrappedTask = () => {
        this.activeRequests++;
        return task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.activeRequests--;
            if (this.activeRequests === 0) {
              this.processNext();
            }
          });
      };

      switch (priority) {
        case "high":
          this.highPriorityQueue.push(wrappedTask);
          break;
        case "medium":
          this.mediumPriorityQueue.push(wrappedTask);
          break;
        case "low":
        default:
          this.lowPriorityQueue.push(wrappedTask);
          break;
      }

      queueMicrotask(() => this.processNext());
    });
  }

  private processNext() {
    while (this.activeRequests < this.maxConcurrent) {
      if (this.highPriorityQueue.length > 0) {
        while (this.highPriorityQueue.length) {
          const task = this.highPriorityQueue.shift();
          task?.();
        }
      } else if (
        this.mediumPriorityQueue.length > 0 &&
        this.highPriorityQueue.length === 0 &&
        this.activeRequests === 0
      ) {
        while (this.mediumPriorityQueue.length) {
          const task = this.mediumPriorityQueue.shift();
          task?.();
        }
      } else if (
        this.lowPriorityQueue.length > 0 &&
        this.highPriorityQueue.length === 0 &&
        this.mediumPriorityQueue.length === 0 &&
        this.activeRequests === 0
      ) {
        while (this.lowPriorityQueue.length) {
          const task = this.lowPriorityQueue.shift();
          task?.();
        }
      } else {
        break;
      }
    }
  }
}

export const requestQueue = new StrictPriorityRequestQueue(5);
