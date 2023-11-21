-- SQL function for inserting data
CREATE OR REPLACE PROCEDURE laboratory.insert_foliar_ccbs(
    lab_id_param VARCHAR,
    header_id_param NUMERIC,
    field_id_param VARCHAR,
    n_total_param NUMERIC,
    protein_param NUMERIC,
    carbon_param NUMERIC,
    sulfur_param NUMERIC,
    potassium_param NUMERIC,
    calcium_param NUMERIC,
    magnesium_param NUMERIC,
    phosphorus_param NUMERIC,
    copper_param NUMERIC,
    manganese_param NUMERIC,
    iron_param NUMERIC,
    zinc_param NUMERIC,
    boron_param NUMERIC
)
BEGIN ATOMIC
    INSERT INTO laboratory.analysis (lab_id, header_id, field_id)
    VALUES (lab_id_param, header_id_param, field_id_param);

    INSERT INTO laboratory.foliar (lab_id, n_total, protein)
    VALUES (lab_id_param, n_total_param, protein_param);

    INSERT INTO laboratory.complete_chemical (lab_id, potassium, magnesium, phosphorus, copper, manganese, iron, zinc, calcium)
    VALUES (lab_id_param, potassium_param, magnesium_param, phosphorus_param, copper_param, manganese_param, iron_param, zinc_param, calcium_param);

    INSERT INTO laboratory.boron (lab_id, boron)
    VALUES (lab_id_param, boron_param);

    INSERT INTO laboratory.sulfur (lab_id, carbon, sulfur)
    VALUES (lab_id_param, carbon_param, sulfur_param);
END;

-- SQL function for updating data
CREATE OR REPLACE PROCEDURE laboratory.update_foliar_ccbs(
    lab_id_param VARCHAR,
    header_id_param NUMERIC,
    field_id_param VARCHAR,
    n_total_param NUMERIC,
    protein_param NUMERIC,
    carbon_param NUMERIC,
    sulfur_param NUMERIC,
    potassium_param NUMERIC,
    calcium_param NUMERIC,
    magnesium_param NUMERIC,
    phosphorus_param NUMERIC,
    copper_param NUMERIC,
    manganese_param NUMERIC,
    iron_param NUMERIC,
    zinc_param NUMERIC,
    boron_param NUMERIC
)
BEGIN ATOMIC
    UPDATE laboratory.analysis
    SET header_id = header_id_param, field_id = field_id_param
    WHERE lab_id = lab_id_param;

    UPDATE laboratory.foliar
    SET n_total = n_total_param, protein = protein_param
    WHERE lab_id = lab_id_param;

    UPDATE laboratory.complete_chemical
    SET potassium = potassium_param, magnesium = magnesium_param, phosphorus = phosphorus_param,
        copper = copper_param, manganese = manganese_param, iron = iron_param, zinc = zinc_param, calcium = calcium_param
    WHERE lab_id = lab_id_param;

    UPDATE laboratory.boron
    SET boron = boron_param
    WHERE lab_id = lab_id_param;

    UPDATE laboratory.sulfur
    SET carbon = carbon_param, sulfur = sulfur_param
    WHERE lab_id = lab_id_param;
END;

-- SQL function for deleting data
CREATE OR REPLACE PROCEDURE laboratory.delete_foliar_ccbs(
    lab_id_param VARCHAR
)
BEGIN ATOMIC
    DELETE FROM laboratory.foliar
    WHERE lab_id = lab_id_param;

    DELETE FROM laboratory.complete_chemical
    WHERE lab_id = lab_id_param;

    DELETE FROM laboratory.boron
    WHERE lab_id = lab_id_param;

    DELETE FROM laboratory.sulfur
    WHERE lab_id = lab_id_param;

    DELETE FROM laboratory.analysis
    WHERE lab_id = lab_id_param;
END;