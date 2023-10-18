function flaziobn() {

    var _this = this;
    var loader = {};
	
    if(window.location.href.indexOf("flazio.com") == -1){
		this.show = function() {};
		return false;
	}
		

    //load html e css
    $('head').append('<link href="https://www.flazio.com/componenti/flaziobn/style.css?v=2" rel="stylesheet" >');
    		

    this.show = function() {
		$(loader).load('//www.flazio.com/componenti/flaziobn/index.html', function(html) {
			_this.contenitore = $(html);
			$('body').append(_this.contenitore);
			
            var url = '/creare-sito-web-gratis?key=dafree';
            var image_name = 'user';

            if(window.location.search && window.location.search !='') {
                var args = [];
                query = window.location.search.split("?");
                query.splice(0, 1);
                query = query.join("&");
                if (query) {
                    var strList = query;
                    if (strList.indexOf("&") > -1) {
                        strList = strList.split("&");
                        $.each(strList, function (key, str) {
                            var parts = str.split('=');
                            args[unescape(parts[0])] = unescape(parts[1]);
                        });
                    } else {
                        var parts = strList.split('=');
                        args[unescape(parts[0])] = unescape(parts[1]);
                    }
                }
                if(args['r']) {
                    url = '/reg-pro?key=dapreview';
                    image_name = 'free-editor';
                }
            }
            
            var lingua = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage;
	
			if(lingua.substring(0,2) !== "it"){
                image_name += '-en';
			}
            
            _this.contenitore.css("background-image","url(https://www.flazio.com/componenti/flaziobn/images/"+image_name+".svg");
            _this.contenitore.find('a').attr("href", "https://www.flazio.com/"+url);
			
			_this.contenitore.find('.esc').on('click', function() {
				_this.contenitore.fadeOut(function() {
					_this.contenitore.remove();
				});
			});
		});
		
		
    };
    
    
    //temp
    if(main.idr && main.idr != 2)
        this.show = function() {};
    
}



