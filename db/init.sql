--CREATE DATABASE IF NOT EXITS codrrdb

SELECT 'CREATE DATABASE codrrdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'codrrdb')\gexec