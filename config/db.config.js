module.exports = {
    HOST: "fasvoyek.mssql.somee.com",
    PORT: "1433",
    USER: "fasvoyek_SQLLogin_1",
    PASSWORD: "kftc9jcrzk",
    DB: "fasvoyek",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };