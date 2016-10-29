Url = {
    get get(){
        var vars= {};
        if(window.location.search.length!==0)
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
                key=decodeURIComponent(key);
                if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
                else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
            });
        return vars;
    }
};

	var configlist0 = {
		"title": "Yes Or No",
		"content": 
		[
			{
				"Name": "Yes",
			},
			{
				"Name": "No",
			}
		]
	}
	
	var configlist1 = {
		"title": "Which Restaurant",
		"content": 
		[
			{
				"Name": "Restaurant A",
			},
			{
				"Name": "Restaurant B",
			},
			{
				"Name": "Restaurant C",
			}
		]
	}
	
	var configlist2 = {
		"title": "Winner",
		"content": 
		[
			{
				"Name": "Peter",
			},
			{
				"Name": "Skyler",
			},
			{
				"Name": "Alvin",
			}
		]
	}
	
	
function setDefaultWholeList(){
	var save = new LocalStorageManager();
	var wholeListArr=[];


	
	wholeListArr[0]=configlist0;
	wholeListArr[1]=configlist1;
	wholeListArr[2]=configlist2;
	save.setGameState(wholeListArr)
}