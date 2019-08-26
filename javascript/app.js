const employee_file = require("./models/employee_pb");
const base64js = require('base64-js');
const fs = require('fs');

/***
 * Creates a random UUID on the fly.
 * @returns {string}
 */
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/***
 *  Given an  protobuf object converts to b64 encoded string
 * @param employee_object
 * @returns {*}
 */
serialize = function (employee_object) {
    return base64js.fromByteArray(employee_object.serializeBinary());
};

/***
 * Given a b64 encoded protobuf object, deserializes it to the Object
 * @param employee_str
 * @returns {employee_file.Employee.deserializeBinary}
 */
deserialize = function (employee_str) {
    const uint8bytearray = base64js.toByteArray(employee_str);
    return new employee_file.Employee.deserializeBinary(uint8bytearray);
};

create_employee_object = function() {
    let employee = new employee_file.Employee();
    employee.setEmployeeId(uuidv4());
    employee.setName("Bob");
    employee.setType(0);
    employee.setEmail("bob@company.com");
    employee.setExtension$(9090);
    employee.setGroupsList(["seattle","shoes","store101"]);
    return employee
};

/***
 * Writes protobuf object to file
 */
write_to_file = function() {
    const employee = create_employee_object();
    fs.writeFile("proto.txt", serialize(employee), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
};

/***
 * Reads and displays protobuf object from file
 */
read_from_file = function() {
    fs.readFile("proto.txt", {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            const employee_obj = deserialize(data);
            console.log("Message from 'proto.txt' is");
            console.log(employee_obj);
        } else {
            console.log(err);
        }
    });
};

write_to_file();
read_from_file();