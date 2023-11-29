const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dogs', {
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:0,
        }
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:0,
        }
    },
    life_span:{
        type: DataTypes.STRING,
        allowNull:false,
    }
  },
  {timestamps:false}
  );
};