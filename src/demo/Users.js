const respuesta = "hola";

const def = (req, res) => {
  res.send([
    { id: 1, name: "Gema" },
    { id: 2, name: "Jose" },
  ]);
};

module.exports = def;

// export default re;

// export { re, respuesta };
