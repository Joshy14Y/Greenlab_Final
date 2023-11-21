CREATE OR REPLACE PROCEDURE laboratory.insert_ground_cctxt(
    lab_id_param VARCHAR,
    header_id_param NUMERIC,
    field_id_param VARCHAR,
    pH_param NUMERIC,
    ext_acid_param NUMERIC,
    potassium_param NUMERIC,
    magnesium_param NUMERIC,
    phosphorus_param NUMERIC,
    copper_param NUMERIC,
    manganese_param NUMERIC,
    iron_param NUMERIC,
    zinc_param NUMERIC,
    calcium_param NUMERIC,
    sand_param NUMERIC,
    clay_param NUMERIC,
	silt_param NUMERIC,
	txt_name_param VARCHAR
)
BEGIN ATOMIC
     -- Insert into laboratory.analysis
    INSERT INTO laboratory.analysis (lab_id, header_id, field_id)
    VALUES (lab_id_param, header_id_param, field_id_param);

    -- Insert into laboratory.ground
    INSERT INTO laboratory.ground (lab_id, "pH", ext_acid)
    VALUES (lab_id_param, pH_param, ext_acid_param);

    -- Insert into laboratory.complete_chemical
    INSERT INTO laboratory.complete_chemical (lab_id, potassium, magnesium, phosphorus, copper, manganese, iron, zinc, calcium)
    VALUES (lab_id_param, potassium_param, magnesium_param, phosphorus_param, copper_param, manganese_param, iron_param, zinc_param, calcium_param);

    -- Insert into laboratory.texture
    INSERT INTO laboratory.texture (lab_id, sand, clay, silt, textural_name)
    VALUES (lab_id_param, sand_param, clay_param, silt_param, txt_name_param);
END;

CREATE OR REPLACE PROCEDURE laboratory.update_ground_cctxt(
    lab_id_param VARCHAR,
    header_id_param NUMERIC,
    field_id_param VARCHAR,
    pH_param NUMERIC,
    ext_acid_param NUMERIC,
    potassium_param NUMERIC,
    magnesium_param NUMERIC,
    phosphorus_param NUMERIC,
    copper_param NUMERIC,
    manganese_param NUMERIC,
    iron_param NUMERIC,
    zinc_param NUMERIC,
    calcium_param NUMERIC,
    sand_param NUMERIC,
    clay_param NUMERIC,
	silt_param NUMERIC,
	txt_name_param VARCHAR
)
BEGIN ATOMIC
    -- Update laboratory.analysis
    UPDATE laboratory.analysis
    SET header_id = header_id_param, field_id = field_id_param
    WHERE lab_id = lab_id_param;

    -- Update laboratory.ground
    UPDATE laboratory.ground
    SET "pH" = pH_param, ext_acid = ext_acid_param
    WHERE lab_id = lab_id_param;

    -- Update laboratory.complete_chemical
    UPDATE laboratory.complete_chemical
    SET potassium = potassium_param, magnesium = magnesium_param, phosphorus = phosphorus_param,
        copper = copper_param, manganese = manganese_param, iron = iron_param, zinc = zinc_param, calcium = calcium_param
    WHERE lab_id = lab_id_param;

    -- Update laboratory.texture
    UPDATE laboratory.texture
    SET sand = sand_param, clay = clay_param, silt = silt_param, textural_name = txt_name_param
    WHERE lab_id = lab_id_param;
END;

-- SQL procedure for deleting ground data
CREATE OR REPLACE PROCEDURE laboratory.delete_ground_cctxt(
    lab_id_param VARCHAR
)
BEGIN ATOMIC
    -- Delete from laboratory.ground
    DELETE FROM laboratory.ground
    WHERE lab_id = lab_id_param;

    -- Delete from laboratory.complete_chemical
    DELETE FROM laboratory.complete_chemical
    WHERE lab_id = lab_id_param;

    -- Delete from laboratory.texture
    DELETE FROM laboratory.texture
    WHERE lab_id = lab_id_param;

    -- Delete from laboratory.analysis
    DELETE FROM laboratory.analysis
    WHERE lab_id = lab_id_param;
END;