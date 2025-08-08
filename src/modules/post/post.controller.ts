import { Get, JsonController } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { PostService } from './post.service';

@Service()
@JsonController('/posts')
export class PostController {
	constructor(
		@Inject(() => PostService)
		private readonly postService: PostService
	) {}

	@Get('/hello')
	public async sayHello() {
		return this.postService.sayHello();
	}
}
