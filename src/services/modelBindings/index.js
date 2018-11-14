const { Router } = require('express');
const { User, Prescription } = require('models');

const modelNotFound = res => res.status(404).send({ message: 'Entity with given ID was not found.' });

const router = Router();

router.param('requestedUser', async (req, res, next, id) => {
  try {
    const requestedUser = await User.findOne({ where: { id }, raw: true });
    if (!requestedUser) {
      return modelNotFound(res);
    }

    req.requestedUser = requestedUser;
    return next();
  } catch (e) {
    return res.status(500).send({message: e.toString()});
  }
});

router.param('prescription', async (req, res, next, id) => {
  try {
    const prescription = await Prescription.findById(id);
    if (!prescription) {
      return modelNotFound(res);
    }

    req.prescription = prescription;
    return next();
  } catch (e) {
    return res.status(500).send({message: e.toString()});
  }
});

/**
 * Registers a route-model bindings.
 * Returns a new router.
 *
 * @param app
 */
module.exports = () => {
  return router;
};
