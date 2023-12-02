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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    minHeight:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:0,
        }
    },
    maxHeight:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
          min:0,
      }
    },
    minWeight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:0,
        }
    },
    maxWeight: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          min:0,
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life_span:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    origen:{
      type: DataTypes.STRING,
      allowNull:false,
    }
  },
  {timestamps:false}
  );
};