const fs = require('fs')
let { letters, memberCount } = loadMemberData();

function generateMemberId() {
    const year = new Date().getFullYear().toString().slice(-2);


    if (memberCount[letters] === 999) {
        letters = getNextLetters(letters);
        memberCount[letters] = 0;
    } else {
        memberCount[letters] = (memberCount[letters] || 0) + 1;
    }

    const memberId = (`F${year}${letters}${(memberCount[letters] || '001').toString().padStart(3, '0')}`).toString();
    saveMemberData({ letters, memberCount });
    console.log(memberId);
    return memberId;
}

function getNextLetters(currentLetters) {
    const lastLetter = currentLetters.slice(-1);
    const secondLastLetter = currentLetters.slice(0, -1);

    if (lastLetter === 'Z') {
        return String.fromCharCode(secondLastLetter.charCodeAt(0)+1)+"A";
    } else {
        return secondLastLetter + String.fromCharCode(lastLetter.charCodeAt(0) + 1) ;
    }
}

function loadMemberData() {
    try {
        const data = fs.readFileSync('memberCount.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error loading member count:", err);
        return {};
    }
}

function saveMemberData(memberCount) {
    try {
        fs.writeFileSync('memberCount.json', JSON.stringify(memberCount));
    } catch (err) {
        console.error("Error saving member count:", err);
    }
}
module.exports = generateMemberId;