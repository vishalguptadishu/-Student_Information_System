import { useState } from "react"
import "./InputSection.css"

const InputSection=()=>{
    let [name ,setname]=useState("")
    let [s_class ,sets_class]=useState("")
    let [roll_no ,setroll_no]=useState("")
    let [subject ,setsubject]=useState("")

    function HandalSubmit(e){
        e.preventDefault()
        let student_obj={
            name,
            s_class,
            roll_no,
            subject
            
        }
       
        let storedStudentObjects = JSON.parse(localStorage.getItem("student_obj_store")) || [];
        let updatedStudentObjects = [...storedStudentObjects, student_obj];
        localStorage.setItem("student_obj_store", JSON.stringify(updatedStudentObjects));
      
    }

    return (
        <div className="InputSection">
        <form action="" onSubmit={HandalSubmit} >
           <label htmlFor="">Name</label>
           <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}} />
           <label htmlFor="">Class</label>
           <input type="text" placeholder="Class" onChange={(e)=>{sets_class(e.target.value)}} />
           <label htmlFor="">Roll No.</label>
           <input type="number" placeholder="Roll No" onChange={(e)=>{setroll_no(e.target.value)}} />
           <label htmlFor="">Subject</label>
           <input type="text" placeholder="Subject" onChange={(e)=>{setsubject(e.target.value)}} />
           <input type="submit"  />
        </form>
          
        </div>
    )
}
export default InputSection