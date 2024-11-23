export const getAuthData = (): any | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const authDataString = localStorage.getItem('authData');
    return authDataString ? JSON.parse(authDataString) : null;
  } catch (error) {
    console.error('Error reading auth data from localStorage:', error);
    return null;
  }
};

export const setAuthData = (data: any): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem('authData', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving auth data to localStorage:', error);
  }
};
