User
  - name
  - password
  - email
  - timestamps

Profile
  - posts
  - followers
  - following
  - userId
  - timestamps

Posts
 - title
 - description
 - hasImage
 - imageUrl
 - comments
 - likes
 - profileId
 - timestamps

 Comment
  - content
  - likes
  - postId
  - timestamps

User

[x] - create user
[x] - login user

Profile

[X] - List all post from a single profile
[X] - get profile by id /profile/:profileId
[] - follow/unfollow profile /profile/:profileId/follow
[] - create search for profile
[] - send notification when follow profile

Post -
[x] - create post
[X] - get Post 
[] - send notification via socket io to follwers
[X] - edit post
[X] - delete post
[X] - like/unlike post
[] - send notification via socket io to post owner when receive likes

Comment

[X] - create comment
[x] - update comment
[x] - delete comment
[] - send notification via socket.io to post owner
[x] - like/unlike comment
[] - send notification tvia socket.io o comment owner when receive likes 

feed