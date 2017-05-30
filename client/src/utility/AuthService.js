import jwtDecode from 'jwt-decode';

const _doAuthentication = (endpoint, values) =>
  fetchWithHeaders(`/api/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
  });

const _checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return error;
  }
};

const login = (email, password) =>
  _doAuthentication('users/authenticate', { email, password });

const signup = ({ firstName, lastName, email, password, djName, dj }) =>
  _doAuthentication('users', {
    email,
    password,
    firstName,
    lastName,
    djName,
    dj,
  });

const checkIfExists = email =>
  _doAuthentication('users/check', {
    email,
  });

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

const getToken = () => localStorage.getItem('token');

const getTokenDetails = () => jwtDecode(getToken());

const isAdmin = () => jwtDecode(getToken()).dj;

const finishAuthentication = token => {
  localStorage.setItem('token', token);
};

const logout = () => {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('token');
};

const fetchWithHeaders = (url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (isAuthenticated()) {
    headers.Authorization = `Bearer ${getToken()}`;
  }

  return fetch(url, {
    headers,
    ...options,
  }).then(response => response.json());
};

export {
  _doAuthentication,
  _checkStatus,
  login,
  signup,
  checkIfExists,
  isAuthenticated,
  isAdmin,
  finishAuthentication,
  getToken,
  getTokenDetails,
  logout,
  fetchWithHeaders,
};
