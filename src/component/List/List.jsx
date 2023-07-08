import "./List.css"

const List = ()=>{
    let storedStudentObjects = JSON.parse(localStorage.getItem("student_obj_store")) || [];
    console.log(storedStudentObjects)
    return (
        <div className="List">
         <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {storedStudentObjects.map((elem) => (
            <tr key={elem.roll_no}>
              <td>{elem.name}</td>
              <td>{elem.s_class}</td>
              <td>{elem.roll_no}</td>
              <td>{elem.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
         
        </div>
    )
}
export default List;
