posttwo.ddd("disableTextColor.js has been loaded");
var PT_SombraUsers = [];
PT_SombraUsers = posttwo.getStoredArray('DisabledColoredText');

$('#ajax_comm').arrive('.com', {existing: true}, function(){
    var el = $(this);
    var menu = el.find('.myButtonMenu');
    var cid = menu.data('cid');
    var username = el.find('.uName').text().trim();
    if(username != ''){
        if ($.inArray(username, PT_SombraUsers) >= 0) {
            posttwo.addModTool('<div class="PT_EnableTextcolor">Enable Colors</div>', cid);
            el.find('.t>span').css('color', 'white');
        } else {
            posttwo.addModTool('<div class="PT_DisableTextcolor">Disable Colors</div>', cid);
        }    
    }
});
$('#commentsList').on('click', '.PT_DisableTextcolor', function (event) {
    var PT_CommentUsername = posttwo.getButtonCaller(event);
    PT_SombraUsers.push(PT_CommentUsername);
    posttwo.storeArray('DisabledColoredText', PT_SombraUsers);
    comments.loadCommentsList();
});
$('#commentsList').on('click', '.PT_EnableTextcolor', function(event) {
    var PT_CommentUsername = posttwo.getButtonCaller(event);
    PT_SombraUsers.splice($.inArray(PT_CommentUsername, PT_SombraUsers), 1);
    posttwo.storeArray('DisabledColoredText', PT_SombraUsers);
    comments.loadCommentsList();
});