import User from "../Models/User.js"

class ProfileController {
   async create(req, res) {
      try {
         const {name, surname, phone} = req.body
         const user = await User.create({name, surname, phone})
         res.json(user)
      } catch(e) {
         res.status(404).json("Page not found")
      }
   }

   async signIn(req, res) {
      try {
         const { phone } = req.body;
         const users = await User.find();
         const findUser = users.find(user => user.phone === phone);
         if (!findUser) {
               res.status(401).json("User is not authorized");
         } else {
               res.status(200).json(req.body);
         }

      } catch (e) {
         res.status(404).json("Page not found")
      }
   }

   async getAll(req, res) {
      try {
         const users = await User.find()
         res.json(users)
      } catch (e) {
         res.status(404).json("Page not found")
      }
   }
}

export default new ProfileController