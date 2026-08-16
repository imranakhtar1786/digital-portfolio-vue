import { ref } from 'vue'

export const currentCurrency = ref('INR') // 'INR' or 'USD'

export function toggleCurrency() {
  currentCurrency.value = currentCurrency.value === 'INR' ? 'USD' : 'INR'
}

export function setCurrency(currency) {
  if (['INR', 'USD'].includes(currency)) {
    currentCurrency.value = currency
  }
}

export function formatCurrency(usdAmount, inrAmount) {
  if (currentCurrency.value === 'INR') {
    return `₹${inrAmount.toLocaleString('en-IN')}`
  } else {
    return `$${usdAmount.toLocaleString('en-US')}`
  }
}
