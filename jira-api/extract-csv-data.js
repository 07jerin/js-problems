var csv = `123,Description1, 2,Summary 1,1,
222,Description 2, 2,Summary 2,5
`;

var tableData = csv.split(',');
var bugs = [];
let bugData = {};
for (let i = 0; i < 10; i++) {

    const colIndex = i % 5;

    switch (colIndex) {
        case 0: {
            bugData = { summary: "", description: "", customfield_14401: '', customfield_10703: { id: '' } };
            bugData.summary = "Bug : " + tableData[i];
            break;
        }
        case 1: bugData.description += tableData[i]; break;
        case 2: {
            var sev = tableData[i];
            var jiraSev = "";
            if (sev == "1") {
                jiraSev = "10773";
            } else if (sev == "2") {
                jiraSev = "10774";
            } else if (sev == "3") {
                jiraSev = "10775";
            } else if (sev == "4") {
                jiraSev = "10776";
            }
            bugData.customfield_10703.id = jiraSev;
            break;
        }
        case 3: {
         bugData.summary += " " + tableData[i] || '';
         bugData.summary = bugData.summary.replace('\n', "");   
         break;
        }
        case 4: {
            bugData.customfield_14401 += "SR Count : " + tableData[i] || '-';
             bugs.push(bugData);
            break;
        }


    }

}
