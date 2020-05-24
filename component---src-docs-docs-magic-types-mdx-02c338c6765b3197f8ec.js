(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{1329:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n(16),n(4),n(3),n(1),n(12),n(11),n(22);var a=n(59),r=n(65);n(37);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/magic-types.mdx"}});var p={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,o({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"magic-types"},"Magic Types"),Object(a.b)("hr",null),Object(a.b)("p",null,"Hegel provides several of types which help to extract or create new types from existed. They may help to remove copy-pasted code. These types are available globally."),Object(a.b)("p",null,"Table of contents:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#classinstance"}),"$Class")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#excludetarget-whichshouldbeexcluded"}),"$Entries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#excludetarget-whichshouldbeexcluded"}),"$Exclude")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#immutabletype"}),"$Immutable")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#instanceofconstructor"}),"$InstanceOf")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#intersectiono1-o2-"}),"$Intersection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#keysobj"}),"$Keys")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#omitobj-keys"}),"$Omit")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#partialobj"}),"$Partial")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#pickobj-keys"}),"$Pick")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#propertytypeobj-key"}),"$PropertyType")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#returntypefntype-"}),"$ReturnType")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#softobj"}),"$Soft")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#strictobj"}),"$Strict")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#throwserrortype"}),"$Throws")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#typeofvariable"}),"$TypeOf")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"#valuesobj"}),"$Values"))),Object(a.b)("h2",{id:"classinstance"},"$Class<Instance",">"),Object(a.b)("p",null,"$Class extract static type of constructor for given ",Object(a.b)("inlineCode",{parentName:"p"},"Instance")," type."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'class Animal {}\nclass Dog extends Animal {}\nclass Plant {}\n\nlet animalClass: $Class<Animal> = Animal;\nlet dogClass: $Class<Dog> = Dog;\nlet plantClass: $Class<Plant> = Plant;\n\n// Because "class Dog" is subtype of "class Animal"\nanimalClass = dogClass; // 👌!\n\n// Error: Type "class Animal" is incompatible with type "class Dog"\ndogClass = animalClass;\n\n// Error: Type "class Animal" is incompatible with type "class Plant"\nplantClass = animalClass;\n\n// Error: Type "class Dog" is incompatible with type "class Plant"\nplantClass = dogClass;\n')),Object(a.b)("h2",{id:"entriesobj"},"$Entries<Obj",">"),Object(a.b)("p",null,"$Entries<Obj",">"," returns the union type of all properties and values types."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number };\n\n// Type of "property" is "[\'age\', number] | [\'name\', string]"\nconst property: $Entries<Admin> = ["name", 4]; \n')),Object(a.b)("h2",{id:"excludetarget-whichshouldbeexcluded"},"$Exclude<Target, WhichShouldBeExcluded",">"),Object(a.b)("p",null,"Create a type by excluding from ",Object(a.b)("inlineCode",{parentName:"p"},"Target")," all variants for which ",Object(a.b)("inlineCode",{parentName:"p"},"WhichShouldBeExcluded")," will be a super type."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Status = "Ok" | "Failed" | "Pending" | "Canceled";\n\n// IntermediateStatuses = "Canceled" | "Panding"\ntype IntermediateStatuses = $Exclude<Status, "Ok" | "Failed">;\n\nconst intermediateStatuses: Array<$Exclude<Status, "Ok" | "Failed">> = ["Pending", "Canceled"];\n\n// Error: Type "[\'Failed\']" is incompatible with type "...Array<\'Canceled\' | \'Pending\'>"\nintermediateStatuses.push("Failed"); \n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with TypeScript then you can be familiar with Exclude type.\n",Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/docs/handbook/utility-types.html#excludetu"}),"TypeScript Exclude Type"))),Object(a.b)("h2",{id:"immutabletype"},"$Immutable<Type",">"),Object(a.b)("p",null,"This magic type convert any type into immutable variant of this type which means that you will not be able to mutate this type or its properties. You can use it in several situations."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Prevent variable mutation.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function manipulate(num: $Immutable<number>) {\n\n  // Error: Attempt to mutate immutable type\n  num = 15;\n}\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Prevent object mutation.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const admin: $Immutable<{ name: string }> = { name: "Roy Trenneman" };\n\n// Error: Attempt to mutate immutable type\nadmin.name = "Maurice Moss";\n\n// Error: All parameters should be an object type. Only first parameter should mutable object type. 0 is not.\nconst resultAdmin = Object.assign(admin, { name: "Maurice Moss" });\n')),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Prevent mutation of specific property.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const admin: { name: string, age: $Immutable<number> } = { name: "Roy Trenneman", age: 32 };\n\nadmin.name = "Maurice Moss"; // 👌!\n\n// Error: Attempt to mutate immutable type\nadmin.age = 33;\n\nconst maurice = Object.assign(admin, { name: "Maurice Moss" }); // 👌!\n\n// Error: Attempt to mutate immutable property "age" in "{ age: $Immutable<number>, name: string }" type\nconst twelveAgeAdmin = Object.assign(admin, { age: 12 });\n')),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Prevent array mutation.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const arr: $Immutable<Array<number>> = [1, 2, 3];\n\n// Error: Attempt to mutate immutable type\narr[0] = 4;\n\n// Error: Property "pop" does not exist in "$Immutable<Array<number>>"\narr.pop();\n')),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Also (as result of array immutability), $Immutable can give you an ability to use more specific array as subtype of existed.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [1, 2, 3];\n\n// Error: Type "Array<number>" is incompatible with type "Array<number | string>"\nconst numbersOrStrings: Array<number | string> = numbers;\n\nconst immutableNumbers: $Immutable<Array<number>> = [1, 2, 3];\nconst immutableNumbersOrStrings: $Immutable<Array<number | string>> = immutableNumbers; // 👌!\n')),Object(a.b)("h2",{id:"instanceofconstructor"},"$InstanceOf<Constructor",">"),Object(a.b)("p",null,"Create a type which is the instance type of a provided constructor ",Object(a.b)("inlineCode",{parentName:"p"},"Constructor"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'class Animal {}\nclass Dog extends Animal {}\nclass Plant {}\n\ntype AnimalClass = $Class<Animal>;\ntype DogClass = $Class<Dog>;\ntype PlantClass = $Class<Plant>;\n\n// The same as "animal: Animal"\nlet animal: $InstanceOf<AnimalClass> = new Animal();\n\n// The same as "dog: Dog"\nlet dog: $InstanceOf<DogClass> = new Dog();\n\n// The same as "planet: Planet"\nlet plant: $InstanceOf<PlantClass> = new Plant();\n\n// Because "Dog" is subtype of "Animal"\nanimal = dog; // 👌!\n\n// Error: Type "Animal" is incompatible with type "Dog"\ndog = animal;\n\n// Error: Type "Animal" is incompatible with type "Plant"\nplant = animal;\n\n// Error: Type "Dog" is incompatible with type "Plant"\nplant = dog;\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If your class is generic then you should provide type parameters after class:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'class Container<T> {}\n\ntype ContainerClass = $Class<Container<unknown>>;\n\n// "number" type as parameter after "ContainerClass"\nconst container: $InstanceOf<ContainerClass, number> = new Container<number>();\n')),Object(a.b)("h2",{id:"intersectiono1-o2-"},"$Intersection<O1, O2, ...",">"),Object(a.b)("p",null,"$Intersection type merge multiple object types into new one. It means that you will get a new object types which will contain all properties of provided object types. If some objects contain the same properties then property of the most right object will be chosen."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type JsonSerializable = {\n    toJSON: () => string\n}\n\ntype Base64Serializable = {\n    toBase64: () => string\n}\n\ntype HashSerializable = {\n    getHash: () => string\n}\n\nconst fullSerializable: $Intersection<JsonSerializable, Base64Serializable, HashSerializable> = {\n    toJSON() { return ""; },\n    toBase64() { return ""; },\n    getHash() { return ""; },\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with TypeScript or Flow.js then you can be familiar with intersection type.\n",Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types"}),"Intersection in TypeScript"),", ",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/intersections/#intersection-type-syntax-"}),"Intersection in Flow.js"),";")),Object(a.b)("h2",{id:"keysobj"},"$Keys<Obj",">"),Object(a.b)("p",null,"$Keys type return a ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/union-types"}),"Union Type")," of all possible keys of provide ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number };\n\n// Type of "property" is "\'age\' | \'name\'"\nconst property: $Keys<Admin> = "name"; \n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $Keys type.\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-keys"}),"Flow.js $Keys"),".")),Object(a.b)("h2",{id:"omitobj-keys"},"$Omit<Obj, Keys",">"),Object(a.b)("p",null,"Create an ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," by removing all properties provided as ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/union-types"}),"Union Type")," by ",Object(a.b)("inlineCode",{parentName:"p"},"Keys")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number, position: "admin" };\n\n// Type of "admin" is "{ position: "admin" }"\nconst admin: $Omit<Admin, "age" | "name"> = { position: "admin" }\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with TypeScript then you can be familiar with Omit type.\n",Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/docs/handbook/utility-types.html#omittk"}),"TypeScript Omit Type"))),Object(a.b)("h2",{id:"partialobj"},"$Partial<Obj",">"),Object(a.b)("p",null,"Create an ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," by converting all properties of ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," ",Object(a.b)("inlineCode",{parentName:"p"},"Obj")," into ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/optional-types"}),"Optional Type"),";"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type User = {\n  name: string,\n  age: number,\n};\n\nfunction patch(original: User, updates: $Partial<User>): User {\n  return {\n    name: updates.name || original.name,\n    age: updates.age || original.age\n  };\n}\n\nconst original: User = { name: "original name", age: 20 };\n\nconst olderUser = patch(original, { age: 22 });\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with TypeScript then you can be familiar with Partial type.\n",Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/docs/handbook/utility-types.html#partialt"}),"TypeScript Partial Type"))),Object(a.b)("h2",{id:"pickobj-keys"},"$Pick<Obj, Keys",">"),Object(a.b)("p",null,"Create an ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," by removing all properties which are not provided as ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/union-types"}),"Union Type")," by ",Object(a.b)("inlineCode",{parentName:"p"},"Keys")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number, position: "admin" };\n\n// Type of "admin" is "{ name: string, age: number }"\nconst admin: $Pick<Admin, "age" | "name"> = { name: "Maurice Moss", age: 33 };\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with TypeScript then you can be familiar with Pick type.\n",Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/docs/handbook/utility-types.html#picktk"}),"TypeScript Pick Type"))),Object(a.b)("h2",{id:"propertytypeobj-key"},"$PropertyType<Obj, Key",">"),Object(a.b)("p",null,"Return a property with name ",Object(a.b)("inlineCode",{parentName:"p"},"Key")," type from ",Object(a.b)("inlineCode",{parentName:"p"},"Obj"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number, position: "admin" };\n\n// Type of "age" variable is "number"\nconst age: $PropertyType<Admin, "age"> = 33;\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $PropertyType type.\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-propertytype"}),"Flow.js $PropertyType"),".\nThe main difference between Flow.js $PropertyType and Hegel $PropertyType is ability to use not only string literal as a second parameter of $PropertyType.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Usage of $PropertyType with type variable\ntype Admin = { name: string, age: number };\n\nconst propertyOf = <O: Object, K: $Keys<O>>(obj: O, key: K): $PropertyType<O, K> => obj[key];\n\nconst admin: Admin = { name: "Maurice Moss", age: 33 };\n\n// Type of "age" variable is "number"\nconst age = propertyOf(admin, "age");\n')),Object(a.b)("h2",{id:"returntypefntype-"},"$ReturnType<FnType, ...",">"),Object(a.b)("p",null,"Return a return type of provided ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/function-types"}),"Function Type")," ",Object(a.b)("inlineCode",{parentName:"p"},"FnType")," after applying generic arguments if ",Object(a.b)("inlineCode",{parentName:"p"},"FnType")," is ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/generic-types"}),"Generi Function"),";"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type SimpleFunction = () => string;\n\n// Type of variable "returnOfSimpleFunction" is "string"\nconst returnOfSimpleFunction: $ReturnType<SimpleFunction> = "";\n\ntype GenericFunction = <T>(T) => T;\n\n// Type of variable "returnOfGenericFunction" is "string"\n// Note that "string" was provided as type argument after original function type\nconst returnOfGenericFunction: $ReturnType<GenericFunction, string> = "";\n\n// If you does not provide type argument for generic function you will got an error\n// Error: Generic "<T>(T) => T" called with wrong number of arguments. Expect: 1, Actual: 0\nconst _: $ReturnType<GenericFunction> = "";\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $Call type. $ReturnType has the same semantic as $Call type in Flow.js\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-call"}),"Flow.js $Call"),".")),Object(a.b)("h2",{id:"softobj"},"$Soft<Obj",">"),Object(a.b)("p",null,"Convert any ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," in ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types#strict-and-soft-object-types"}),"Soft Object Type"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number };\n\n// Error: Type "{ age: 33, name: \'Maurice Moss\', test: 2 }" is incompatible with type "{ age: number, name: string }"\nconst strictAdmin: Admin = { name: "Maurice Moss", age: 33, test: 2 };\n\nconst softAdmin: $Soft<Admin> = { name: "Maurice Moss", age: 33, test: 2 }; // 👌!\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $Shape type. $Soft has the same semantic as $Shape type in Flow.js\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-shape"}),"Flow.js $Shape"),".")),Object(a.b)("h2",{id:"strictobj"},"$Strict<Obj",">"),Object(a.b)("p",null,"Convert any ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types"}),"Object Type")," in ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/object-types#strict-and-soft-object-types"}),"Strict Object Type"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number, ... };\n\nconst softAdmin: Admin = { name: "Maurice Moss", age: 33, test: 2 }; // 👌!\n\n// Error: Type "{ age: 33, name: \'Maurice Moss\', test: 2 }" is incompatible with type "{ age: number, name: string }"\nconst strictAdmin: $Strict<Admin> = { name: "Maurice Moss", age: 33, test: 2 };\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $Exact type. $Soft has the same semantic as $Exact type in Flow.js\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-exact"}),"Flow.js $Exact"),".")),Object(a.b)("h2",{id:"throwserrortype"},"$Throws<ErrorType",">"),Object(a.b)("p",null,"$Throws type act like a ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.javatpoint.com/throws-keyword-and-difference-between-throw-and-throws"}),"Throws Statement in Java"),". When you declare return type of your function as $Throws, you need to throw subtype of declared throws type."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Error: Function should throw "SyntaxError" but throws nothing\nfunction assert(something: unknown): $Throws<SyntaxError> {}\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function assert(something: unknown): $Throws<SyntaxError> {\n\n  // Error: Type "ReferenceError" is incompatible with type "SyntaxError"\n  throw new ReferenceError();\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function assert(something: unknown): $Throws<ReferenceError> {\n  throw new ReferenceError(); // 👌!\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function assert(something: unknown): $Throws<SyntaxError | ReferenceError> {\n  throw new ReferenceError(); // 👌!\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"function assert(something: unknown): $Throws<Error> {\n  throw new ReferenceError(); // 👌!\n}\n")),Object(a.b)("p",null,"Also, if you call function which throws an error and this error is incompatible with declarated error type - Hegel will notify you about it."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function assertIsNumber(something: unknown) {\n  if (typeof something !== "number") {\n    throw new Error("wrong parameter"); // 👌!\n  }\n}\n\nfunction assertEntry(something: unknown): $Throws<TypeError> {\n\n  // Error: Current function throws "Error" type which is incompatible with declareted throw type "TypeError"\n  assertIsNumber(something);\n}\n')),Object(a.b)("p",null,"If you want to annotate that your function will throw something or will return something then you should use ",Object(a.b)("a",o({parentName:"p"},{href:"/docs/union-types"}),"Union Type")," with $Throws:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'function processIfValid(a, b): number | $Throws<TypeError> {\n  if (typeof a !== "number" || typeof b !== "number") {\n    throw new TypeError("Function works only with numbers!");\n  }\n  return a + b;\n}\n')),Object(a.b)("h2",{id:"typeofvariable"},"$TypeOf<Variable",">"),Object(a.b)("p",null,"The $TypeOf type returns the Hegel type of a provided variable ",Object(a.b)("inlineCode",{parentName:"p"},"Variable"),". Note, that $TypeOf is unique type because this is the only type which gets non-type argument."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const someVariable = [1, 2, 3];\n\n// Type of variable "anotherVariable" is "[1, 2, 3]"\nconst anotherVariable: $TypeOf<someVariable> = someVariable;\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Error: "$TypeOf" work only with identifier\nconst _: $TypeOf<number> = []\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'// Error: Variable "a" is not defined!\nconst _: $TypeOf<a> = []\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'If you familiar with TypeScript or Flow.js then you can be familiar with "typeof" operator.\n',Object(a.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/play/index.html?ssl=2&ssc=10&pln=2&pc=16#code/MYewdgzgLgBGCuBbARgUwE4QFwwILvQEMBPAHgRQwD4YBeGAbQEYAaGAJjYGYBdAbgBQoSLEI4oxAA6oQAMzhI0mOgsqY+QA"}),"TypeScript typeof operator"),"\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/typeof/#toc-typeof-type-syntax"}),"Flow.js typeof operator"))),Object(a.b)("h2",{id:"valuesobj"},"$Values<Obj",">"),Object(a.b)("p",null,"$Values<Obj",">"," returns the union type of all properties value types."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'type Admin = { name: string, age: number };\n\n// Type of "property" is "number | string"\nconst property: $Values<Admin> = "name"; \n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you familiar with Flow.js then you can be familiar with $Vaues type.\n",Object(a.b)("a",o({parentName:"p"},{href:"https://flow.org/en/docs/types/utilities/#toc-values"}),"Flow.js $Values"),".")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/magic-types.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-magic-types-mdx-02c338c6765b3197f8ec.js.map