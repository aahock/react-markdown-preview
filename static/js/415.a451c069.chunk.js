(this["webpackJsonp@uiw/react-markdown-preview"]=this["webpackJsonp@uiw/react-markdown-preview"]||[]).push([[415],{453:function(e,r){!function(e){var r=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,t="(?:"+n.source+"(?:[ \t]+"+r.source+")?|"+r.source+"(?:[ \t]+"+n.source+")?)";function a(e,r){r=(r||"").replace(/m/g,"")+"m";var n=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g,(function(){return t})).replace(/<<value>>/g,(function(){return e}));return RegExp(n,r)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return t}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return t}))),lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/true|false/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:n,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)}}]);
//# sourceMappingURL=415.a451c069.chunk.js.map