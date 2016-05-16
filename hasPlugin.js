<!--without IE-->
function hasPlugin(name){
	name=name.toLowerCase();
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
			return true;
		}
	}
	return false;
}

<!--IE-->
function hasIEPlugin(IEname){
	try{
		new ActiveObject(IEname);
		return true;
	} catch(ex){
		return false;
	}
}

function test(name,IEname){
	var result=hasPlugin(name);
	if(!result){
		result=hasIEPlugin(IEname);
	}
	return result;
}

<!--test Flash-->
alert("Flash","ShockwaveFlash.ShockwaveFlash");
		
<!--test QuickTime-->
alert("QuickTime","QuickTime.QuickTime");