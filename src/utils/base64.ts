import base64img from "base64-img";

export const base64Async = (filename: string) =>
  new Promise((resolve, reject) => {
    base64img.base64(filename, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });

/**
 * Convert File to Base64 string.
 *
 * @author Jordi Yaputra
 * @param file
 * @returns
 */
export const customBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
