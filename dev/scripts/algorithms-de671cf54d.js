"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var selectionSort=function(r){for(var e=r.length,t=[].concat(r),n=0,a=0;a<e;a++)for(var o=r[a],i=a+1;i<e;i++){if(n++,r[i]<o){var c=[r[a],r[i]],s=c[0],l=c[1];r[a]=l,r[i]=s,a--;break}}return console.info({"元素组":t,"数组":r,"比对次数":n}),r},Unique=function(r){return Array.from(new Set(r))},arr=new Array(1,3,2,5,7,8,9,1,2,23,15,88,12),_Student=function r(e){_classCallCheck(this,r);var t=_slicedToArray(e,2),n=t[0],a=t[1];this.name=n,this.score=a},_selectionSort=function(r){for(var e=r.length,t=[].concat(r),n=0,a=0;a<e;a++)for(var o=r[a],i=a+1;i<e;i++){var c=r[i];if(n++,c.score>o.score||c.score==o.score&&c.name<o.name){var s=[r[a],r[i]],l=s[0],f=s[1];r[a]=f,r[i]=l,a--;break}}return console.info({"元素组":t,"数组":r,"比对次数":n}),r},_dataFormatting=function(r){var e=new Set,t=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var c=o.value;e.add(new _Student(c))}}catch(r){n=!0,a=r}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}return Array.from(e)},_arr=[["D",85],["A",70],["B",60],["T",90],["元",75],["X",85]],_Student2=function r(e){_classCallCheck(this,r);var t=_slicedToArray(e,2),n=t[0],a=t[1];this.name=n,this.score=a},_selectionSort2=function(r){for(var e=r.length,t=[].concat(r),n=0,a=0;a<e;a++)for(var o=r[a],i=a+1;i<e;i++){var c=r[i];if(n++,c.score>o.score||c.score==o.score&&c.name<o.name){var s=[r[a],r[i]],l=s[0],f=s[1];r[a]=f,r[i]=l,a--;break}}return console.info({"原数组":t,"数组":r,"比对次数":n}),r},_dataFormatting2=function(r){var e=new Set,t=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var c=o.value;e.add(new _Student2(c))}}catch(r){n=!0,a=r}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}return Array.from(e)},_Helpers=window.Helpers,Student=function r(e){_classCallCheck(this,r);var t=_slicedToArray(e,2),n=t[0],a=t[1];this.name=n,this.score=a},dataFormatting=function(r){var e=new Set,t=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var c=o.value;e.add(new Student(c))}}catch(r){n=!0,a=r}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}return Array.from(e)},Helpers=window.Helpers,insertionSort=function(r){for(var e=r.length,t=[].concat(r),n=0,a=1;a<e;a++)for(var o=a;0<o&&(n++,r[o].score>r[o-1].score||r[o].score==r[o-1].score&&r[o].name<r[o-1].name);o--){var i=[r[o],r[o-1]],c=i[0],s=i[1];r[o]=s,r[o-1]=c}return console.info({"原数组":t,"数组":r,"比对次数":n}),r},_arr2=Helpers.randomArray(500);Helpers.perfTest("插入排序法",insertionSort,dataFormatting(_arr2));var _insertionSort=function(r){for(var e=r.length,t=[].concat(r),n=0,a=1;a<e;a++){r[a];var o=void 0;for(o=a;0<o&&(n++,r[o].score>r[o-1].score||r[o].score==r[o-1].score&&r[o].name<r[o-1].name);o--){var i=[r[o],r[o-1]],c=i[0],s=i[1];r[o]=s,r[o-1]=c}}return console.info({"原数组":t,"数组":r,"比对次数":n}),r},_arr3=Helpers.randomArray(500);Helpers.perfTest("插入排序法",_insertionSort,dataFormatting(_arr3));