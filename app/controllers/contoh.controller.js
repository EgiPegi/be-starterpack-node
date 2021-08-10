const db = require("../models");
const Contoh = db.contoh;

//Contoh create
exports.postContoh = (req, res) => {
  const contoh = new Contoh({
    judul: req.body.judul,
    img: req.body.img,
  });
  contoh
    .save(contoh)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the contoh.",
      });
    });
};

//Contoh read
exports.getContoh = (req, res) => {
  const judul = req.query.judul;
  var condition = judul ? { judul: { $regex: new RegExp(judul), $options: "i" } } : {};

  Contoh.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Contoh.",
      });
    });
};

exports.getContohById = (req, res) => {
  const id = req.params.id;

  Contoh.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Contoh with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Contoh with id=" + id });
    });
};

//Contoh update
exports.putContoh = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Contoh.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Contoh with id=${id}. Maybe Contoh was not found!`,
        });
      } else res.send({ message: "Contoh was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Contoh with id=" + id,
      });
    });
};

//Contoh delete
exports.delContoh = (req, res) => {
  const id = req.params.id;

  Contoh.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Contoh with id=${id}. Maybe Contoh was not found!`,
        });
      } else {
        res.send({
          message: "Contoh was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Contoh with id=" + id,
      });
    });
};

exports.delAllContoh = (req, res) => {
  Contoh.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Contoh were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Contoh."
      });
    });
};
