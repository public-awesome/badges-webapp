import { SHA256 } from "jscrypto/SHA256";
import { Word32Array } from "jscrypto";

/**
 * Truncate the middle portion of a string
 */
export function truncateString(text = "", h = 4, t = 4) {
  const head = text.slice(0, h);
  const tail = text.slice(-1 * t, text.length);
  return text.length > h + t ? [head, tail].join("...") : text;
}

// https://ui.dev/get-current-timestamp-javascript
export function getTimestampInSeconds() {
  return Math.floor(Date.now() / 1000);
}

export function formatTimestamp(timestampInSeconds: number) {
  return new Date(timestampInSeconds * 1000).toLocaleString("en-US");
}

export function sha256(data: Buffer) {
  return Buffer.from(SHA256.hash(new Word32Array(data)).toUint8Array());
}

export function hexToBytes(hex: string) {
  return Buffer.from(hex, "hex");
}

export function bytesToHex(bytes: Uint8Array) {
  return Buffer.from(bytes).toString("hex");
}
