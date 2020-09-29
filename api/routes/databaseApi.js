var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

var router = express.Router();

const dbURL = 'mongodb+srv://S2SUser:CSC440S2S@cluster0.ljgl9.mongodb.net/TestDB?retryWrites=true&w=majority';
const Story = mongoose.model('Story', {author:String, post_time:String, story_content:String});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/store_story',(req,res)=>{
  let story = new Story({author:req.body.author, post_time:Date.now(), story_content:req.body.story_content});
  if(story.author===undefined)
    res.send('Error: Did not recieve author information, cannot input data into database');
  else if(story.story_content===undefined)
    res.send('Error: Did not recieve story content information, cannot input data into database');
  else{
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err=>res.send("Error Connecting to the Database: " + err))
  .then(()=>{
      story.save()
      .catch(err=>res.send('Failed to send information to the database: ' + err))
      .then(() => res.send(`Successfully stored the post in the database`));
    })
  }
});

module.exports = router;
