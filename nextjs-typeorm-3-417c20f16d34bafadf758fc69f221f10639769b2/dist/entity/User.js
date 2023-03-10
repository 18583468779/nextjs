"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _Post = require("./Post");
var _Comment = require("./Comment");
var _md = _interopRequireDefault(require("md5"));
var _typeorm = require("typeorm");
var _getDatabaseConnection = require("lib/getDatabaseConnection");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
var User = (_dec = (0, _typeorm.Entity)("users"), _dec2 = (0, _typeorm.Index)(["username"], {
  unique: true
}), _dec3 = (0, _typeorm.PrimaryGeneratedColumn)("increment"), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("varchar"), _dec6 = (0, _typeorm.CreateDateColumn)({
  type: "timestamp"
}), _dec7 = (0, _typeorm.UpdateDateColumn)({
  type: "timestamp"
}), _dec8 = (0, _typeorm.OneToMany)(function (type) {
  return _Post.Post;
}, function (post) {
  return post.author;
}), _dec9 = (0, _typeorm.OneToMany)(function (type) {
  return _Comment.Comment;
}, function (comment) {
  return comment.user;
}), _dec10 = (0, _typeorm.BeforeInsert)(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
    (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "passwordDigest", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "updatedAt", _descriptor5, this);
    (0, _initializerDefineProperty2["default"])(this, "posts", _descriptor6, this);
    (0, _initializerDefineProperty2["default"])(this, "comments", _descriptor7, this);
    (0, _defineProperty2["default"])(this, "password", '');
    (0, _defineProperty2["default"])(this, "passwordConfirmation", '');
    (0, _defineProperty2["default"])(this, "errors", {
      username: [],
      password: [],
      passwordConfirmation: []
    });
  }
  (0, _createClass2["default"])(User, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var connect, found;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _getDatabaseConnection.getDatabaseConnection)();
              case 2:
                connect = _context.sent;
                // console.log('object',this.username,this.password,this.passwordConfirmation);
                if (this.username.trim() === "") {
                  this.errors.username.push("????????????");
                }
                if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
                  this.errors.username.push("???????????????");
                }
                if (this.username.trim().length > 42) {
                  this.errors.username.push("???????????????");
                }
                _context.next = 8;
                return connect.manager.find(User, {
                  username: this.username
                });
              case 8:
                found = _context.sent;
                if (found.length > 0) {
                  this.errors.username.push("?????????????????????????????????????????????");
                }
                if (this.password === "") {
                  this.errors.password.push("??????????????????");
                }
                if (this.password !== this.passwordConfirmation) {
                  this.errors.passwordConfirmation.push("???????????????");
                }
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validate() {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return !!Object.values(this.errors).find(function (v) {
        return v.length > 0;
      });
    }
  }, {
    key: "generatePasswordDigest",
    value: function generatePasswordDigest() {
      this.passwordDigest = (0, _md["default"])(this.password);
    }
  }]);
  return User;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "passwordDigest", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updatedAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "posts", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "generatePasswordDigest", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "generatePasswordDigest"), _class2.prototype)), _class2)) || _class) || _class);
exports.User = User;