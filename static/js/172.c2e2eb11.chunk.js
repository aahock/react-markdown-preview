(this["webpackJsonp@uiw/react-markdown-preview"]=this["webpackJsonp@uiw/react-markdown-preview"]||[]).push([[172],{210:function(a,e){!function(a){var e={code:{pattern:/(^(?:\s*(?:\*\s*)*)).*[^*\s].+$/m,lookbehind:!0,inside:a.languages.java,alias:"language-java"}};a.languages.javadoc=a.languages.extend("javadoclike",{}),a.languages.insertBefore("javadoc","keyword",{"class-name":[{pattern:/(@(?:exception|throws|see|link|linkplain|value)\s+(?:[a-z\d]+\.)*)[A-Z](?:\w*[a-z]\w*)?(?:\.[A-Z](?:\w*[a-z]\w*)?)*/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}}],namespace:{pattern:/(@(?:exception|throws|see|link|linkplain)\s+)(?:[a-z\d]+\.)+/,lookbehind:!0,inside:{punctuation:/\./}},"code-section":[{pattern:/(\{@code\s+)(?:[^{}]|\{[^{}]*\})+?(?=\s*\})/,lookbehind:!0,inside:e},{pattern:/(<(code|tt)>\s*)[\s\S]+?(?=\s*<\/\2>)/,lookbehind:!0,inside:e}],tag:a.languages.markup.tag}),a.languages.javadoclike.addSupport("java",a.languages.javadoc)}(Prism)}}]);
//# sourceMappingURL=172.c2e2eb11.chunk.js.map