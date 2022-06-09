import mongoose from 'mongoose';
import validator from 'validator';

const forumjs = new mongoose.Schema({
  msgCreated: {
    type: Number,
    default: 0
  },
  subjectCreated: {
    type: Number,
    default: 0
  },
  msg: {
    type: String,
    default: '',
    required: true
  },
  username: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    default: ''
  },
  type: {
    type: String
  }
});

export default mongoose.model('ForumJs', forumjs);
