"use strict";var _slicedToArray=function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var e=[],n=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(r){a=!0,o=r}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}return e}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _classCallCheck(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var selectionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,a=0;a<t;a++)for(var o=r[a],i=a+1;i<t;i++){if(n++,r[i]<o){var c=[r[a],r[i]],l=c[0],s=c[1];r[a]=s,r[i]=l,a--;break}}return console.info({"元素组":e,"数组":r,"比对次数":n}),r},Unique=function(r){return Array.from(new Set(r))},arr=new Array(1,3,2,5,7,8,9,1,2,23,15,88,12);selectionSort(Unique(arr));var Student=function r(t){_classCallCheck(this,r);var e=_slicedToArray(t,2),n=e[0],a=e[1];this.name=n,this.score=a},_selectionSort=function(r){for(var t=r.length,e=[].concat(r),n=0,a=0;a<t;a++)for(var o=r[a],i=a+1;i<t;i++){var c=r[i];if(n++,c.score>o.score||c.score==o.score&&c.name<o.name){var l=[r[a],r[i]],s=l[0],f=l[1];r[a]=f,r[i]=s,a--;break}}return console.info({"元素组":e,"数组":r,"比对次数":n}),r},dataFormatting=function(r){var t=new Set,e=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var c=o.value;t.add(new Student(c))}}catch(r){n=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}return Array.from(t)},_arr=[["D",85],["A",70],["B",60],["T",90],["元",75],["X",85]];_selectionSort(dataFormatting(_arr));var _Student=function r(t){_classCallCheck(this,r);var e=_slicedToArray(t,2),n=e[0],a=e[1];this.name=n,this.score=a},_selectionSort2=function(r){for(var t=r.length,e=[].concat(r),n=0,a=0;a<t;a++)for(var o=r[a],i=a+1;i<t;i++){var c=r[i];if(n++,c.score>o.score||c.score==o.score&&c.name<o.name){var l=[r[a],r[i]],s=l[0],f=l[1];r[a]=f,r[i]=s,a--;break}}return console.info({"元素组":e,"数组":r,"比对次数":n}),r},_dataFormatting=function(r){var t=new Set,e=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var c=o.value;t.add(new _Student(c))}}catch(r){n=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}return Array.from(t)},Helpers=window.Helpers,_arr2=Helpers.randomArray(1e6);Helpers.perfTest("选择排序法",_selectionSort2,_dataFormatting(_arr2));