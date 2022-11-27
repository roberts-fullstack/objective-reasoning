function isAdmin(object){
    if(object.userRole !== 'ADMIN'){
        return false;
    }else{
        return true;
    }
}

function getEmail(user){
    let emailz =  user.firstName + '.' + user.lastName + '@codeimmersives.com'; 
    return emailz.toLowerCase(); 
}

function getPlaylistLength(name){
   let playlistz = name.name;
   let songz = name.songs.length
   return songz;

}

function getHardestHomework(homework){
    
        if(homework.length === 0){
        return '';
    }
    let lowestgrade = homework[0].averageScore;
    let lowestname = homework[0].name;
        for (let i = 0; i < homework.length; i ++){
            
            if (homework[i].averageScore < lowestgrade ){
               lowestgrade = homework[i].averageScore;
               lowestname = homework[i].name;
            }
            
        }   
    return lowestname;
} 
function createPhonebook(names, numbers){
    let phonebook = {};

    for (let i = 0; i < names.length; i++){
        phonebook[names[i]] = numbers[i];
    }
    return phonebook;
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};