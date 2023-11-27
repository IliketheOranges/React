import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

	//Array de notas
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Nota de Prueba',
			date: '27/11/2023',
		}
	]);

	//useState para la barra de busqueda
	const [searchText, setSearchText] = useState('');


	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	//Controladores para añadir y borrar notas

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),					  //Genera una nueva id
			text: text,
			date: date.toLocaleDateString(),  //Pone la fecha actual
		};
		const newNotes = [...notes, newNote]; //Copiamos al array anterior nuestra nueva nota
		setNotes(newNotes);
	};

	//Buscamos con el filter nuestra id y borramos esa nota
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	//El header controla el tema de la página (oscuro/clarito) #Decoración
	//Añadimos el componente de la barra de búsqueda
	//Añadimos la lista de notas

	return (
		<div>
			<div className='container'>
				<Header/>   
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;

