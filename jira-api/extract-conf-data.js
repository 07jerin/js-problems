var k = (function () {
    let tableData = $('.confluenceTable tbody').map(function () {
        return $(this).find('td').map(function () {
            return $(this).html().replace(/<[^>]*>?/gm, '');
        }).get();
    }).get();

    let bugs = [];
    let bugData = {};
    for (let i = 0; i < 790; i++) { // 790 is the current total records

        const colIndex = i % 10;

        switch (colIndex) {
            case 0: {
                bugData = { summary: "", description: "", customfield_14401: '', priority: { id: '' } }; // create new object
                bugData.priority.id = parseInt((i + 158) / 158) + ""; // There can be 5 meaningful priorities, 158 -> 790 /5 
                break;
            }
            case 1: bugData.summary += "Bug :" + tableData[i]; break;
            case 3: bugData.description += "\n \n {color}*Severity*{color}  : " + tableData[i] || ''; break;
            case 4: bugData.customfield_14401 += "Customer :" + tableData[i] || '-'; break;
            case 5: {
                const subject = tableData[i] || "";
                bugData.summary += " : " + subject
                bugData.description += "\n \n {color}*Subject*{color} \n " + subject || "-";
                break;
            }

            case 6: bugData.description += "\n \n {color}*Fix version*{color}  : " + tableData[i] || '-'; break;;
            case 7: bugData.description += "\n \n {color}*PMG Comment*{color}  \n " + tableData[i] || ""; break;
            case 9: {
                bugData.description += "\n \n {color}*Dev Comment*{color} \n " + tableData[i] || "";

                bugData.summary = bugData.summary.substring(0, 250);
                bugs.push(bugData);
                break;
            }
        }

    }
    return bugs;
})();

