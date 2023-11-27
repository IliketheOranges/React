import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {

	//El span está para enseñar el texto de la nota 
	//El small contiene a la fecha de la nota
	//El MdDeleteForever controla el borrado de la nota (y tiene icono de papelera)

	return (
		<div className='note'> 
			<span>{text}</span>     	 
			<div className='note-footer'>
				<small>{date}</small>						
				<MdDeleteForever		
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
				/>
			</div>
		</div>
	);
};

export default Note;
