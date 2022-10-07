/* The reason for these is that sequelize does not allow you 
to create databases within its api 
It only allows you to create tables columns and query the database */
DROP DATABASE IF EXISTS todos_db;
CREATE DATABASE todos_db;
/* after writing these login into mysql
    -mysql -u root -p
copy DROP DATABASE and CREATE DATABASE lines and paste into mysql shell
*/
