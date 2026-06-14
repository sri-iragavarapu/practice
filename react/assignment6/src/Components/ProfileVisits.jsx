import React, {useState, useEffect} from "react";
function ProfileVisits() {
    const[visits, setVisits] = useState(0);
    useEffect(() => {
        document.title = `Profile Visits:${visits}`;}, [visits]);
        return(
            <div className="container">
                <h1>Profile Visits Counter</h1>
                <h2>Visits:{visits}</h2>
                <button onClick={() => setVisits(visits+1)}>Visit Profile</button>
                {
                visits >= 5 && (
                <h3>Popular Profile</h3>
                )
                }
            </div>
        );
}
export default ProfileVisits;