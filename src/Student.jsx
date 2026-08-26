
function Student({name,age,course,skills,isplaced,showmessage}){
    
    return(
        <div>
            <h1>
                STUDENT DETAILS
            </h1>
            <h2>Name:{name}</h2>
            <p>Age:{age}</p>
            <p>Course:{course}</p>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill)=>(
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <p>Placed:{isplaced?"Yes":"NO"}</p>
            <button onClick={showmessage}>show message</button>

        </div>
    );
}
export default Student;