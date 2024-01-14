import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../Firebase";

const StudentList = () => {
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setStudentData(data)
    });
  }, []);

const deleteData = (key) => {
  const db = getDatabase(app);
  const studentRef = ref(db, 'student/'+key);
  remove(studentRef)
}


  return <div>
    <h1>Student list</h1>
    {studentData && (
      <div>
        {Object.entries(studentData).map(([key, value])=> {
          return(
            <div key={key}>
              <p>{value.studentName} {value.phoneNumber}</p>
           <button onClick={()=> {deleteData(key)}}>delete</button>
            </div>
          )
        })}
      </div>
    )}
  </div>;
};

export default StudentList;
