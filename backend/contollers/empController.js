const connection = require('../config');

/*Get employee list*/
exports.getEmp = (req, res)=>{
    console.log('emp list');
    connection.query('select * from employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}

/*Get employee using id */
exports.getId = (req, res)=>{
    console.log('emp list using id');
    const id = req.params.id;
    connection.query('select * from employee where EmpId=?',[id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}

/*POST create new employee */
exports.addEmp = (req, res)=> {
    console.log('create new employee');
    const emp = req.body;
    const EmpId = req.body.EmpId;
    const Name = req.body.Name;
    const EmpCode = req.body.EmpCode;
    const Salary = req.body.Salary;

    connection.query("select EmpId from employee where EmpId= "+ EmpId, function (err, row){
        if (row && row.length) {
            res.status(500).json({message:"record already exists!",data:err});
        } else {
            connection.query('insert into employee(EmpId,Name,EmpCode,Salary) value(?,?,?,?)',[EmpId,Name,EmpCode,Salary], (err,result)=>{
                if (!err)
                    // res.send(rows);
                    res.json({message:"Employee added successfully!",data:emp});
                else
                    console.log(err);
            })
        }
    })
}

/*PUT edit employee using id */
exports.editEmp = ( req, res)=> {
    console.log('Edit employee');
    const emp = req.body;
    const id = req.params.id;
    console.log(id);
    const Name = req.body.Name;
    const EmpCode = req.body.EmpCode;
    const Salary = req.body.Salary;
    connection.query('update employee set Name=?,EmpCode=?,Salary=? where EmpId=?',[Name,EmpCode,Salary,id], (err,result)=>{
        if (!err)
            // res.send(rows);
            res.json({message:"Employee updated successfully!",data:emp});
        else
            // console.log(err);
            res.status(500).json(err);
    })
}

/*DELETE delete employee using id */
exports.deleteEmp = ( req, res)=> {
    console.log('delete employee');
    const id = req.params.id;
    // console.log(id);

  connection.query("select EmpId from employee where EmpId= "+ id, function (err, row){
        if (row && row.length) {
            console.log('Case row was found!');
            // console.log(selectUsername);
            connection.query('delete from employee where EmpId=?',[id], (err,result)=>{
                if (!err)
                    // res.send(rows);
                    res.json({message:"Employee deleted successfully!",data:id});
                else
                    res.status(500).json(err);
            });
        } else {
            res.status(500).json({message:"Data Not found!",data:err});
        }
    })
}
