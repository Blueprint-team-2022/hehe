import React from 'react'
import "../css/DiaryPage.css"
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function DiaryPage() {
    const navigate = useNavigate()
    const [notes,setNotes] = useState([])
    //function to add existing notes to the state
    function addNotes(note){
        setNotes(notes => {
            return [...notes,note]
        })
    }
    function onSaveButton(event){
        event.preventDefault()
        const item = document.getElementById("user-input")
        let note = item.value
        addNotes(note)
        item.value = ""
    }
    function returnHome(){
        navigate("/")
    }
  return (
    <div className="diary-page">
      <>
        <a href="/" style={{ color: "black" }}>
          <i
            className="fas fa-long-arrow-left"
            style={{
              position: "absolute",
              left: "5vw",
              top: "10vh",
              fontSize: 40,
            }}
          />
        </a>
        <button
          className="btn"
          style={{
            backgroundColor: "grey",
            padding: "10px 30px",
            position: "absolute",
            right: "10vw",
            top: "10vh",
            color: "white",
            fontSize: 25,
            fontWeight: 500,
          }}
          onClick={onSaveButton}
        >
          Save
        </button>
        <textarea
          placeholder="Type your thought here"
          name=""
          id="user-input"
          cols={100}
          rows={15}
          defaultValue={""}
        />
        <img
          src="undraw_dreamer_re_9tua.svg"
          alt=""
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50vw",
            height: "auto",
          }}
        />
      </>

      <div className="diary-content">
        {notes.map((note) => {
          return <div className="note">{note}</div>;
        })}
      </div>
    </div>
  );
}

export default DiaryPage