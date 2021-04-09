const express = require("express");
const app = express();
const mongoose= require ("mongoose");
const bodyParser= require("body-parser");
const Book = require('../schemas/bookschema');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// adding a book
app.post("/add-book", function(req, res) {
    const bname= req.body.bookName;
    const isbN= req.body.isbNo;
    const aname= req.body.authName;
    const publshr= req.body.pubName;
    const bIssue= req.body.issueNo;
    const categ= req.body.categoryName;

    const book = new Book({
        name: bname,
        ISBN: isbN,
        author: aname,
        publisher: publshr,
        issue: bIssue,
        category: categ,
    });
    book.save();
});

//updating a book

app.post("/update-books", function (req,res){
  const bookupdate=req.body.isbnUpdate;
  const uAuth= {author: req.body.authorUpdate};
  const uPub= {publisher: req.body.pubUpdate};
  const uIssue= {issue: req.body.issueUpdate};

  if(uAuth!= null){
  await Book.findOneAndUpdate(bookupdate, uAuth, {new: true});
  }

  if(uPub!=null){
  await Book.findOneAndUpdate(bookupdate, uPub, {new: true});
  }

  if(uIssue!=null){
  await Book.findOneAndUpdate(bookupdate, uIssue, {new: true});
  }
});

// setting limits

app.post("/set-limits", function (req,res){
  const setBook=req.body.isbnSet;
  const penalty= {fine: req.body.penaltyAmt};
  const booklimit= {borrowlimit: req.body.borrowCap};

  if(penalty!= null){
  await Book.findOneAndUpdate(setBook, penalty, {new: true});
  }

  if(booklimit!=null){
  await Book.findOneAndUpdate(setBook, booklimit, {new: true});
  }
});

//deletion of a book

app.post("/removebooks", function  (req, res){
  const bookdel= req.body.isbnofbook;

  await Book.deleteOne({ISBN: bookdel });
});

//server on default port 80
app.listen(process.env.PORT || 80, () => {
	console.log("Listening on port 80...")});
