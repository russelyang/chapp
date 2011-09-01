var chatRoomController = require("../lib/chat_room_controller");

exports["chartRoomController should be object"] = function(test) {
        test.ok(chatRoomController != null);
        test.ok(typeof chatRoomController.create == "function");
        test.done();
};

exports["chatRoomController.create should return a object with request and reponse"] = function(test) {
	var req = {};
	var res = {};
	
	var controller = chatRoomController.create(req, res);
	test.strictEqual(req, controller.request);
	test.strictEqual(res, controller.response);
	test.done();
}

