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

function setDefaultWholeList(){
	var save = new LocalStorageManager();
	var wholeListArr=[];

	var list0 = {
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
	
	var list1 = {
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
	
	var list2 = {
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
	
	wholeListArr[0]=list0;
	wholeListArr[1]=list1;
	wholeListArr[2]=list2;
	save.setGameState(wholeListArr)
}