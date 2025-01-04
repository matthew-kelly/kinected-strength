export function formatPrice(price, includeSymbol = true) {
  // format price in cents
  return `${includeSymbol ? "$" : ""}${(price / 100).toFixed(2)}`;
}
