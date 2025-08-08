import { Service } from 'typedi';

@Service()
export class PostService {
	public sayHello() {
		return 'Hello';
	}
}
