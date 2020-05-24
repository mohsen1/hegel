(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{1322:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n(16),n(4),n(3),n(1),n(12),n(11),n(22);var s=n(59),o=n(65);n(37);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/class-types.mdx"}});var l={_frontmatter:i},r=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(s.b)(r,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"class-types"},"Class Types"),Object(s.b)("hr",null),Object(s.b)("p",null,"The same as in other \"analyzers\" Hegel doesn't provide a special syntax for class (only type syntax for properties and methods). You can define class the same as in JavaScript, but Hegel will create a type for this class and it's constructor."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'class User {\n  name: string;\n  password: string;\n\n  constructor(name: string, password: string): User {\n    this.name = name;\n    this.password = password;\n  }\n}\n\nconst user: User = new User("any.user@gmail.com", "qwerty");\n\n// Type is "class User"\nconst UserConstructor = User;\n')),Object(s.b)("h2",{id:"class-methods"},"Class Methods"),Object(s.b)("p",null,"As with ",Object(s.b)("a",a({parentName:"p"},{href:"/docs/function-types"}),"Function Types"),", Hegel provides syntax for argument types and return type;"),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'class Fighter {\n  tellTheRules(isNewbee: boolean): string {\n    return isNewbee ? "I don\'t know the rules." : `\n      1. You do not talk about Fight Club.\n      2. You DO NOT talk about Fight Club.\n      3. If someone yells “stop!”, goes limp, or taps out, the fight is over.\n      4. Only two guys to a fight.\n      5. One fight at a time, fellas.\n      6. The fights are bare knuckle. No shirt, no shoes, no weapons.\n      7. Fights will go on as long as they have to.\n      8. If this is your first time at Fight Club, you have to fight.`;\n  }\n}\n')),Object(s.b)("h2",{id:"class-fields"},"Class Fields"),Object(s.b)("p",null,"If you want to use a class field you must define it first and give it an annotation."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'class Fighter {\n  tellTheRules(): string {\n    // Error: Property "isNewbie" does not exist in "Fighter"\n    return this.isNewbie ? "I don\'t know the rules." : `\n      1. You do not talk about Fight Club.\n      2. You DO NOT talk about Fight Club.\n      3. If someone yells “stop!”, goes limp, or taps out, the fight is over.\n      4. Only two guys to a fight.\n      5. One fight at a time, fellas.\n      6. The fights are bare knuckle. No shirt, no shoes, no weapons.\n      7. Fights will go on as long as they have to.\n      8. If this is your first time at Fight Club, you have to fight.`;\n  }\n}\n')),Object(s.b)("p",null,"You can define class fields inside the body of class."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'class Fighter {\n  isNewbie: boolean = true;\n\n  tellTheRules(): string {\n    return this.isNewbie ? "I don\'t know the rules." : `\n      1. You do not talk about Fight Club.\n      2. You DO NOT talk about Fight Club.\n      3. If someone yells “stop!”, goes limp, or taps out, the fight is over.\n      4. Only two guys to a fight.\n      5. One fight at a time, fellas.\n      6. The fights are bare knuckle. No shirt, no shoes, no weapons.\n      7. Fights will go on as long as they have to.\n      8. If this is your first time at Fight Club, you have to fight.`;\n  }\n}\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you are already familiar with TypeScript, Hegel does not provide accessibility modifiers like ",Object(s.b)("inlineCode",{parentName:"p"},"public"),", ",Object(s.b)("inlineCode",{parentName:"p"},"private")," or ",Object(s.b)("inlineCode",{parentName:"p"},"protected"),". ")),Object(s.b)("h2",{id:"static-members"},"Static Members"),Object(s.b)("p",null,"The same as in JavaScript, static members of class will be inside the class constructor and not inside the class instance."),Object(s.b)("pre",null,Object(s.b)("code",a({parentName:"pre"},{className:"language-typescript"}),'class FightClub {\n  static tellTheRules(): string {\n    return `\n      1. You do not talk about Fight Club.\n      2. You DO NOT talk about Fight Club.\n      3. If someone yells “stop!”, goes limp, or taps out, the fight is over.\n      4. Only two guys to a fight.\n      5. One fight at a time, fellas.\n      6. The fights are bare knuckle. No shirt, no shoes, no weapons.\n      7. Fights will go on as long as they have to.\n      8. If this is your first time at Fight Club, you have to fight.`;\n  }\n}\n\nconst fightClubRules = FightClub.tellTheRules(); // 👌!\n\nconst fightClubInNYC = new FightClub();\n\n// Error: Property "tellTheRules" does not exist in "FightClub"\nconst localFightClubRules = fightClubInNYC.tellTheRules();\n')))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/class-types.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-class-types-mdx-cafc8e3424eb0807853b.js.map