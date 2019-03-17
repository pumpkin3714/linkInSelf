(function(){
    var getdomain = function(url){
        if(/^.{1,10}:\/\//.test(url)){
            url = url.split('//')[1];
        }
        return url.split('/')[0];
    }
    
    var anchors = document.getElementsByTag('a');
    for(var i = 0; i < anchors.length; i++){
        var tgt = anchors[i].getAttribute('target');
        var pagedomain = getdomain(location.href);
        var anchordomain = getdomain(anchors[i].getAttribute('href'));
        
        if(pagedomain == anchordomain && tgt && tgt != '_self') {
            anchors[i].setAttribute('target', '_self');
        }
        
        console.log(anchors[i]);
    }
})();
