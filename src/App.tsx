import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(10);
	return (
		<div className='App'>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Count = {count}
			</button>
		</div>
	);
}

function NameList() {
	const [nameList, setNameList] = useState(['Adam', 'Jill', 'imskanand']);
	const [emailList, setEmailList] = useState(['abc@email.com', 'xyz@gmail.com']);
	const [name, setName] = useState('');
	const [email, setEmail] = useState(() => 'imskanand@gmail.com');

	function addList() {
		setNameList([...nameList, name]);
		setName('');
	}

	function addEmailList() {
		setEmailList([...emailList, email]);
		setEmail('');
	}
	return (
		<div className='App'>
			<ul>
				{nameList.map((name) => (
					<li>{name}</li>
				))}
			</ul>
			<input type='text' value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={addList}>Add List</button>
			<br />
			<ul>
				{emailList.map((email) => (
					<li>{email}</li>
				))}
			</ul>
			<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
			<button onClick={addEmailList}>Add List</button>
		</div>
	);
}

function App() {
	return (
		<div>
			<Counter />
			<NameList />
		</div>
	);
}

export default App;
