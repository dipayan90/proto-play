from models.employee_pb2 import Employee
import uuid
import base64

def serialize(employee: Employee) -> str:
    return base64.b64encode(employee.SerializeToString()).decode('utf-8')

def deserialize(employee_str) -> Employee:
    decoded = base64.b64decode(employee_str)
    employee_obj = Employee()
    employee_obj.ParseFromString(decoded)
    return employee_obj

def create_employee_object() -> Employee:
    employee = Employee()
    employee.employee_id = str(uuid.uuid4())
    employee.name = "Bob"
    employee.type = employee.EmployeeType.FULLTIME
    employee.email = "bob@company.com"
    employee.extension = 9090
    employee.groups.extend(['seattle','shoes','store101'])
    return employee

def write_to_file():
    employee: Employee = create_employee_object()
    with open('proto.txt', 'w') as the_file:
        the_file.write(serialize(employee=employee))

def read_from_file():
    with open('proto.txt', 'r') as the_file:
        employee_obj = deserialize(the_file.readline())
        assert employee_obj.name == "Bob"

write_to_file()
read_from_file()
