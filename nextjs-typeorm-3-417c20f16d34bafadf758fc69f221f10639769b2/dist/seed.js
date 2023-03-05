"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Post = require("./entity/Post");
require("reflect-metadata");
var _typeorm = require("typeorm");
var _User = require("./entity/User");
(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, u1, p1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            u1 = new _User.User();
            u1.username = "xiewen";
            u1.passwordDigest = "xxx";
            _context.next = 6;
            return manager.save(u1);
          case 6:
            console.log(u1.id);
            p1 = new _Post.Post();
            p1.title = "第一篇文章";
            p1.content = "这里是是小谢的第一篇文章";
            p1.authorId = "2";
            _context.next = 13;
            return manager.save(p1);
          case 13:
            connection.close();
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});