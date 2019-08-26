from models.employee_pb2 import Employee
import uuid
import base64
import json
import os

def serialize(employee: Employee) -> str:
    """
    Given an employee object serializes it to a b64 encoded string
    :param employee: Employee Object
    :return: b64 encoded string
    """
    return base64.b64encode(employee.SerializeToString()).decode('utf-8')

def deserialize(employee_str) -> Employee:
    """
    Given an base64 encoded string parse and convert to Employee object
    :param employee_str: base64 encoded string
    :return: Employee Object
    """
    decoded = base64.b64decode(employee_str)
    employee_obj = Employee()
    employee_obj.ParseFromString(decoded)
    return employee_obj

def create_employee_object() -> Employee:
    """
    Creates a dummy employee object
    :return:
    """
    employee = Employee()
    employee.employee_id = str(uuid.uuid4())
    employee.name = "Bob"
    employee.type = employee.EmployeeType.FULLTIME
    employee.email = "bob@company.com"
    employee.extension = 9090
    employee.groups.extend(['seattle','shoes','store101'])
    return employee

def write_to_file():
    """
    Writes employee object to file
    :return:
    """
    employee: Employee = create_employee_object()
    with open('proto.txt', 'w') as the_file:
        the_file.write(serialize(employee=employee))

def read_from_file():
    """
    Reads employee object from file
    :return:
    """
    with open('proto.txt', 'r') as the_file:
        employee_obj = deserialize(the_file.readline())
        assert employee_obj.name == "Bob"

def compare_size_with_json():
    """
    Compares size between PROTO and JSON
    :return:
    """
    with open('proto.txt', 'w') as the_file:
        json_str = json.dumps({"employee_id" : str(uuid.uuid4()), "name" : "Bob", "type" : "FULLTIME", "email" : "bob@company.com", "extension": 9090, "groups" : ["seattle","shoes","store101"]})
        the_file.write(base64.b64encode(bytes(json_str, "utf-8")).decode('utf-8'))
    json_size = os.path.getsize('proto.txt')
    write_to_file()
    proto_size = os.path.getsize('proto.txt')
    print("JSON size is {} and PROTO size is {}".format(json_size, proto_size))
    print("PROTO is {} percent smaller than JSON".format((proto_size/json_size) * 100))


write_to_file()
read_from_file()
compare_size_with_json()