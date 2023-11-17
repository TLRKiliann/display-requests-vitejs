import express, { Request, Response } from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

// post to authenticate admin
router.post('/', async(req: Request, res: Response) => {
  const user: string = req.body.username;
  const passwd: string = req.body.password;
  const status: string = req.body.status;
  let conn;

  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE username=? && password=? && status=?",
      [user, passwd, status]);
    if ((user !== undefined) && (passwd !== undefined) && (status !== "user")) {
      res.status(200).json(result)
    } else {
      res.status(403).end()
    }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
});

module.exports = router;