import creditCardType, { types as cardTypes } from "credit-card-type";
import luhn from "luhn";
import { dankort, laser, visaElectron } from "./cardTypes";

export const validateLuhn = luhn.validate;

export const sanitizeNumber = (number) => number.toString().trim().replace(" ", "");

export const getCardType = (cardNumber) => {
  const potentialCardTypes = creditCardType(sanitizeNumber(cardNumber));

  if (potentialCardTypes.length === 1) {
    const firstResult = potentialCardTypes.shift();
    return firstResult?.type || "unknown";
  }

  return "unknown";
};

export const setInitialValidCardTypes = () => {
  creditCardType.updateCard(cardTypes.MAESTRO, {
    patterns: [
      493698,
      [5000, 5018],
      [502000, 506698],
      [506779, 508999],
      [56, 59],
      63,
      67,
      6,
    ],
  });

  creditCardType.updateCard(cardTypes.HIPERCARD, {
    patterns: [384100, 384140, 384160, 606282, 637095, 637568],
  });

  creditCardType.addCard(dankort);
  creditCardType.addCard(laser);
  creditCardType.addCard(visaElectron);

  return Object.values(cardTypes).concat(["dankort", "laser", "visa-electron"]);
};

export const cardTypesMap = {
  amex: ["amex", "americanexpress", "american-express"],
  dinersclub: ["diners", "dinersclub", "diners-club"],
  visaelectron: ["visaelectron", "visa-electron"],
};
