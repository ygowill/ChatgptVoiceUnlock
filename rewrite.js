// JS script for quantumult x to rewrite chatgpt request, enable voice to voice feature

var body = $response.body;
if ($response.status === 200) {
    var obj = JSON.parse(body);
    if ("feature_gates" in obj) {
        for (var key in obj["feature_gates"]) {
            if (("rule_id" in obj["feature_gates"][key]) && (obj["feature_gates"][key]["rule_id"] === "3yqcjHol8kM4fbypFkzhxC:50.00:3")) {
                obj["feature_gates"][key]["value"] = true;
            }
        }
    }

    // try unlock vision
    // if ("layer_configs" in obj) {
    //     for (var key in obj["layer_configs"]) {
    //         if (("group_name" in obj["layer_configs"][key]) && (obj["layer_configs"][key]["group_name"] === "control, 626 no vision")) {
    //             obj["layer_configs"][key]["value"]["use_low_latency_model"] = true;
    //         }
    //     }
    // }

    body = JSON.stringify(obj);
}
$done(body);