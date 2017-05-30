const UserModel = require('./models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const createUser = (req, res) => {
  const user = new UserModel(req.body);
  const hashed = bcrypt.hashSync(req.body.password, 10);
  user.password = hashed;

  user.save(err => {
    if (err) res.send(err);
    const omitPass = _.omit(user, 'password');
    const token = jwt.sign(omitPass, 'radio');

    res.json({
      success: true,
      token,
    });
  });
};

const authenticateUser = (req, res) => {
  UserModel.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) res.send(err);

      if (!user) {
        res.json({
          success: false,
          message: 'User not found',
        });
      } else if (user) {
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({
            success: false,
            message: 'Incorrect password',
          });
        } else {
          console.log(user);
          const omitPass = _.omit(user, 'password');
          const token = jwt.sign(omitPass, 'radio');

          res.json({
            success: true,
            token,
          });
        }
      }
    }
  );
};

const getAllUsers = (req, res) => {
  UserModel.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};

const getUser = (req, res) => {
  const { id } = req.params;

  UserModel.findById(id, (err, user) => {
    if (err) res.send(err);

    if (!user) {
      res.json({
        success: 'false',
        message: 'No user with that id',
      });
    } else {
      res.json({
        success: 'true',
        user,
      });
    }
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  UserModel.findOneAndUpdate({ _id: id }, body, (err, user) => {
    if (err) res.send(err);

    if (!user) {
      res.json({
        success: false,
        message: 'User not found',
      });
    } else {
      res.json({
        success: true,
        message: 'Updated',
      });
    }
  });
};

const updatePassword = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  UserModel.findById(id, (err, user) => {
    if (err) res.send(err);

    const hashed = bcrypt.hashSync(body.password, 10);
    user.password = hashed;

    user.save(saveErr => {
      if (saveErr) res.send(saveErr);

      res.json({
        success: true,
      });
    });
  });
};

const checkIfExists = (res, req) => {
  const { email } = req.body;

  UserModel.findOne({ email }, (err, user) => {
    if (user) {
      if (user.email === email) {
        res.json({
          success: false,
          message: 'Email taken',
        });
      }
    }

    res.json({
      success: true,
      message: 'Unique',
    });
  });
};

module.exports = {
  getUser,
  createUser,
  authenticateUser,
  getAllUsers,
  updateUser,
  updatePassword,
  checkIfExists,
};
