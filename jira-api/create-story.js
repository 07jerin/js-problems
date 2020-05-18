var bugs =[
	
	{
		"summary": "Summary ",
		"description": "Detailed Desc",
		"customfield_14401": "Notes : ",
		"customfield_10703": {
			"id": "1"
		}
    },
    {
		"summary": "Summary 2 ",
		"description": "Detailed Desc 2",
		"customfield_14401": "Notes : 2 ",
		"customfield_10703": {
			"id": "2"
		}
    }
]

var customFieldValueMap = {
    notes : 'customfield_14401',
    severity : 'customfield_10703'
}

var fieldMeta = {
    
    
        project: {
            key: 'TEC'
        },
        issuetype: {
            id: 7
        },
        assignee: {
            name: 'xyz@abc.com'
        },
        reporter: {
            name: 'jerin.joseph@abc.com'
        },
        labels: [
			'Label_1', 
			'Label_2'
        ]
        
    
}

var data = {
    issueUpdates: []
}


bugs.forEach(bug => {
    data.issueUpdates.push({
        update: {},
        fields: {
         ...fieldMeta,
        ...bug
        }
    })
});

console.log("payload prepared:" + JSON.stringify(data));

var xhr = new XMLHttpRequest();
xhr.open("POST",
"https://jira.oraclecorp.com/jira/rest/api/2/issue/bulk", true);
xhr.setRequestHeader("Content-Type",
"application/json; charset=UTF-8");
var jiraResponse = xhr.send(JSON.stringify(data));
console.log(jiraResponse);