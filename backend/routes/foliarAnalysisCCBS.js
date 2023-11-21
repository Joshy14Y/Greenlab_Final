const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get(`/qcbs`, async (req, res) => {
    try {
      const result = await pool.query(`SELECT * FROM laboratory.foliar_analysis_ccbs_view`);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: "Internal Server Error"});
    }
  });

  router.get(`/qcbs/:lab_id`, async (req, res) => {
    try {
      const lab_id = req.params.lab_id;
      const result = await pool.query(`SELECT * FROM laboratory.foliar_analysis_ccbs_view WHERE an.lab_id = $1;`, [lab_id]);
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: "Internal Server Error"});
    }
  });

  router.post(`/qcbs`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      let {
        header_id,
        lab_id,
        field_id,
        n_total,
        protein,
        carbon,
        sulfur,
        potassium,
        calcium,
        magnesium,
        phosphorus,
        copper,
        manganese,
        iron,
        zinc,
        boron
      } = req.body;

      await pool.query('CALL laboratory.insert_foliar_ccbs($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);', [lab_id, header_id, field_id, n_total, protein, carbon, sulfur, potassium, calcium, magnesium, phosphorus, copper, manganese, iron, zinc, boron]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({message: "Data inserted successfully into multiple tables"});
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error inserting analysis:", error);
      res.status(500).json({error: error.message});
    }
  });

  router.put(`/qcbs/:lab_id`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      const lab_id = req.params.lab_id;
      const {
        header_id,
        field_id,
        n_total,
        protein,
        carbon,
        sulfur,
        potassium,
        calcium,
        magnesium,
        phosphorus,
        copper,
        manganese,
        iron,
        zinc,
        boron
      } = req.body;

      await pool.query('CALL laboratory.update_foliar_ccbs($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);', [lab_id, header_id, field_id, n_total, protein, carbon, sulfur, potassium, calcium, magnesium, phosphorus, copper, manganese, iron, zinc, boron]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({message: "Data updated successfully in multiple tables"});
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error updating analysis:", error);
      res.status(500).json({error: error.message});
    }
  });

  router.delete(`/qcbs/:lab_id`, async (req, res) => {
    try {
      await pool.query('BEGIN'); // Begin transaction

      const lab_id = req.params.lab_id;

      await pool.query('DELETE FROM laboratory.analysis WHERE lab_id = $1;', [lab_id]);

      await pool.query('COMMIT'); // Commit the transaction

      res.json({ message: "Foliar data deleted successfully from multiple tables" });
    } catch (error) {
      await pool.query('ROLLBACK'); // Rollback the transaction in case of an error
      console.error("Error deleting ground data:", error);
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}