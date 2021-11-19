// A mock function to mimic making an async request for data
export function fetchMarker(amount = []) {
  return new Promise((resolve) => setTimeout(() => resolve({ data: [[37.3595704, 127.105399]] }), 500));
}
