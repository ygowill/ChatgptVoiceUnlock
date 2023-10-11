// JS script for quantumult x to rewrite chatgpt request, enable voice to voice feature

// var body = $response.body;

var obj = {
    "plugins": true,
    "breeze": true,
    "browsing": true,
    "dalle": true,
    "sunshine": true,
    "code_interpreter": true
};

body = JSON.stringify(obj);

$done(body);