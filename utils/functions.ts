
export const isEmptyString = (value: string) => {
  return value.replace(/ /g, "") === "";
};

export const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

// capitalize first letter
export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return ""; // Vérifie si le texte est vide ou null
  return text.charAt(0).toUpperCase() + text.slice(1);
};

type DataArray = { label: string; value: string };
export const returnDataValue = (value: string, data: DataArray[]) => {
  const values = data;
  const found = values.find((elem) => elem.value === value);
  return found?.label.toLocaleLowerCase() ?? "";
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "USD",
  });
};


