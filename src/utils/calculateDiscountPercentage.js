export default function calculateDiscountPercentage(originalPrice, finalPrice) {
  const original = parseFloat(originalPrice);
  const final = parseFloat(finalPrice);

  if (original === 0) return 0;

  const discount = ((original - final) / original) * 100;
  return discount.toFixed(2);
}
