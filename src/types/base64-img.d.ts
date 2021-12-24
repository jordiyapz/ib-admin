declare module "base64-img" {
  export function base64(
    filename: string,
    callback: (error: Error, data: string) => void
  ): void;
}
