import Note from './Note';
import AddNote from './AddNote';

//La función map nos renderiza todas las notas que tengamos guardadas

//El AddNote nos permite utilizar la función handleAddNote de la app

const NotesList = ({notes,handleAddNote,handleDeleteNote,}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
