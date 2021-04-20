import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteNote, GetNotes } from "../services/notes";
import {Button} from "react-bootstrap";
import { EditNoteModal } from "./NoteModal";

export const NotesTable = () => {
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();
    const header=<tr>
                    <th></th>
                    <th></th>
                    <th>Zákazník ID</th>
                    <th>Jméno</th>
                    <th>Příjmení</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Firma</th>
                    <th>Popis</th>
                </tr>;

    useEffect(() => {
        GetNotes(dispatch);
    },[dispatch]);

    return <table className="table table-dark">
        <tbody>
            {header}
            {
                notes.map(n =>
                    <tr key={n.id}>
                        <td style={{width:"3rem"}}>
                            <EditNoteModal note={n} />
                        </td>
                        <td style={{width:"3rem"}}>                           
                            <Button className="btn btn-danger" onClick={() => {const r = window.confirm("Chcete smazat zákazníka? Nelze vrátit!"); if(r === true){ DeleteNote(dispatch, n) }} }>Smazat</Button>
                        </td>           
                        <td>{n.customerNumber}</td>                        
                        <td>{n.firstName}</td>
                        <td>{n.lastName}</td>
                        <td>{n.value}</td>
                        <td>{n.phoneNumber}</td>
                        <td>{n.company}</td>
                        <td>{n.description}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}