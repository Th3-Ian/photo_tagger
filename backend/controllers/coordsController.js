const getCoords = (req, res) => {
  res.status(200).json({ message: 'Get Coordinates' });
};

module.exports = {
  getCoords
};
