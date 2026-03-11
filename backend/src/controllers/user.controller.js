const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');
const { asyncHandler } = require('../utils/asyncHandler.js');
const connectDB = require('../db/index.js');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  connectDB.MySQLDB.query(
    'INSERT INTO users(username,password) VALUES (?,?)',
    [username, hashed],
    (err, result) => {
      if (err)
        return res
          .status(500)
          .json(
            new ApiResponse(
              500,
              'User Registration failed',
              'Internal server error',
            ),
          );

      return res
        .status(201)
        .json(new ApiResponse(201, 'User Registration successful'));
    },
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  connectDB.MySQLDB.query(
    'SELECT * FROM users WHERE username=?',
    [username],
    async (err, results) => {
      if (results.length === 0)
        return res.status(400).json(new ApiResponse(400, 'User Login failed'));

      const valid = await bcrypt.compare(password, results[0].password);

      if (!valid)
        return res
          .status(400)
          .json(new ApiResponse(400, 'Invalid password', 'Failed to login'));

      return res
        .status(201)
        .json(new ApiResponse(201, 'User Login successful'));
    },
  );
});

module.exports = {
  registerUser,
  loginUser,
};
