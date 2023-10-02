import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Crud = () => {
    const data = [
        {
          employeeName: "John Doe",
          empId: 1,
          empRole: "Software Developer",
          doj: "Jan 1,2023"
        },
        {
          employeeName: "Tom Cruise",
          empId: 2,
          empRole: "Junior Software Developer",
          doj: "Jan 3,2023"
        },
        {
          employeeName: "Fayaz Mohamad",
          empId: 3,
          empRole: "Senior Software Developer",
          doj: "Jan 5,2023"
        },
        {
          employeeName: "Julie",
          empId: 4,
          empRole: "Devops Engineer",
          doj: "Jan 10,2023"
        },
        {
          employeeName: "Jan Doe",
          empId: 5,
          empRole: "Software Developer",
          doj: "Jan 15,2023"
        },
        {
          employeeName: "T Watson",
          empId: 6,
          empRole: "Software Developer",
          doj: "Jan 18,2023"
        },
        {
          employeeName: "John",
          empId: 7,
          empRole: "Software Developer",
          doj: "Jan 23,2023"
        },
        {
          employeeName: "Jackhy",
          empId: 8,
          empRole: "IT Engineer",
          doj: "Feb 1,2023"
        },
        {
          employeeName: "Lokesh",
          empId: 9,
          empRole: "Project Manager",
          doj: "Feb 4,2023"
        },
        {
          employeeName: "Gowda",
          empId: 10,
          empRole: "Lead Manager",
          doj: "Feb 10,2023"
        }
      ];
    
const {empname,setEmpname} = useState(data);
const navigate = useNavigate()

return(
<div>
    <button>Create</button>
        <table>
            <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>DOJ</th>
                <th>Action</th>
              </tr>
             </thead>
             <tbody>
                {data.map((item) => {
                    console.log(item)
                    return(
                <tr>
                    <td>{item.employeeName}</td>
                    <td>{item.empId}</td>
                    <td>{item.empRole}</td>
                    <td>{item.doj}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
                    )
                   })
            }
             </tbody>
          </table>
          </div>
)
}
export default Crud;