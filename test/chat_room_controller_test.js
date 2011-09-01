exports["chartRoomController should be object"] = function(test) {
	var chatRoomController = require("../lib/chat_room_controller");
        test.ok(chatRoomController != null);
        test.ok(typeof chatRoomController.create == "function");
        test.done();
};

