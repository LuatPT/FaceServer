'use strict';
module.exports = function (app) {
  let dataCtrl = require('../controllers/dataController');
  // todoList Routes
  app
    .route('/api/v1/inputdata')
    .get(dataCtrl.get_all_datas)
    .post(dataCtrl.create_new_data);
  //data phải đặt tên đúng với dataController
  app
    .route('/api/v1/inputdata/:name')
    .get(dataCtrl.get_detail_data)
    .put(dataCtrl.update_data)
    .delete(dataCtrl.delete_data);

}