const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = "LuvNicoJ09<3"

module.exports = (pool) => {

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await pool.query('SELECT employee_id, email, password FROM account.employee WHERE email = $1', [email]);

      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const user = result.rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      console.log('User Password from Database:', user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Create a JWT token and send it in the response
      const token = jwt.sign({ userId: user.employee_id, email: user.email }, secretKey);
      res.json({ message: 'Login successful', token });

    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.post('/register', async (req, res) => {
    const { employee_id, name, email, password, phone_number } = req.body;
    console.log(req.body)
    const saltRounds = 8;
    // Hash the password before storing it in the database
    try {
      bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }

        try {
          const result = await pool.query(
              'INSERT INTO account.employee (employee_id, name, email, password, phone_number) VALUES ($1, $2, $3, $4, $5)',
              [employee_id, name, email, hashedPassword, phone_number]
          );

          res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
        } catch (error) {
          console.error('Error registering user:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  return router;
}