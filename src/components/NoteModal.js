import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Form, Modal, Button,FormControl} from "react-bootstrap";
import { EditNote, NewNote } from "../services/notes";

export const NewNoteModal = () => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div style={{maxWidth:"70%", margin:"auto",textAlign:"start"}}>
        <Button onClick={handleShow} className="btn btn-success">Přidat zákazníka</Button>
        <NoteModal note={null} handleFormSubmit={NewNote} show={show} handleClose={handleClose}/>
    </div>
}

export const EditNoteModal = ({ note }) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
    <Button onClick={handleShow} className="btn btn-warning">Editace</Button>
    <NoteModal note={note} handleFormSubmit={EditNote} show={show} handleClose={handleClose}/>
</div>  
}

const NoteModal = ({note, handleFormSubmit, show, handleClose}) => {
    const [modalNote, setModalNote] = useState({});
    const dispatch = useDispatch()

    useEffect(() => {
            setModalNote(note);
    }, [note]);

    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editace zákazníka</Modal.Title>
          </Modal.Header>
          <Form onSubmit={event =>{
              event.preventDefault();
              handleFormSubmit(dispatch, modalNote);
              console.log(modalNote);
          }}>              
          <Modal.Body>

                    <table style={{display: "grid",alignItems:"center"}}>
                    <tr><td>Zákazník ID:</td><FormControl type="number" value={modalNote ? modalNote.customerNumber : ""}
                        onChange={event => setModalNote({ ...modalNote, customerNumber: event.target.value})}/></tr>
                    <tr><td>Jméno:</td><FormControl value={modalNote ? modalNote.firstName : ""}
                        onChange={event => setModalNote({ ...modalNote, firstName: event.target.value})}/></tr>
                    <tr><td>Příjmení:</td><FormControl value={modalNote? modalNote.lastName : ""}
                        onChange={event => setModalNote({ ...modalNote, lastName: event.target.value})}/></tr>
                    <tr><td>Email:</td><FormControl value={modalNote ? modalNote.value : ""}
                        onChange={event => setModalNote({ ...modalNote, value: event.target.value})}/></tr>
                    <tr><td>Telefon:</td><FormControl type="number" value={modalNote? modalNote.phoneNumber : ""}
                        onChange={event => setModalNote({ ...modalNote, phoneNumber: event.target.value})}/></tr>
                    <tr><td>Firma:</td><FormControl value={modalNote ? modalNote.company : ""}
                        onChange={event => setModalNote({ ...modalNote, company: event.target.value})}/></tr>
                    <tr><td>Popis:</td><FormControl value={modalNote ? modalNote.description : ""}
                        onChange={event => setModalNote({ ...modalNote, description: event.target.value})}/></tr>
                     </table> 

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Zavřít
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Uložit
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    );
  }