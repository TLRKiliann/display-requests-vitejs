import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

// post to authenticate admin
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const user: string = req.body.username;
  const status: string = req.body.status;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE username=? && status=?",
      [user, status]);
    if ((user !== undefined) && (status !== "user")) {
      //res.status(200).json(result);
      res.send("API is working properly");
    } else {
      res.status(404).end()
    }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
  //next()
});

module.exports = router;