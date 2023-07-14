const service = require('../services/mainService');

const testResultTest1 = {
    "topScorer": [
        {
            "id": 7,
            "name": "D",
            "dob": "2/1/1990",
            "runs": 5500,
            "wickets": 44
        }
    ],
    "topWicketTaker": [
        {
            "id": 1,
            "name": "MS Dhoni",
            "dob": "1/1/1980",
            "runs": 2000,
            "wickets": 50
        }
    ]
}
 // for getTopScorerAndWicktestaker function in service
describe("getTopScorerAndWicktestakerTest1",()=>{
    test("Should return top scorer and top wicket taker", ()=>{
        expect(service.getTopScorerAndWicktestaker(1)).toStrictEqual(testResultTest1);
    })
})

describe("getTopScorerAndWicktestakerTest2",()=>{
    test("Should return null in case team id is not present", ()=>{
        expect(service.getTopScorerAndWicktestaker(9)).toBe(null);
    })
})

// for getTeamData function in service
const inputDataTest3 = {
    "teamId": 1,
    "teamName": "RCB",
    "playersList": [1,7]
}
const testResultTest3 = {
    "teamId": 1,
    "teamName": "RCB",
    "playersList": [
        {
            "id": 1,
            "name": "MS Dhoni",
            "dob": "1/1/1980",
            "runs": 2000,
            "wickets": 50
        },
        {
            "id": 7,
            "name": "D",
            "dob": "2/1/1990",
            "runs": 5500,
            "wickets": 44
        }
    ]
}
describe("getTeamDataTest3",()=>{
    test("Should return team data with players added in playerlist",()=>{
        expect(service.getTeamData(inputDataTest3)).toStrictEqual(testResultTest3);
    })
})

