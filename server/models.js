var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

if(!process.env.MONGODB_URI) throw new Error('uri missing');

mongoose.connect(process.env.MONGODB_URI)

var pageSchema = new Schema({
  content: {
    type: String,
  },
  title:{
    type: String,
    default: 'Untitled'
  },
  createdTime: {
    type: Date
  },
  lastEditTime: {
    type: Date
  },
})

var Page = mongoose.model('Page', pageSchema)
module.exports = {
  Page : Page,
};
