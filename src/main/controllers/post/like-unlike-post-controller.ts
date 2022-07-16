import postModel from "../../db/mongo/models/post-model";
import { Controller } from "../../protocols/api/controller";
import { ok, serverError } from "../../protocols/http/http-response";
import { HttpRequest, HttpResponse } from "../../protocols/http/http-types";

export class LikeUnlikePostController implements Controller {
  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { postId } = request.params
    const { profileId } = request.body.payload
    console.log(postId)
    try {
      const postToLikeUnlike = await postModel.findById(postId)
      const indexToPost = postToLikeUnlike.likes.indexOf(profileId)
      indexToPost === -1 
      ? await postModel.findByIdAndUpdate(postId, {
        $push:{likes: profileId}
      }) : await postModel.findByIdAndUpdate(postId, {
        $pull:{likes: profileId}
      })

      if (indexToPost === -1) return ok({ sucess: 'post liked successfully' })
      else return ok({ sucess: 'post unliked successfully' })

    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}