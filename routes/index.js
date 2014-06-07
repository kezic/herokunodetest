var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/students_updated', function(req, res) {
  res.render('students_updated', { title: 'Updated' });
});

router.get('/students', function(req, res) {
  res.render('students', { title: 'Students' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/account', function(req, res) {
  res.render('students_account', { title: 'Account' });
});

router.get('/profile', function(req, res) {
  res.render('students_profile', { title: 'Profile' });
});

router.get('/match', function(req, res) {
  res.render('students_match', { title: 'Matched Scholarships' });
});
router.get('/starred', function(req, res) {
  res.render('students_starred', { title: 'Starred Scholarships' });
});
router.get('/underway', function(req, res) {
  res.render('students_underway', { title: 'Applications Underway' });
});

router.get('/completed', function(req, res) {
  res.render('students_completed', { title: 'Completed Applications' });
});
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});


// router.post('/adduser', function(req, res) {

//     // Set our internal DB variable
//     var db = req.db;

//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var userEmail = req.body.useremail;

//     // Set our collection
//     var collection = db.get('usercollection');

//     // Submit to the DB
//     collection.insert({
//         "username" : userName,
//         "email" : userEmail
//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // If it worked, set the header so the address bar doesn't still say /adduser
//             res.location("userlist");
//             // And forward to success page
//             res.redirect("userlist");
//         }
//     });
// });
// 
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

router.post('/updateaccount', function(req, res) {

//     // Set our internal DB variable
    var db = req.db;

//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     var userEmail = req.body.useremail;
    
//     // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.update(
          { _id:"User" },

    {
       _id:"User",
        "username" : userName,
        "firstname" : firstName,
        "lastname" : lastName,
        "email" : userEmail,

    },
            { upsert: true },
 function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("students_updated");
            // And forward to success page
            res.redirect("students_updated");
        }
    });

//    collection.update(
//        { _id:"User" },

//     {    "username" : userName,
//          "firstname" : firstName,
//         "lastname" : lastName,
//         "email" : userEmail,
             
//        },
//        { upsert: true }
//     );
    /*
// });

// router.post('/updateprofile', function(req, res) {

//     // Set our internal DB variable
//     var db = req.db;

//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var userEmail = req.body.useremail;
//     var bio = req.body.bio;
//     var income = req.body.income;
//     var extracurriculars = req.body.extracurriculars;
//     var specialcircumstances = req.body.specialcircumstances;
//     var recletters = req.body.recletters;
   

//     // Set our collection
//     var collection = db.get('usercollection');

//     // Submit to the DB
//     collection.insert({
//         "username" : userName,
//         "email" : userEmail,
//         "bio":bio,
//         "income": income,
//         "extracurriculars":extracurriculars,
//         "specialcircumstances":specialcircumstances,
//         "recletters":recletters,

//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // If it worked, set the header so the address bar doesn't still say /adduser
//             res.location("students_updated");
//             // And forward to success page
//             res.redirect("students_updated");
//         }
//     });
// });


    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var userEmail = req.body.useremail;
    
    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    // collection.save({
    //   _id:"User", 
    //     "username" : userName,
    //     "firstname" : firstName,
    //     "lastname" : lastName,
    //     "email" : userEmail,

    // }, function (err, doc) {
    //     if (err) {
    //         // If it failed, return error
    //         res.send("There was a problem adding the information to the database.");
    //     }
    //     else {
    //         // If it worked, set the header so the address bar doesn't still say /adduser
    //         res.location("students_updated");
    //         // And forward to success page
    //         res.redirect("students_updated");
    //     }
    // });
//    collection.update(
//        { _id:"User" },

//     {    "username" : userName,
//          "firstname" : firstName,
//         "lastname" : lastName,
//         "email" : userEmail,
             
//        },
//        { upsert: true }
//     );

*/
 });

router.post('/updateprofile', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var bio = req.body.bio;
    var income = req.body.income;
    var extracurriculars = req.body.extracurriculars;
    var specialcircumstances = req.body.specialcircumstances;
    var recletters = req.body.recletters;
   

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.save({
      _id:"User", 
        "username" : userName,
        "email" : userEmail,
        "bio":bio,
        "income": income,
        "extracurriculars":extracurriculars,
        "specialcircumstances":specialcircumstances,
        "recletters":recletters,

    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("students_updated");
            // And forward to success page
            res.redirect("students_updated");
        }
    });
});


module.exports = router;
