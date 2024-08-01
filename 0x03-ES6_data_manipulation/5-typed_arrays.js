export default function createInt8TypedArray(length, postion, value) {
  const buffer = new ArrayBuffer(length);
  const dev = new DataView(buffer);
  try {
    dev.setInt8(postion, value);
  } catch (err) {
    throw new Error('Position outside range');
  }
  return dev;
}
