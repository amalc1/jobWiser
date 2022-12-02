const { errbody, respbody } = require("../helper/generateResponse");
const { User } = require("../models/userModel");
const { Post } = require("../models/Post");
const cloudinary = require("../helper/cloudinary");

module.exports = {
  doSignup: async (req, res) => {
    const { email } = req.body;
    try {
      const userExist = await User.findOne({ email });
      if (userExist) return errbody(res, "user already exists");
      const user = new User(req.body);
      user.save((err, doc) => {
        if (err) return errbody(res, err);
        else return respbody(res, doc);
      });
    } catch (err) {
      return errbody(res, err);
    }
  },

  doLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const correctPassword = await user.comparePassword(password);
        if (correctPassword) {
          const token = await user.generateToken();
          return respbody(res, { ...user, token });
        } else {
          return errbody(res, "Incorrect Password");
        }
      } else {
        return errbody(res, "Invalid Username");
      }
    } catch (err) {
      return errbody(res, err);
    }
  },

  post: async (req, res) => {
    //user post
    const { _id, name, postContent, image, date } = req.body;
    let cloudUrl;
    if (postContent || image) {
      try {
        if (image) {
          const { url } = await cloudinary.uploader.upload(
            image,
            {
              upload_preset: "jobWiser",
              public_id: `post${Date.now()}`,
              allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "webp"],
            },
            function (err, result) {
              if (err) {
                console.log(err);
              }
            }
          );
          cloudUrl = url;
        }
        const postDoc = {
          name,
          userId: _id,
          description: postContent,
          image: "",
          likes: [],
          comments: [],
          date,
        };
        image ? (postDoc.image = cloudUrl) : null;
        const post = new Post(postDoc);
        post.save((err, doc) => {
          if (err) console.log(err);
          else return respbody(res, "Post Saved");
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      return errbody(res, "please fill fields");
    }
  },

  getFeed: async (req, res) => {
    let post = await Post.find({}).populate("userId");
    try {
      post.reverse();
      return respbody(res, post);
    } catch (err) {
      return errbody(res, err);
    }
  },

  like: async (req, res) => {
    const { postId, userId } = req.body;
    try {
      let checkLiked = await Post.updateOne(
        { _id: postId },
        {
          $pull: { likes: userId },
        }
      );

      if (!checkLiked.modifiedCount) {
        Post.findByIdAndUpdate(postId, {
          $push: { likes: userId },
        }).catch((err) => {
          console.log(err);
        });
        return respbody(res, "liked");
      } else {
        return respbody(res, "unliked");
      }
    } catch (err) {
      return errbody(res, err.message);
    }
  },
};
