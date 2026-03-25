import { useEffect, useState } from 'react';
export default function useLocalStorage(keyName: string, initialValue: string[]) {
	const [todo, setTodo] = useState(() => {
		try {
			const storedValue = localStorage.getItem(keyName);
			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(keyName, JSON.stringify(todo));
		} catch (error) {
			console.error(error);
		}
	}, [keyName, todo]);

	return [todo, setTodo];
}
