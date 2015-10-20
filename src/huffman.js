// // Given a Huffman tree and a string, encode that string into a new string
// // consisting only of 1s and 0s, using the code given by the tree.
var encodeString = function(input, huffmanTree) {
  var result = '';
  var recurse = function(char, tree) {
    // debugger;
    if (tree.left && tree.left.val.indexOf(char) > -1 ) {
      result += 0;
      recurse(char, tree.left);
    } else if (tree.right !== null) {
      result += 1;
      recurse(char, tree.right);
    } else {
      return;
    }
  };
  for (var i=0; i < input.length; i++) {
    recurse(input[i], huffmanTree);
  }
  return result;
};


// // Given a Huffman tree and a string of 1s and 0s, decode that string into
// // a new, human-readable string, using the code given by the tree.
var decodeString = function(input, huffmanTree) {
  var result = '';
  input = input.split('');
  if (input.length === 1) {
    if (input === 0) {
      return huffmanTree.left;
    }
    if (input === 1) {
      return huffmantree.right;
    }
  }

  var recurse = function(input, tree) {
    // console.log(input);

    if (tree.left === null && tree.right === null) {
      result += tree.val[0];
      // input.shift();
      return;
    }
    if (input[0] === '0') {
      input.shift();
      recurse(input, tree.left);
    } else {
      input.shift();
      recurse(input, tree.right);
    }
  };

  while(input.length > 0) {
    console.log(input.length);
    recurse(input, huffmanTree);
  }
  // recurse(input, huffmanTree);
  return result;
};

// Given a corpus of text, return a Huffman tree that represents the
// frequencies of characters in the corpus.
//
// You should use the `PriorityQueue` class that is provided in the
// file `priorityQueue.js`.  The relevant methods are .insert(key, val),
// which inserts a value with the given key into the queue, and
// .extract(), which returns the {key: key, val: val} pair with the lowest
// key priority.
//
// You may also use the `Tree` class that is provided in the file `misc.js`
// Some corpuses are included as the variables `lorumIpsum` and `declaration`.
var makeHuffmanTree = function(corpus) {
  return new Tree();
};

