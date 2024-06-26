// backend/models/User.js

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const userSchema = new mongoose.Schema({
  
//   name:{
//     type:String,
//     required:true,
    
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   contactnumber:{
//     type:number,
//     required:true


//   }

// });

// userSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//     return token;
//   };
  
//   // Method to verify password
//   userSchema.statics.findByCredentials = async function(email, password) {
//     const user = await this.findOne({ email });
//     if (!user) {
//       throw new Error('Invalid credentials');
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       throw new Error('Invalid credentials');
//     }
//     return user;
//   };
  
//   // Hash password before saving
//   userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//       this.password = await bcrypt.hash(this.password, 8);
//     }
//     next();
//   });
// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contactnumber: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        return /^[0-9]{10}$/.test(v); // Regex to check if the number is exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

// Method to verify password
userSchema.statics.findByCredentials = async function(email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Invalid credentials');
  }
  return user;
};

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
