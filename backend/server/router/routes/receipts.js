'use strict';

module.exports = (app, db) => {

  // GET all receipts
  app.get('/receipts', (req, res) => {
    db.receipts.findAll({
      order: 'id DESC'
    })
      .then(receipts => {
        res.json(receipts);
      });
  });

  // GET one receipt by id
  app.get('/receipt/:id', (req, res) => {
    const id = req.params.id;
    db.receipts.find({
      where: { id: id }
    })
      .then(receipt => {
        res.json(receipt);
      });
  });

  // POST search route
  app.post('/receipts', (req, res) => {
    const query = req.body.query;
    db.receipts.findAll({
      where: query
    })
      .then(receipts => {
        res.json(receipts);
      });
  });

  // POST single receipt
  app.post('/receipt', (req, res) => {
    console.log(req.body)
    const task = req.body.task;
    const urgency = req.body.urgency ? req.body.urgency : 'low';
    db.receipts.create({
      task: task,
      urgency: urgency
    })
      .then(newReceipt => {
        res.json(newReceipt);
      })
  });

  // POST multiple receipts
  app.post('/receipts/bulk', (req, res) => {
    const receiptList = req.body.receipts;
    db.receipts.bulkCreate(receiptList)
      .then(newReceipts => {
        res.json(newReceipts);
      })
  });

  // PATCH single receipt
  app.patch('/receipt/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.receipts.find({
      where: { id: id }
    })
      .then(receipt => {
        return receipt.updateAttributes(updates)
      })
      .then(updatedReceipt => {
        res.json(updatedReceipt);
      });
  });

  // PATCH multiple receipts
  app.patch('/receipts/bulk', (req, res) => {
    const ids = req.body.ids;
    const updates = req.body.updates;
    db.receipts.findAll({
      where: { id: { $in: ids } }
    })
      .then(receipts => {
        const updatePromises = receipts.map(receipt => {
         return receipt.updateAttributes(updates);
        });
        return db.Sequelize.Promise.all(updatePromises)
      })
      .then(updatedReceipts => {
        res.json(updatedReceipts);
      });
  });

  // DELETE single receipt
  app.delete('/receipt/:id', (req, res) => {
    const id = req.params.id;
    db.receipts.destroy({
      where: { id: id }
    })
      .then(deletedReceipt => {
        res.json(deletedReceipt);
      });
  });

  // DELETE multiple receipts
  app.delete('/receipts/bulk', (req, res) => {
    const ids = req.body.ids;
    db.receipts.findAll({
      where: { id: { $in: ids } }
    })
      .then(receipts => {
        const deletePromises = receipts.map(receipt => {
          return receipt.destroy();
        });
        return db.Sequelize.Promise.all(deletePromises)
      })
      .then(deletedReceipts => {
        res.json(deletedReceipts);
      });
  });
};
