var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

var router = express.Router();

const dbURL = 'mongodb+srv://S2SUser:CSC440S2S@cluster0.ljgl9.mongodb.net/TestDB?retryWrites=true&w=majority';
const Story = mongoose.model('Story', {author:String, post_time:String, story_content:String, title:String});
const Account = mongoose.model('Account', {f_name:String, l_name:String, username:String, password:String})


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/store_story',(req,res)=>{
  let story = new Story({author:req.body.author, post_time:Date.now(), story_content:req.body.story_content, title:req.body.title});
  if(story.author===undefined)
    res.send('Error: Did not recieve author information, cannot input data into database');
  else if(story.story_content===undefined)
    res.send('Error: Did not recieve story content information, cannot input data into database');
    //
  //else if (story.title===undefined) {
    //res.send('Error: Did not recieve title information, cannot input data into database');
  //}
  else{
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err=>res.send("Error: Failed to Connect to database: " + err))
  .then(()=>{
      story.save()
      .catch(err=>res.send('Error: Failed to send information to the database: ' + err))
      .then(() => res.send(`Successfully stored the post in the database`));
    })
  }
});

//TODO Maybe make a function that takes an error type and returns a message
//TODO Maybe split up all of the repetitive behavior into lambda expressions
router.post('/get_stories',(req,res)=>{
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch((err)=>res.send('Error: Failed to Connect to database: ' + err))
    .then(()=>{
        let search_query = {};
        if(req.body.query!==null && req.body.query!==''){
          var regex = new RegExp(req.body.query +'+');
          search_query = { story_content: regex};
        }
        Story.find(search_query, (err, stories)=>res.json(stories.map(story=>constructStoryObj(story))))
    }
  )
});


router.post('/make_account',(req,res)=>{
  let account = new Account({f_name:req.body.f_name,  l_name:req.body.l_name, username:req.body.username,password:req.body.password});
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  // serch if userame already exisit.
  const query =  Account.where({ username: req.body.username});
  query.findOne( (err,  retrievedAccount)=>  {
    if( retrievedAccount === null){
      // Case 1: username doesn't exsist make account
      account.save();
      res.send(account.username);
    }
    else{
      // Case 2: Username does exsist send back s
      res.send(`username already exisits`);
    }
  });
});

router.post('/get_account',(req,res)=>{
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch((err)=>res.send('Error: Failed to Connect to database: ' + err))
  .then(()=>{
    if(req.body.username !== undefined ){
      // test if the username match an exisiting account
      const query =  Account.where({ username: req.body.username});
      query.findOne( (err, account)=>  {
        if(account===null){
          res.send(`Error: Username doen't exist`);
        } else if(account.password === req.body.password){
          // Case 1: account exists and password matches, return the account username
          res.send(account.username);
        }
        else{
          // Case 2: username exists but password didn't match
          res.send(`Login Failed: Invalid Password`);
        }
      });
    }else{
      res.send(`Error: Missing username variable in request`)
    }
  });
});


function constructStoryObj(story){
  return {author:story.author, post_time:new Date(Number(story.post_time)), story_content:story.story_content, title:story.title, id:String(story._id)};
}

module.exports = router;
