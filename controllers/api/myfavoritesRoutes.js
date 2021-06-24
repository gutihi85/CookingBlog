const router = require('express').Router();
const { Myfavorites } = require('../../models');

router.post('/', async (req, res) => {
    // create a new favorite
    try {
      const myfavoritesData = await Myfavorites.create(req.body);
      res.status(200).json(myfavoritesData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;