import { useState } from 'react';

//Maneja el añadido de notas

const AddNote = ({ handleAddNote }) => {

	const characterLimit = 100;   //Ponemos un máximo de 100 letras
	const [noteText, setNoteText] = useState('');

	const handleChange = (event) => {       //Detectamos un cambio en la nueva nota, y comprobamos que tenga caracteres suficientes para seguir escribiendo
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	//Mientras no esté vacia la nota, no se puede guardar
	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	//El textarea permite almacenar el mensaje a guardar en la nueva nota
	//El footer tiene el botón de guardado de la nota
	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Escribe tu nueva nota'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<button className='save' onClick={handleSaveClick}>
					Guardar Nota
				</button>
			</div>
		</div>
	);
};

export default AddNote;
