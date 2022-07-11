
export function getAbreviattion(quantity: number): string {
  if(quantity > 999) {
    return `${String(quantity/1000)}k`
  }
  if(quantity > 999999) {
    return `${String(quantity/1000000)}mi`
  }
  if(quantity > 999999999) {
    return `${String(quantity/1000000000)}bi`
  }
  if(quantity > 999999999999) {
    return `${String(quantity/1000000000000)}tri`
  }

  return String(quantity);
}

export function calcTime(date1: Date, date2: Date) {
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  console.log('milisseconds: ', timeDiff);
  console.log('seconds: ', Math.ceil(timeDiff / 1000)); 
  console.log('minutes: ', Math.ceil(timeDiff / (1000 * 60))); 
  console.log('hours: ', Math.ceil(timeDiff / (1000 * 3600))); 
  console.log('days: ', Math.ceil(timeDiff / (1000 * 3600 * 24))); 
  console.log('months: ', Math.ceil(timeDiff / (1000 * 3600 * 24 * 30))); 
  console.log('days: ', Math.ceil(timeDiff / (1000 * 3600 * 24 * 30 * 12))); 
}