export class CapError extends Error {
  constructor(
    public status: number,
    public code: string,
    public message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, CapError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
