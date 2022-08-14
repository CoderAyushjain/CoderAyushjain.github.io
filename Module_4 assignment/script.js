var names = new Array();
names[0] = "james";
names[1] = "heidi";
names[2] = "walt";
names[3] = "jamie";
names[4] = "zack";
names[5] = "Jacqueline";
names[6] = "ally";
names[7] = "alga";
names[8] = "lisa";
names[9] = "jennifer";

for(var i = 0; i < names.length; i++){
    if(names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j'){
        console.log("Goodbye "+ names[i]);
    }
    else{
        console.log("Hello "+ names[i]);
    }
}