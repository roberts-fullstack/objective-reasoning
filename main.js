// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(usr){
    return usr.userRole === 'ADMIN'
    ?  true
    : false;
}

function getEmail(usr){
    return `${usr.firstName.toLowerCase()}.${usr.lastName.toLowerCase()}@codeimmersives.com`
}

function getPlaylistLength(obj){
    return obj.songs.length;
}


// Write a function, getHardestHomework that takes in an array of homework objects and returns the name of the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

// Examples

// getHardestHomework([])
// => ''

// getHardestHomework([
//     { name: 'homework 1', averageScore: 99 },
//     { name: 'homework 2', averageScore: 1 }
// ])
// => 'homework 2'

// getHardestHomework([
//     { name: 'hip-hip-array', averageScore: 12 },
//     { name: 'wait-i-object', averageScore: 200 },
//     { name: 'objective-reasoning', averageScore: 25 }
// ])
// => 'hip-hip-array'

function getHardestHomework(arr){
    let hard = '';
    if (arr.length === 0){
        return hard;
    } else {
        let score = arr[0].averageScore
        hard = arr[0].name;
        for (let i = 1; i < arr.length; i++){
            if (arr[i].averageScore < score){
                hard = arr[i].name;
            }
        }
        return hard;
    }
}

function createPhonebook(arrName, arrPhone){
    let book = {};
    for (let i = 0; i < arrName.length; i++){
        book[arrName[i]] = arrPhone[i];
    }
    return book;
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