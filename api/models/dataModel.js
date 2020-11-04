'use strict';
const db = require('../controllers/db');
var Data = function (data) {
  this.name = data.name;
  this.descriptor = data.descriptor;
};
Data.getAllDatas = (result) => {
  let sql = 'SELECT data_name as name, data_item_1, data_item_2, data_item_3, data_item_4, data_item_5, data_item_6, data_item_7, data_item_8 FROM inputdata';
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    // Create response
    let res = {};
    for (let i = 0; i < response.length; i++) {
      let obj = {};
      obj.name = response[i].name;
      let arr = [];
      arr.push(convertToArray(response[i].data_item_1));
      arr.push(convertToArray(response[i].data_item_2));
      arr.push(convertToArray(response[i].data_item_3));
      arr.push(convertToArray(response[i].data_item_4));
      arr.push(convertToArray(response[i].data_item_5));
      arr.push(convertToArray(response[i].data_item_6));
      arr.push(convertToArray(response[i].data_item_7));
      arr.push(convertToArray(response[i].data_item_8));
      obj.descriptors = arr;
      res[i] = obj;
    }
    result(null, res);
  });
};
Data.createData = (newData, result) => {
  let sql = 'INSERT INTO inputdata SET ?';
  var newObj = {};
  // newObj.data_id = 4;
  newObj.data_name = newData.name;
  newObj.data_item_1 = newData.descriptor;
  newObj.data_item_2 = newData.descriptor;
  newObj.data_item_3 = newData.descriptor;
  newObj.data_item_4 = newData.descriptor;
  newObj.data_item_5 = newData.descriptor;
  newObj.data_item_6 = newData.descriptor;
  newObj.data_item_7 = newData.descriptor;
  newObj.data_item_8 = newData.descriptor;
  db.query(sql, newObj, (err, response) => {

    if (err) result(err, null);
    // result(null, "Ok");
  });
};
Data.getDetailData = (data_id, result) => {
  let sql =
    'select * from inputdata where inputdata.data_id = ?';
  db.query(sql, data_id, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
Data.deleteData = (data_id, result) => {
  let sql = 'DELETE FROM inputdata WHERE data_id = ?';
  db.query(sql, data_id, (err, response) => {
    if (err) result(err, null);
    result(null, data_id);
  });
};
Data.updateData = (newData, result) => {

  let sql = '';
  var newObj = {};
  // newObj.data_id = 44;
  newObj.data_name = newData.name;
  console.log(newData.position);
  switch (newData.position) {
    case 1:
      newObj.data_item_1 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_1 = ? WHERE data_name = ?';
      break;
    case 2:
      newObj.data_item_2 = (newData.descriptor);
      sql = 'UPDATE inputdata SET data_item_2 = ? WHERE data_name = ?';
      break;
    case 3:
      newObj.data_item_3 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_3 = ? WHERE data_name = ?';
      break;
    case 4:
      newObj.data_item_4 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_4 = ? WHERE data_name = ?';
      break;
    case 5:
      newObj.data_item_5 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_5 = ? WHERE data_name = ?';
      break;
    case 6:
      newObj.data_item_6 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_6 = ? WHERE data_name = ?';
      break;
    case 7:
      newObj.data_item_7 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_7 = ? WHERE data_name = ?';
      break;
    case 8:
      newObj.data_item_8 = newData.descriptor;
      sql = 'UPDATE inputdata SET data_item_8 = ? WHERE data_name = ?';
      break;
    default:
      break;
  }
  console.log(newObj);
  db.query(sql, [newData.descriptor, newData.name], (err, response) => {
    if (err) result(err, null);
    result(null, "OK");
  });
};
function convertToArray(text) {
  let temp = text.split(',');
  let arr = [];
  temp.forEach(element => {
    arr.push(Number(element.trim()));

  });
  return arr;
}

module.exports = Data;
