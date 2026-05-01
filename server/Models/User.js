import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        _id: {type: String,required:true},
        name: {type: String,required:true},
        email: {type: String,required:true},
        imageUrl: {type: String,required:true},
        enrolledCourses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        
    },{timestamps:true}
);

const User = mongoose.model('User',userSchema);//what and what basis
//the name of the model in database is saved with name of users basically in plural 

export default User
