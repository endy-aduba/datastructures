//Basic Data Structures: Create complex multi-dimensional arrays
/*

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:*/

let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
      ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
      [
        ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
      ],
      [
        [
          ['deepest-est?'] // an array nested 5 levels deep
        ]
      ]
    ]
  ];