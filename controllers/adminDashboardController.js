var sendError = require('../sendError').sendError;
var sendSuccess = require('../sendError').sendSuccess;
var moment = require('moment');

exports.getDashboard = function (req,res) {
    res.render("dashboard/view");
}
exports.getPostItemPage = function(req, res){
    pool.query("SELECT location,type,capicity FROM stadium", function(err, response){
        if (err) throw err;
        res.render("dashboard/postItem", {
            categories: response
        });
    });
}

exports.getPostItemP = function(req, res){
    pool.query("SELECT location,type,capacity  FROM stadium", function(err, response){
        if (err) throw err;
        res.render("dashboard/stadium", {
            Stadium: response
        });
    });
}
exports.getplayer = function(req, res){
    pool.query("SELECT Player_id,Club_id,Player_name, Jersey_no, Position FROM player", function(err, response){
        if (err) throw err;
        res.render("dashboard/playerinfo", {
            player: response
        });
    });
}
exports.getPostboard_membe = function(req, res){
    pool.query("SELECT board_member.*FROM board_member", function(err, response){
        if (err) throw err;
        res.render("dashboard/boardmember", {
            boardmember: response
        });
    });
}
exports.getPostteamP = function(req, res){
    pool.query("SELECT Club_id,Club_name,No_Of_Game_Played,No_Of_Gamewon,No_Of_Gamelossed,Stadium_Name,Manager  FROM team", function(err, response){
        if (err) throw err;
        res.render("dashboard/teamview", {
            team: response
        });
    });
}

/*
exports.getMyItems = function (req, res) {
    var id = req.params.id;
    pool.query("SELECT items.id,items.name,items.category,items.rate FROM items", [id], function (err, data) {
        if (err) throw err;
        
        res.render("dashboard/myItems", {
            items: data
        });
    }); 
}
*/

/*exports.Stadium = function(req, res){

    pool.query("SELECT location,type,capicity from stadium", function(err, data){
        if (err) throw err;

        console.log(data)

        res.render("dashboard/stadium", {
            Stadium: data
        });
    });
}*/
exports.viewOrders = function(req, res){

    pool.query("SELECT io.id as order_id,io.customerId,o.full_name,io.item_name,o.table_no,io.price,io.quantity FROM items_order as io JOIN orders as o ON o.id=io.customerId", function(err, data){
        if (err) throw err;

        console.log(data);

        res.render("dashboard/vieworders", {
            order_data: data
        });
    });
}
/*
exports.postItem = function(req, res){
    var name = req.body.name;
    var category = req.body.category;
    var rate= req.body.rate;

    try  {

        if (name.length < 1) throw "Enter a proper name.";
        if (category < 1) throw "Select the category.";
        if (rate.length < 1) throw "Fill the rate field.";
          
        
        getColumns("SELECT id FROM items WHERE category=?", [category]).then(result => {
            var category_id = result.id;
            
            pool.query("INSERT INTO items (name, category, rate) VALUES (?, ?, ?)", [name, category,rate], function (err, data) {
                if (err) {
                    console.log(err)
                } else {
                    sendSuccess(res, "Item Posted Successfully.");
                }
            })
        }).catch (err => {
            console.log(err);
        })

    } catch(err) {
        sendError(res, err);
    }
}
*/
exports.getPostItem = function(req, res){
    res.render("dashboard/postItem",{
        err:null,msg:null
    }
    );
}
exports.postItem = function(req, res){
    var location = req.body.location;
    var type = req.body.type;
    var capacity= req.body.capacity;
    console.log(location, type, capacity);
    try  {
        if (location.length < 1) throw "Enter a proper location.";
        if (capacity < 1) throw "Select the capacity.";
        if (type.length < 1) throw "Fill either indoor or outdoor.";
          
        pool.query("INSERT INTO stadium(location,capacity,type) VALUES (?, ?, ?)", [location,capacity,type], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/postItem', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}
exports.getplayerP = function(req, res){
    res.render("dashboard/addplayer",{
        err:null,msg:null
    }
    );
}
exports.postplayer = function(req, res){
    var Player_id = req.body.Player_id;
    var club_name = req.body.club_name;
    var age= req.body.age;
    var dateofbirth = req.body.dateofbirth;
    var position = req.body.position;
    var noofgamesplayed= req.body.noofgamesplayed;
    var noofgamegoalsscored = req.body.noofgamegoalsscored;
    var noofassistmade = req.body.noofassistmade;
    var noofredcardsgot= req.body.noofredcardsgot;
    var annualsalary= req.body.annualsalary;
    var yearofenrollment = req.body.yearofenrollment;
    console.log(Player_id,club_name,age,dateofbirth,position,noofgamesplayed,noofgamegoalsscored,noofassistmade,noofredcardsgot,annualsalary,yearofenrollment);
    try  {
        if (Player_id < 1) throw "Enter a proper Integer";
        if (club_name.length < 1) throw "Enter prorer club name";
        if (age < 1) throw "Improper Age.";
        if (dateofbirth < 1) throw "Input Valid DOB.";
        if (position.length < 1) throw "Enter proper position length";
        if (noofgamesplayed < 1) throw "Enter proper no of game played";
        if (noofgamegoalsscored < 1) throw "Enter theno of goals scored .";
        if (noofassistmade < 1) throw "Enter hte assists made.";
        if (noofredcardsgot < 1) throw "No of red card got";
        if (annualsalary < 1) throw "Enter Annual Salary";
        if (yearofenrollment < 1) throw "Enter Year of enrollement.";
        
          
        pool.query("INSERT INTO player(Player_id,Club_id,Player_name, Jersey_no, Position) VALUES (?, ?, ?, ?, ?)", [Player_id,Club_id,Player_name, Jersey_no, Position], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/addplayer', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}

exports.getPostteam = function(req, res){
    res.render("dashboard/postteam",{
        err:null,msg:null
    }
    );
}
exports.postteam = function(req, res){
    var Club_id = req.body.Club_id;
    var Club_name = req.body.Club_name;
    var No_Of_Game_Played= req.body.No_Of_Game_Played;
    var No_Of_Gamewon= req.body.No_Of_Gamewon;
    var No_Of_Gamelossed= req.body.No_Of_Gamelossed;
    var Stadium_Name= req.body.Stadium_Name;
    var Manager= req.body.Manager;

    console.log(Club_id,Club_name,No_Of_Game_Played,No_Of_Gamewon,No_Of_Gamelossed,Stadium_Name,Manager);
    try  {
        if (Club_name.length < 1) throw "Select accurate Club name.";
        if (Stadium_Name.length < 1) throw "Enter correct Manager name.";
          
        pool.query("INSERT INTO team(Club_name,No_Of_Game_Played,No_Of_Gamewon,No_Of_Gamelossed,Stadium_Name,Manager) VALUES (?,?,?,?,?,?)", [Club_name,No_Of_Game_Played,No_Of_Gamewon,No_Of_Gamelossed,Stadium_Name,Manager], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/postteam', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}
exports.getPostboard_memberP = function(req, res){
    res.render("dashboard/inboardmember",{
        err:null,msg:null
    }
    );
}
exports.getPostboard_member = function(req, res){
    var Club_id = req.body.Club_id;
    var Name = req.body.Name;
    var Date_of_birth= req.body.Date_of_birth;
    var Position = req.body.Position;
    var Years_of_active = req.body.Years_of_active;
    var Contact_info = req.body.Contact_info;
    console.log(Club_id,Name,Date_of_birth,Position,Years_of_active,Contact_info);
    try  {
        if (Name.length < 1) throw "Enter a proper name.";
        if (Position.length < 1) throw "Invalid Postion.";
        if (Contact_info.length < 1) throw "Invalid Information.";
          
        pool.query("INSERT INTO board_member(Name,Date_of_birth,Position,Years_of_active,Contact_info) VALUES ( ?, ?,?,?,?)", [Name,Date_of_birth,Position,Years_of_active,Contact_info], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/inboardmember', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}
exports.getPostclub_personnelP = function(req, res){
    pool.query("SELECT club_personnel.*,team.Club_id,team.Club_name FROM club_personnel INNER JOIN team ON club_personnel.Club_id=team.Club_id", function(err, response){
        if (err) throw err;
        res.render("dashboard/clubpersonnel", {
            Goals_Team: response
        });
    });
}


exports.getPostclub_personnel = function(req, res){
    res.render("dashboard/inclubpersonnel",{
        err:null,msg:null
    }
    );
}
exports.postclub_personnel = function(req, res){
    var Cp_id = req.body.Cp_id;
    var Club_id = req.body.Club_id;
    var Name= req.body.Name;
    var Date_of_birth= req.body.Date_of_birth;
    var Gender = req.body.Gender;
    var Level = req.body.Level;
    var Contact_info = req.body.Contact_info;
    var Salary = req.body.Salary;
    var Year_of_enrollment = req.body.Year_of_enrollment;
    console.log(Cp_id,Club_id,Name,Date_of_birth,Gender,Level,Contact_info,Salary,Year_of_enrollment);
    try  {
                
        pool.query("INSERT INTO club_personnel(Cp_id,Club_id,Name,Date_of_birth,Gender,Level,Contact_info,Salary,Year_of_enrollment) VALUES (?,?,?,?,?,?,?,?,?)", [Cp_id,Club_id,Name,Date_of_birth,Gender,Level,Contact_info,Salary,Year_of_enrollment], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/inclubpersonnel', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}

exports.getsponshorshipP = function(req, res){
	pool.query("SELECT Company_name,Club_name,Contact_info,Annual_deal FROM sponshorship", function(err,response){
		 if (err) throw err;
		 res.render("dashboard/sponshorship",{
		 	sponshorship: response
		 });
	});
}

exports.getsponshorships = function(req, res){
    res.render("dashboard/insponshorship",{
        err:null,msg:null
    }
    );
}
exports.postsponshorships = function(req, res){
    var Company_name= req.body.Company_name;
    var Club_name = req.body.Club_name;
    var Contact_info= req.body.Contact_info;
    var Annual_deal= req.body.Annual_deal;
    console.log(Company_name,Club_name,Contact_info,Annual_deal);
    try 
       {
        pool.query("INSERT INTO sponshorship(Company_name,Club_name,Contact_info,Annual_deal) VALUES (?, ?,?, ?)", [Company_name,Club_name,Contact_info,Annual_deal], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/insponshorship', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}
exports.getshots_teamP = function(req, res){
    pool.query("SELECT shots_team.*,team.Club_id,team.Club_name FROM shots_team INNER JOIN team ON shots_team.Club_id=team.Club_id", function(err, response){
        if (err) throw err;
        res.render("dashboard/shotsteam", {
            shots: response
        });
    });
}


exports.getshots_team = function(req, res){
    res.render("dashboard/inshotsteam",{
        err:null,msg:null
    }
    );
}
exports.postshots_team = function(req, res){
    var Shots_id = req.body.Shots_id;
    var Club_id = req.body.Club_id;
    var Shots_on_target= req.body.Shots_on_target;
    var Shot_accuracy= req.body.Shot_accuracy;
    console.log(Shots_id,Club_id,Shots_on_target,Shot_accuracy);
    try  {

        pool.query("INSERT INTO shots_team(Shots_id,Club_id,Shots_on_target,Shot_accuracy) VALUES (?, ?, ?, ?)", [Shots_id,Club_id,Shots_on_target,Shot_accuracy], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.render('dashboard/inshotsteam', {err:null,msg: 'Posted Successfully'})
                // sendSuccess(res, "Item Posted Successfully.");
            }
        });
    } catch(err) {
        sendError(res, err);
    }
}

