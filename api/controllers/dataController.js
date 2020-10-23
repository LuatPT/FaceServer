'use strict';
const Data = require('../models/dataModel');
exports.get_all_datas = (req, res) => {
  Data.getAllDatas((err, datas) => {
    if (err) res.send(err);
    res.send(datas);
  });
};
exports.create_new_data = (req, res) => {
  var new_data = new Data(req.body);
  // console.log(new_data);
  Data.createData(new_data, (err, data) => {
    if (err) res.send(err);
    // res.json('data  have been created');
  });
};
exports.get_detail_data = (req, res) => {
  Data.getDetailData(req.params.data_id, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
};
exports.delete_data = (req, res) => {
  Data.deleteData(req.params.data_id, (err, data) => {
    if (err) res.send(err);
    res.json('Data have been deleted');
  });
};
exports.update_data = (req, res) => {
  Data.updateData(req.body, (err, data) => {
    if (err) res.send(err);
    res.json('Data have been updated');
  });
};
