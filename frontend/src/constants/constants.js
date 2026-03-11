export const API_CONFIG = {
  API_URL: 'http://localhost:8000/api/v1/',
  TIMEOUT: 5000,
  HEADERS: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
