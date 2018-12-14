"use strict";var _slicedToArray=function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){o=!0,a=r}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}return e}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _classCallCheck(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var selectionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,o=0;o<t;o++)for(var a=r[o],i=o+1;i<t;i++){if(n++,r[i]<a){var c=[r[o],r[i]],l=c[0],s=c[1];r[o]=s,r[i]=l,o--;break}}return console.info({"元素组":e,"数组":r,"比对次数":n}),r},Unique=function(r){return Array.from(new Set(r))},arr=new Array(1,3,2,5,7,8,9,1,2,23,15,88,12),_Student=function r(t){_classCallCheck(this,r);var e=_slicedToArray(t,2),n=e[0],o=e[1];this.name=n,this.score=o},_selectionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,o=0;o<t;o++)for(var a=r[o],i=o+1;i<t;i++){var c=r[i];if(n++,c.score>a.score||c.score==a.score&&c.name<a.name){var l=[r[o],r[i]],s=l[0],f=l[1];r[o]=f,r[i]=s,o--;break}}return console.info({"元素组":e,"数组":r,"比对次数":n}),r},_dataFormatting=function(r){var t=new Set,e=!0,n=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var c=a.value;t.add(new _Student(c))}}catch(r){n=!0,o=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw o}}return Array.from(t)},_arr=[["D",85],["A",70],["B",60],["T",90],["元",75],["X",85]],_Student2=function r(t){_classCallCheck(this,r);var e=_slicedToArray(t,2),n=e[0],o=e[1];this.name=n,this.score=o},_selectionSort2=function(r){for(var t=r.length,e=[].concat(r),n=0,o=0;o<t;o++)for(var a=r[o],i=o+1;i<t;i++){var c=r[i];if(n++,c.score>a.score||c.score==a.score&&c.name<a.name){var l=[r[o],r[i]],s=l[0],f=l[1];r[o]=f,r[i]=s,o--;break}}return console.info({"原数组":e,"数组":r,"比对次数":n}),r},_dataFormatting2=function(r){var t=new Set,e=!0,n=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var c=a.value;t.add(new _Student2(c))}}catch(r){n=!0,o=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw o}}return Array.from(t)},_Helpers=window.Helpers,Student=function r(t){_classCallCheck(this,r);var e=_slicedToArray(t,2),n=e[0],o=e[1];this.name=n,this.score=o},dataFormatting=function(r){var t=new Set,e=!0,n=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var c=a.value;t.add(new Student(c))}}catch(r){n=!0,o=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw o}}return Array.from(t)},Helpers=window.Helpers,insertionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,o=1;o<t;o++)for(var a=o;0<a&&(n++,r[a].score>r[a-1].score||r[a].score==r[a-1].score&&r[a].name<r[a-1].name);a--){var i=[r[a],r[a-1]],c=i[0],l=i[1];r[a]=l,r[a-1]=c}return console.info({"原数组":e,"数组":r,"比对次数":n}),r},_insertionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,o=1;o<t;o++){var a=r[o],i=void 0;for(i=o;0<i;i--){if(n++,!(r[i-1].score>a.score)){i<o&&(r[i]=a);break}r[i]=r[i-1]}}return console.info({"原数组":e,"数组":r,"比对次数":n}),r},_arr2=Helpers.randomArray(20);Helpers.perfTest("插入排序法",_insertionSort,dataFormatting(_arr2));