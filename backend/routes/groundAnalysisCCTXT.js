const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get(`/qctxt`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM laboratory.ground_analysis_cctxt_view`);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: "Internal Server Error"});
    }
  });

  router.get(`/qctxt/:lab_id`, async (req, res) => {
    try {
      const lab_id = req.params.lab_id;
      const result = await pool.query(`SELECT * FROM laboratory.ground_analysis_cc_view WHERE lab_id = $1;`, [lab_id]);
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: "Internal Server Error"});
    }
  });

  router.post(`/qctxt`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      const {
        header_id,
        lab_id,
        field_id,
        pH,
        ext_acid,
        calcium,
        magnesium,
        potassium,
        copper,
        manganese,
        iron,
        zinc,
        phosphorus,
        sand,
        clay,
        silt,
        txt_name
      } = req.body;

      await pool.query('CALL laboratory.insert_ground_cctxt($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);', [lab_id, header_id, field_id, pH, ext_acid, potassium, magnesium, phosphorus, copper, manganese, iron, zinc, calcium, sand, clay, silt, txt_name]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({message: "Data inserted successfully into multiple tables"});
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error inserting analysis:", error);
      res.status(500).json({error: error.message});
    }
  });

  router.put(`/qctxt/:lab_id`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      const lab_id = req.params.lab_id;
      const {
        header_id,
        field_id,
        pH,
        ext_acid,
        calcium,
        magnesium,
        potassium,
        copper,
        manganese,
        iron,
        zinc,
        phosphorus,
        sand,
        clay,
        silt,
        txt_name
      } = req.body;

      await pool.query('CALL laboratory.update_ground_cctxt($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);', [lab_id, header_id, field_id, pH, ext_acid, potassium, magnesium, phosphorus, copper, manganese, iron, zinc, calcium, sand, clay, silt, txt_name]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({message: "Data updated successfully in multiple tables"});
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error updating analysis:", error);
      res.status(500).json({error: error.message});
    }
  });

  router.delete(`/qctxt/:lab_id`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      const lab_id = req.params.lab_id;

      await pool.query('DELETE FROM laboratory.analysis WHERE lab_id = $1;', [lab_id]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({ message: "Ground data deleted successfully from multiple tables" });
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error deleting ground data:", error);
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}