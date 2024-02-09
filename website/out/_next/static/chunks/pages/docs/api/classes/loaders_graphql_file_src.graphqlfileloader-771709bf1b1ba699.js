(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5032],{15634:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/api/classes/loaders_graphql_file_src.graphqlfileloader",function(){return i(84415)}])},84415:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t},useTOC:function(){return a}});var s=i(24246),l=i(25737),d=i(90946),r=i(20778),h=i(26801);function a(e){return[{value:"Implements",id:"implements",depth:2},{value:"Table of contents",id:"table-of-contents",depth:2},{value:"Constructors",id:"constructors",depth:3},{value:"Methods",id:"methods",depth:3},{value:"Constructors",id:"constructors-1",depth:2},{value:"constructor",id:"constructor",depth:3},{value:"Returns",id:"returns",depth:4},{value:"Methods",id:"methods-1",depth:2},{value:"canLoad",id:"canload",depth:3},{value:"Parameters",id:"parameters",depth:4},{value:"Returns",id:"returns-1",depth:4},{value:"Defined in",id:"defined-in",depth:4},{value:"canLoadSync",id:"canloadsync",depth:3},{value:"Parameters",id:"parameters-1",depth:4},{value:"Returns",id:"returns-2",depth:4},{value:"Defined in",id:"defined-in-1",depth:4},{value:"handleFileContent",id:"handlefilecontent",depth:3},{value:"Parameters",id:"parameters-2",depth:4},{value:"Returns",id:"returns-3",depth:4},{value:"Defined in",id:"defined-in-2",depth:4},{value:"load",id:"load",depth:3},{value:"Parameters",id:"parameters-3",depth:4},{value:"Returns",id:"returns-4",depth:4},{value:"Implementation of",id:"implementation-of",depth:4},{value:"Defined in",id:"defined-in-3",depth:4},{value:"loadSync",id:"loadsync",depth:3},{value:"Parameters",id:"parameters-4",depth:4},{value:"Returns",id:"returns-5",depth:4},{value:"Implementation of",id:"implementation-of-1",depth:4},{value:"Defined in",id:"defined-in-4",depth:4},{value:"resolveGlobs",id:"resolveglobs",depth:3},{value:"Parameters",id:"parameters-5",depth:4},{value:"Returns",id:"returns-6",depth:4},{value:"Defined in",id:"defined-in-5",depth:4},{value:"resolveGlobsSync",id:"resolveglobssync",depth:3},{value:"Parameters",id:"parameters-6",depth:4},{value:"Returns",id:"returns-7",depth:4},{value:"Defined in",id:"defined-in-6",depth:4}]}let c=(0,l.c)(function(e){let{toc:n=a(e)}=e,i=Object.assign({p:"p",a:"a",h1:"h1",code:"code",pre:"pre",span:"span",h2:"h2",ul:"ul",li:"li",h3:"h3",strong:"strong",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",hr:"hr"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../README",children:"graphql-tools-monorepo"})," / ",(0,s.jsx)(i.a,{href:"../modules/loaders_graphql_file_src",children:"loaders/graphql-file/src"})," / GraphQLFileLoader"]}),"\n",(0,s.jsx)(i.h1,{children:"Class: GraphQLFileLoader"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"../modules/loaders_graphql_file_src",children:"loaders/graphql-file/src"}),".GraphQLFileLoader"]}),"\n",(0,s.jsxs)(i.p,{children:["This loader loads documents and type definitions from ",(0,s.jsx)(i.code,{children:".graphql"})," files."]}),"\n",(0,s.jsx)(i.p,{children:"You can load a single source:"}),"\n",(0,s.jsx)(i.pre,{icon:h.Dr,"data-language":"js","data-copy":"",children:(0,s.jsxs)(i.code,{children:[(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" schema"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" loadSchema"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'schema.graphql'"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", {"})]}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  loaders: ["})}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    new"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" GraphQLFileLoader"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ]"})}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})})]})}),"\n",(0,s.jsx)(i.p,{children:"Or provide a glob pattern to load multiple sources:"}),"\n",(0,s.jsx)(i.pre,{icon:h.Dr,"data-language":"js","data-copy":"",children:(0,s.jsxs)(i.code,{children:[(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" schema"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" loadSchema"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'graphql/*.graphql'"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", {"})]}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  loaders: ["})}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    new"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" GraphQLFileLoader"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ]"})}),"\n",(0,s.jsx)(i.span,{children:(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})})]})}),"\n",(0,s.jsx)(i.h2,{id:n[0].id,children:n[0].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Loader",children:(0,s.jsx)(i.code,{children:"Loader"})}),"<",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:n[1].id,children:n[1].value}),"\n",(0,s.jsx)(i.h3,{id:n[2].id,children:n[2].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#constructor",children:"constructor"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:n[3].id,children:n[3].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#canload",children:"canLoad"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#canloadsync",children:"canLoadSync"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#handlefilecontent",children:"handleFileContent"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#load",children:"load"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#loadsync",children:"loadSync"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#resolveglobs",children:"resolveGlobs"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader#resolveglobssync",children:"resolveGlobsSync"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:n[4].id,children:n[4].value}),"\n",(0,s.jsx)(i.h3,{id:n[5].id,children:n[5].value}),"\n",(0,s.jsxs)(i.p,{children:["• ",(0,s.jsx)(i.strong,{children:"new GraphQLFileLoader"}),"(): ",(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoader"})})]}),"\n",(0,s.jsx)(i.h4,{id:n[6].id,children:n[6].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"loaders_graphql_file_src.GraphQLFileLoader",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoader"})})}),"\n",(0,s.jsx)(i.h2,{id:n[7].id,children:n[7].value}),"\n",(0,s.jsx)(i.h3,{id:n[8].id,children:n[8].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"canLoad"}),"(",(0,s.jsx)(i.code,{children:"pointer"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:n[9].id,children:n[9].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"pointer"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[10].id,children:n[10].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:n[11].id,children:n[11].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L66",children:"packages/loaders/graphql-file/src/index.ts:66"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[12].id,children:n[12].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"canLoadSync"}),"(",(0,s.jsx)(i.code,{children:"pointer"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n",(0,s.jsx)(i.h4,{id:n[13].id,children:n[13].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"pointer"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[14].id,children:n[14].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"boolean"})}),"\n",(0,s.jsx)(i.h4,{id:n[15].id,children:n[15].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L84",children:"packages/loaders/graphql-file/src/index.ts:84"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[16].id,children:n[16].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"handleFileContent"}),"(",(0,s.jsx)(i.code,{children:"rawSDL"}),", ",(0,s.jsx)(i.code,{children:"pointer"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"Object"})]}),"\n",(0,s.jsx)(i.h4,{id:n[17].id,children:n[17].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"rawSDL"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"pointer"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[18].id,children:n[18].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Object"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"document"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"DocumentNode"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"location"})}),(0,s.jsxs)(i.td,{align:"left",children:[(0,s.jsx)(i.code,{children:"undefined"})," | ",(0,s.jsx)(i.code,{children:"string"})]})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[19].id,children:n[19].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L200",children:"packages/loaders/graphql-file/src/index.ts:200"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[20].id,children:n[20].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"load"}),"(",(0,s.jsx)(i.code,{children:"pointer"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Source",children:(0,s.jsx)(i.code,{children:"Source"})}),"[]>"]}),"\n",(0,s.jsx)(i.h4,{id:n[21].id,children:n[21].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"pointer"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[22].id,children:n[22].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Source",children:(0,s.jsx)(i.code,{children:"Source"})}),"[]>"]}),"\n",(0,s.jsx)(i.h4,{id:n[23].id,children:n[23].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Loader",children:"Loader"}),".",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Loader#load",children:"load"})]}),"\n",(0,s.jsx)(i.h4,{id:n[24].id,children:n[24].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L128",children:"packages/loaders/graphql-file/src/index.ts:128"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[25].id,children:n[25].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"loadSync"}),"(",(0,s.jsx)(i.code,{children:"pointer"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Source",children:(0,s.jsx)(i.code,{children:"Source"})}),"[]"]}),"\n",(0,s.jsx)(i.h4,{id:n[26].id,children:n[26].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"pointer"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[27].id,children:n[27].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Source",children:(0,s.jsx)(i.code,{children:"Source"})}),"[]"]}),"\n",(0,s.jsx)(i.h4,{id:n[28].id,children:n[28].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Loader",children:"Loader"}),".",(0,s.jsx)(i.a,{href:"/docs/api/interfaces/utils_src.Loader#loadsync",children:"loadSync"})]}),"\n",(0,s.jsx)(i.h4,{id:n[29].id,children:n[29].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L165",children:"packages/loaders/graphql-file/src/index.ts:165"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[30].id,children:n[30].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"resolveGlobs"}),"(",(0,s.jsx)(i.code,{children:"glob"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),"[]>"]}),"\n",(0,s.jsx)(i.h4,{id:n[31].id,children:n[31].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"glob"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[32].id,children:n[32].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),"[]>"]}),"\n",(0,s.jsx)(i.h4,{id:n[33].id,children:n[33].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L102",children:"packages/loaders/graphql-file/src/index.ts:102"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:n[34].id,children:n[34].value}),"\n",(0,s.jsxs)(i.p,{children:["▸ ",(0,s.jsx)(i.strong,{children:"resolveGlobsSync"}),"(",(0,s.jsx)(i.code,{children:"glob"}),", ",(0,s.jsx)(i.code,{children:"options"}),"): ",(0,s.jsx)(i.code,{children:"string"}),"[]"]}),"\n",(0,s.jsx)(i.h4,{id:n[35].id,children:n[35].value}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{align:"left",children:"Name"}),(0,s.jsx)(i.th,{align:"left",children:"Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"glob"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"string"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.code,{children:"options"})}),(0,s.jsx)(i.td,{align:"left",children:(0,s.jsx)(i.a,{href:"/docs/api/interfaces/loaders_graphql_file_src.GraphQLFileLoaderOptions",children:(0,s.jsx)(i.code,{children:"GraphQLFileLoaderOptions"})})})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:n[36].id,children:n[36].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"string"}),"[]"]}),"\n",(0,s.jsx)(i.h4,{id:n[37].id,children:n[37].value}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/index.ts#L115",children:"packages/loaders/graphql-file/src/index.ts:115"})})]})},"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader",{filePath:"src/pages/docs/api/classes/loaders_graphql_file_src.graphqlfileloader.md",pageMap:d.v,frontMatter:{},title:"Class: GraphQLFileLoader"},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC);function t(e){return c(e)}}},function(e){e.O(0,[9659,2888,9774,179],function(){return e(e.s=15634)}),_N_E=e.O()}]);