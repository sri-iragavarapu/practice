import {
  useContext,
  useReducer,
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} from "react";

import { UserContext } from "../context/UserContext";
import { subjectReducer } from "../reducer/subjectReducer";

function Dashboard({ goToProfile }) {

  const { user } = useContext(UserContext);

  const [subject, setSubject] = useState("");

  const inputRef = useRef(null);

  const [subjects, dispatch] = useReducer(
    subjectReducer,
    [],
    () => {
      const savedSubjects = localStorage.getItem("subjects");
      return savedSubjects ? JSON.parse(savedSubjects) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addSubject = useCallback(() => {

    if (subject.trim() === "") return;

    dispatch({
      type: "ADD",
      payload: subject
    });

    setSubject("");

    inputRef.current.focus();

  }, [subject]);

  const completeSubject = useCallback((id) => {

    dispatch({
      type: "COMPLETE",
      payload: id
    });

  }, []);

  const deleteSubject = useCallback((id) => {

    dispatch({
      type: "DELETE",
      payload: id
    });

  }, []);

  const total = useMemo(() => subjects.length, [subjects]);

  const completed = useMemo(() => {
    return subjects.filter(item => item.completed).length;
  }, [subjects]);

  const pending = useMemo(() => {
    return subjects.filter(item => !item.completed).length;
  }, [subjects]);

  return (

    <div className="container">

      <div className="card">

        <h1>Study Planner Dashboard</h1>

        <h2>Welcome {user}</h2>

        <button
          className="profile-btn"
          onClick={goToProfile}
        >
          View Profile
        </button>

        <div className="input-group">

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <button
            className="add-btn"
            onClick={addSubject}
          >
            Add
          </button>

        </div>

        <div className="stats">

          <div className="stat-box">
            <h3>{total}</h3>
            <p>Total</p>
          </div>

          <div className="stat-box">
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>

          <div className="stat-box">
            <h3>{pending}</h3>
            <p>Pending</p>
          </div>

        </div>

        {
          subjects.length === 0
          ? <h3 style={{textAlign:"center", marginTop:"20px"}}>
    No Subjects Added 📚
</h3>
          : subjects.map((item) => (

            <div
              className="subject-item"
              key={item.id}
            >

              <span
                className={
                  item.completed
                  ? "subject-name completed"
                  : "subject-name"
                }
              >
                {item.name}
              </span>

              <div>

                <button
  className="complete-btn"
  onClick={() => completeSubject(item.id)}
>
  {item.completed ? "Incomplete" : "Complete"}
</button>

                <button
                  className="delete-btn"
                  onClick={() => deleteSubject(item.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Dashboard;