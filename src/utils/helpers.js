// helpers.js
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  export const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  