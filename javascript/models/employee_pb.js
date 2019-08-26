// source: employee.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.employee.models.Employee', null, global);
goog.exportSymbol('proto.employee.models.Employee.EmployeeType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employee.models.Employee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.employee.models.Employee.repeatedFields_, null);
};
goog.inherits(proto.employee.models.Employee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.employee.models.Employee.displayName = 'proto.employee.models.Employee';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.employee.models.Employee.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employee.models.Employee.prototype.toObject = function(opt_includeInstance) {
  return proto.employee.models.Employee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employee.models.Employee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.models.Employee.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    extension: jspb.Message.getFieldWithDefault(msg, 5, 0),
    groupsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employee.models.Employee}
 */
proto.employee.models.Employee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employee.models.Employee;
  return proto.employee.models.Employee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employee.models.Employee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employee.models.Employee}
 */
proto.employee.models.Employee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmployeeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.employee.models.Employee.EmployeeType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExtension$(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employee.models.Employee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employee.models.Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employee.models.Employee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employee.models.Employee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExtension$();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.employee.models.Employee.EmployeeType = {
  CONTRACTOR: 0,
  FULLTIME: 1
};

/**
 * optional string employee_id = 1;
 * @return {string}
 */
proto.employee.models.Employee.prototype.getEmployeeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.employee.models.Employee.prototype.setEmployeeId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.employee.models.Employee.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.employee.models.Employee.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EmployeeType type = 3;
 * @return {!proto.employee.models.Employee.EmployeeType}
 */
proto.employee.models.Employee.prototype.getType = function() {
  return /** @type {!proto.employee.models.Employee.EmployeeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.employee.models.Employee.EmployeeType} value */
proto.employee.models.Employee.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.employee.models.Employee.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.employee.models.Employee.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 extension = 5;
 * @return {number}
 */
proto.employee.models.Employee.prototype.getExtension$ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.employee.models.Employee.prototype.setExtension$ = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated string groups = 10;
 * @return {!Array<string>}
 */
proto.employee.models.Employee.prototype.getGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array<string>} value */
proto.employee.models.Employee.prototype.setGroupsList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.employee.models.Employee.prototype.addGroups = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.employee.models.Employee.prototype.clearGroupsList = function() {
  this.setGroupsList([]);
};


goog.object.extend(exports, proto.employee.models);
