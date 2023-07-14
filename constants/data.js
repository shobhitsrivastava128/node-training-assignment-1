exports.players = [
    {
        id: 1,
        name: "MS Dhoni",
        dob: "1/1/1980",
        runs: 2000,
        wickets: 50
    },
    {
        id: 2,
        name: "Shikhar Dhawan",
        dob: "1/1/1980",
        runs: 3000,
        wickets: 5
    },
    {
        id:3,
        name:"Virat Kohli",
        dob:"2/1/1990",
        runs:5000,
        wickets:1
    },
    {
        id:4,
        name:"A",
        dob:"2/1/1990",
        runs:1000,
        wickets:10
    },
    {
        id:5,
        name:"B",
        dob:"2/1/1990",
        runs:30000,
        wickets:12
    },
    {
        id:6,
        name:"C",
        dob:"2/1/1990",
        runs:3300,
        wickets:40
    },
    {
        id:7,
        name:"D",
        dob:"2/1/1990",
        runs:5500,
        wickets:44
    },
    {
        id:8,
        name:"E",
        dob:"2/1/1990",
        runs:200,
        wickets:99
    },
    {
        id:9,
        name:"F",
        dob:"2/1/1990",
        runs:250,
        wickets:200
    },
    {
        id:10,
        name:"G",
        dob:"2/1/1990",
        runs:1000,
        wickets:1
    },
    {
        id:11,
        name:"H",
        dob:"2/1/1990",
        runs:400,
        wickets:4
    }
]

exports.teams = [
    {
        teamId:1,
        teamName:"RCB",
        playersList : [1,7],
    },
    {
        teamId:2,
        teamName:"KEP",
        playersList : [2,9,6,4],
    },
    {
        teamId:3,
        teamName:"CSK",
        playersList : [3,11,5],
    }

]

exports.matches = [
    {
        matchId : 1,
        matchDate : "12/20/2023",
        team1:1,
        team2:2
    },
    {
        matchId : 2,
        matchDate : "14/07/2023",
        team1:3,
        team2:2
    }
]