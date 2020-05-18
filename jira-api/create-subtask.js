var attributes = [
    "Engineering Design",
    "Engineering Design Review"
]

var attributeDescs = [
    "",
    ""
]

var parentIds = [
    "PARENT-STORY_ID"
]

var data = {
    fields: {
        project: {
            key: 'PROJ-KEY-TEC'
        }, summary: 'Sub-Task', description: 'Sub-Task Desc', issuetype: {
            id: '5'
        }, parent: {
            key: 'PARENT-STORY_ID'
        }
    }
};

for (var j = 0; j < parentIds.length; j++) {
    parentKey = parentIds[j
    ];

    for (var i = 0; i < attributes.length; i++) {
        var attributeName = attributes[i
        ];
        var attributeDescription = attributeDescs[i
        ];

        data.fields.parent.key = parentKey;
        data.fields.summary = attributeName;
        data.fields.description = attributeDescription;


        var xhr = new XMLHttpRequest();


        xhr.open("POST",
            "https://jira.oraclecorp.com/jira/rest/api/2/issue", true);
        xhr.setRequestHeader("Content-Type",
            "application/json; charset=UTF-8");
        console.log("payload prepared:" + JSON.stringify(data));
        xhr.send(JSON.stringify(data));
    }
}