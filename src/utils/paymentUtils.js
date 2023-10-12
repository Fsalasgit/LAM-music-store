export const processPayment = (paymentDetails) => {
    // Logic to process payment
  };
  
  export const validatePaymentDetails = (paymentDetails) => {
    const { cardNumber, cardExpiry, cardCvc, name } = paymentDetails;
  
    const isCardNumberValid = cardNumber.length >= 12 && cardNumber.length <= 19;
    const isExpiryValid = /^\d\d\/\d\d$/.test(cardExpiry);
    const isCvcValid = /^\d{3,4}$/.test(cardCvc);
    const isNameValid = name.trim() !== '';
  
    return isCardNumberValid && isExpiryValid && isCvcValid && isNameValid;
  };
  