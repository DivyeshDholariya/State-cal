import { useState } from "react";
function Sum() {
    var [val, setval] = useState("");
    var [val1, setval1] = useState("");
    var [ans, setans] = useState("");


    const sum = () => {
        setans(parseInt(val) + parseInt(val1));
    }
    const sub = () => {
        setans(parseInt(val) - parseInt(val1));
    }
    const multi = () => {
        setans(parseInt(val) * parseInt(val1));
    }
    const div = () => {
        setans(parseInt(val) % parseInt(val1));
    }

    return (
        <div>

            <input type="text" placeholder='enter values' onChange={(e) => setval(e.target.value)} />
            <br></br>
            <input type="text" placeholder='enter values' onChange={(e) => setval1(e.target.value)} />
            <br></br>
            <input type="button" value={"sum"} onClick={sum} />
            <input type="button" value={"sub"} onClick={sub} />
            <input type="button" value={"multi"} onClick={multi} />
            <input type="button" value={"div"} onClick={div} />
            <br></br>
            <input type="text" value={ans} placeholder='answer' />

        </div>
    );
}
export default Sum;