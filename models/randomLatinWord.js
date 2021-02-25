import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const randomLatinWordSchema = new Schema({
  set: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const RandomLatinWord = mongoose.model('RandomLatinWord', randomLatinWordSchema);
export default RandomLatinWord;