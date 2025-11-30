const COST_PER_DAY = 40;

const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

const MID_TERM_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

export const calculateRentalCost = (days) => {
  // Base price
  const basePrice = days * COST_PER_DAY;

  // Long-term discount (7+ days)
  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  // Mid-term discount (3–6 days)
  if (days >= MID_TERM_DAYS) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  // Short rentals (0–2 days)
  return basePrice;
};
