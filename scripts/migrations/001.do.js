module.exports.generateSql = function () {
  return `create table users (
        user_id serial primary key,
        email varchar(50) unique not null,
        password varchar(50) unique not null
    );`;
};
