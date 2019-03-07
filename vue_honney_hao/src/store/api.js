import axios from 'axios';
export async function getLists() {
	return await axios('http://localhost:3000/users/buy');
}
