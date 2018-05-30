class Node {
  constructor(letter) {
    this.key = letter;
    this.wholeWord = null;
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
    this.words = 0;
  }

  insert(word) {
    const sanitizedString = word.toLowerCase();
    const letters = [...sanitizedString];
    let currNode = this.root;

    while (letters.length) {
      let currentLetter = letters.shift();

      if (currNode.child[currentLetter]) {
        currNode = currNode.child[currentLetter];
      } else {
        let newNode = new Node(currentLetter);

        currNode.child[currentLetter] = newNode;

        currNode = newNode;
      }
    }

    if (!currNode.wholeWord) {
      this.words++;
    }
    currNode.wholeWord = sanitizedString;
  }

  populate(dictionaryArr) {
    dictionaryArr.forEach(word => {
      this.insert(word);
    });
  }

  count() {
    return this.words;
  }

  suggest(prefix) {
    const sanitizedString = prefix.toLowerCase();
    const suggestions = [];
    const prefixLetters = [...sanitizedString];
    let currNode = this.root;

    prefixLetters.forEach(currentLetter => {
      currNode = currNode.child[currentLetter];
    });

    const searchForWholeWords = node => {
      // every time a branch has a complete word push that word
      if (node.wholeWord) {
        suggestions.push(node.wholeWord);
      }
      // trieObjKeys === all keys I need to find nested objects
      let trieObjKeys = Object.keys(node.child);

      // use keys to recursively call searchForWholeWords
      // with the node based on key
      trieObjKeys.forEach(key => {
        // recursive call to search child nodes
        searchForWholeWords(node.child[key]);
      });
    };

    searchForWholeWords(currNode);
    return suggestions;
  }

  delete(word) {
    let currNode = this.root;
    const sanitizedString = word.toLowerCase();
    const letters = [...sanitizedString];

    while (letters.length) {
      currNode = currNode.child[letters.shift()];
    }
    currNode.wholeWord = null;
    this.words--;
  }
}

export default Trie;