"use strict";var _slicedToArray=function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(r){o=!0,a=r}finally{try{!t&&c.return&&c.return()}finally{if(o)throw a}}return n}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var selectionSort=function(r){for(var e=r.length,n=[].concat(r),t=0,o=0;o<e;o++)for(var a=r[o],i=o+1;i<e;i++){if(t++,r[i]<a){var c=[r[o],r[i]],s=c[0],l=c[1];r[o]=l,r[i]=s,o--;break}}return console.info({"元素组":n,"数组":r,"比对次数":t}),r},Unique=function(r){return Array.from(new Set(r))},arr=new Array(1,3,2,5,7,8,9,1,2,23,15,88,12),_Student=function r(e){_classCallCheck(this,r);var n=_slicedToArray(e,2),t=n[0],o=n[1];this.name=t,this.score=o},_selectionSort=function(r){for(var e=r.length,n=[].concat(r),t=0,o=0;o<e;o++)for(var a=r[o],i=o+1;i<e;i++){var c=r[i];if(t++,c.score>a.score||c.score==a.score&&c.name<a.name){var s=[r[o],r[i]],l=s[0],f=s[1];r[o]=f,r[i]=l,o--;break}}return console.info({"元素组":n,"数组":r,"比对次数":t}),r},_dataFormatting=function(r){var e=new Set,n=!0,t=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e.add(new _Student(c))}}catch(r){t=!0,o=r}finally{try{!n&&i.return&&i.return()}finally{if(t)throw o}}return Array.from(e)},_arr=[["D",85],["A",70],["B",60],["T",90],["元",75],["X",85]],_Student2=function r(e){_classCallCheck(this,r);var n=_slicedToArray(e,2),t=n[0],o=n[1];this.name=t,this.score=o},_selectionSort2=function(r){for(var e=r.length,n=[].concat(r),t=0,o=0;o<e;o++)for(var a=r[o],i=o+1;i<e;i++){var c=r[i];if(t++,c.score>a.score||c.score==a.score&&c.name<a.name){var s=[r[o],r[i]],l=s[0],f=s[1];r[o]=f,r[i]=l,o--;break}}return console.info({"原数组":n,"数组":r,"比对次数":t}),r},_dataFormatting2=function(r){var e=new Set,n=!0,t=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e.add(new _Student2(c))}}catch(r){t=!0,o=r}finally{try{!n&&i.return&&i.return()}finally{if(t)throw o}}return Array.from(e)},_Helpers=window.Helpers,Student=function r(e){_classCallCheck(this,r);var n=_slicedToArray(e,2),t=n[0],o=n[1];this.name=t,this.score=o},dataFormatting=function(r){var e=new Set,n=!0,t=!1,o=void 0;try{for(var a,i=r[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e.add(new Student(c))}}catch(r){t=!0,o=r}finally{try{!n&&i.return&&i.return()}finally{if(t)throw o}}return Array.from(e)},Helpers=window.Helpers,insertionSort=function(r){for(var e=r.length,n=[].concat(r),t=0,o=1;o<e;o++)for(var a=o;0<a&&(t++,r[a].score>r[a-1].score||r[a].score==r[a-1].score&&r[a].name<r[a-1].name);a--){var i=[r[a],r[a-1]],c=i[0],s=i[1];r[a]=s,r[a-1]=c}return console.info({"原数组":n,"数组":r,"比对次数":t}),r},_insertionSort=function(r){for(var e=r.length,n=[].concat(r),t=0,o=1;o<e;o++){var a=r[o],i=void 0;for(i=o;0<i&&(t++,r[i-1].score<a.score||r[i-1].score==a.score&&r[i-1].name>a.name);i--)r[i]=r[i-1];r[i]=a}return console.info({"原数组":n,"数组":r,"比对次数":t}),r},_insertionSort2=function(r){for(var e=r.length,n=[].concat(r),t=0,o=1;o<e;o++){var a=r[o],i=void 0;for(i=o;0<i&&(t++,r[i-1]<a);i--)r[i]=r[i-1];r[i]=a}return console.info({"原数组":n,"数组":r,"比对次数":t}),r},arr1=Helpers.generateNearlyOrderedArray(2e3,100),arr2=Helpers.generateRandomOrderedArray(2e3);console.info({arr1:arr1,arr2:arr2}),Helpers.perfTest("插入排序法(近乎有序)",_insertionSort2,dataFormatting(arr1));