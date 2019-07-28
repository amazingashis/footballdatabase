var router = require('express').Router();
var adminDashboardController = require('../controllers/adminDashboardController');

router.get("/dashboard",adminDashboardController.getDashboard);
router.get("/dashboard/stadium", adminDashboardController.getPostItemP);

router.get("/dashboard/post-item",  adminDashboardController.getPostItem);
router.post("/dashboard/post-item",  adminDashboardController.postItem);


router.get("/dashboard/playerinfo", adminDashboardController.getplayer);

router.get("/dashboard/addplayer",  adminDashboardController.getplayerP);
router.post("/dashboard/addplayer",  adminDashboardController.postplayer);



router.get("/dashboard/boardmember", adminDashboardController.getPostboard_membe);

router.get("/dashboard/inboardmember",  adminDashboardController.getPostboard_memberP);
router.post("/dashboard/inboardmember",  adminDashboardController.getPostboard_member);



router.get("/dashboard/teamview", adminDashboardController.getPostteamP);

router.get("/dashboard/postteam",  adminDashboardController.getPostteam);
router.post("/dashboard/postteam",  adminDashboardController.postteam);



router.get("/dashboard/clubpersonnel", adminDashboardController.getPostclub_personnelP);

router.get("/dashboard/inclubpersonnel",  adminDashboardController.getPostclub_personnel);
router.post("/dashboard/inclubpersonnel",  adminDashboardController.postclub_personnel);



router.get("/dashboard/sponshorship", adminDashboardController.getsponshorshipP);

router.get("/dashboard/insponshorship",  adminDashboardController.getsponshorships);
router.post("/dashboard/insponshorship",  adminDashboardController.postsponshorships);



router.get("/dashboard/shotsteam", adminDashboardController.getshots_teamP);

router.get("/dashboard/inshotsteam",  adminDashboardController.getshots_team);
router.post("/dashboard/inshotsteam",  adminDashboardController.postshots_team);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);



// router.get("/dashboard/boardmember", adminDashboardController.getboardmember);

// router.get("/dashboard/inboardmember",  adminDashboardController.getinboardmember);
// router.post("/dashboard/inboardmember",  adminDashboardController.postinboardmember);
//router.get("/dashboard/items",  adminDashboardController.getMyItems);
//  router.get("/dashboard/view-orders", adminDashboardController.viewOrders);

module.exports = router;