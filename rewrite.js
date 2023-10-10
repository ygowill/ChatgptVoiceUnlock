// JS script for quantumult x to rewrite chatgpt request, enable voice to voice feature

var body = $response.body;
var obj = JSON.parse(body);
for (var key in obj["feature_gates"]) {
    if (obj["feature_gates"][key]["rule_id"] === "3yqcjHol8kM4fbypFkzhxC:50.00:3") {
        obj["feature_gates"][key]["value"] = true;
    }
}
body = JSON.stringify(obj);
$done(body);