WITH raw_hosts AS (
	SELECT * FROM {{ source('airbnb', 'hosts' )}}
)

SELECT
	id AS host_id,
    name as host_name,
    IS_SUPERHOST,
    CREATED_AT,
    UPDATED_AT
FROM
	raw_hosts