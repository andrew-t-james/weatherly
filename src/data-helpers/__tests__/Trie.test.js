import  Trie from '../Trie.js';

const defaultOptions = {
  depth: 100,          // How many nested properties deep should read
  colors: true,      // Display output in color
  breakLength: 80   // # of items to be listed on a single line
};

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('New Trie', () => {
    it('should insatiate a new Trie', () => {
      // execution
      const expected = {
        root: {
          key: null,
          child: {},
          wholeWord: null,
        },
        words: 0
      };

      const actual = trie;
      // expectation

      expect(actual).toEqual(expected);
    });
  });

  describe('Insert', () => {
    it('should insert a new word', () => {
      // setup
      const word = 'car';

      const expected = {
        root: {
          key: null,
          child: {
            c: {
              key: 'c',
              child: {
                a: {
                  key: 'a',
                  child: {
                    r: {
                      key: 'r',
                      child: {},
                      wholeWord: 'car'
                    }
                  },
                  wholeWord: null
                }
              },
              wholeWord: null
            }
          },
          wholeWord: null,
        },
        words: 1
      };

      trie.insert(word);
      const actual = trie;
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toEqual(expected);
    });

    it('should insert a new word with the same letter casing', () => {
      // setup
      const word = 'CAR';

      const expected = {
        root: {
          key: null,
          child: {
            c: {
              key: 'c',
              child: {
                a: {
                  key: 'a',
                  child: {
                    r: {
                      key: 'r',
                      child: {},
                      wholeWord: 'car'
                    }
                  },
                  wholeWord: null
                }
              },
              wholeWord: null
            }
          },
          wholeWord: null,
        },
        words: 1
      };

      trie.insert(word);
      const actual = trie;
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toEqual(expected);
    });

    it('should insert only a word once', () => {
      // setup
      const word = 'car';

      const expected = {
        root: {
          key: null,
          child: {
            c: {
              key: 'c',
              child: {
                a: {
                  key: 'a',
                  child: {
                    r: {
                      key: 'r',
                      child: {},
                      wholeWord: 'car'
                    }
                  },
                  wholeWord: null
                }
              },
              wholeWord: null
            }
          },
          wholeWord: null,
        },
        words: 1
      };

      trie.insert(word);
      trie.insert(word);
      const actual = trie;
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toEqual(expected);
    });

    it('should insert a multiple words', () => {
      // setup
      const word1 = 'car';
      const word2 = 'shoe';

      const expected = {
        root: {
          key: null,
          wholeWord: null,
          child: {
            c: {
              key: 'c',
              wholeWord: null,
              child: {
                a: {
                  key: 'a',
                  wholeWord: null,
                  child: {
                    r: {
                      key: 'r',
                      wholeWord: 'car',
                      child: {}
                    }
                  }
                }
              }
            },
            s: {
              key: 's',
              wholeWord: null,
              child: {
                h: {
                  key: 'h',
                  wholeWord: null,
                  child: {
                    o: {
                      key: 'o',
                      wholeWord: null,
                      child: {
                        e: {
                          key: 'e',
                          wholeWord: 'shoe',
                          child: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        words: 2
      };
        // expectation

      trie.insert(word1);
      trie.insert(word2);
      const actual = trie;
      // expectation

      expect(actual).toEqual(expected);
    });

    it('should insert letters as child if initial letters exist', () => {
      // setup
      const word1 = 'car';
      const word2 = 'cat';
      const word3 = 'cut';

      const expected = {
        root: {
          key: null,
          wholeWord: null,
          child: {
            c: {
              key: 'c',
              wholeWord: null,
              child: {
                a: {
                  key: 'a',
                  wholeWord: null,
                  child: {
                    r: {
                      key: 'r',
                      wholeWord: 'car',
                      child: {}
                    },
                    t: {
                      key: 't',
                      wholeWord: 'cat',
                      child: {}
                    }
                  }
                },
                u: {
                  key: 'u',
                  wholeWord: null,
                  child: {
                    t: {
                      key: 't',
                      wholeWord: 'cut',
                      child: {}
                    }
                  }
                }
              }
            }
          }
        },
        words: 3
      };

      trie.insert(word1);
      trie.insert(word2);
      trie.insert(word3);
      const actual = trie;
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toEqual(expected);
    });
  });

  describe('Count', () => {
    it('should return a number of words in trie', () => {
      // setup
      const word = 'car';

      const expected = 1;

      trie.insert(word);
      trie.count();
      const actual = trie.words;
      // expectation

      expect(actual).toBe(expected);
    });

    it('should return a number of words when multiple words are in trie', () => {
      // setup
      const word1 = 'car';
      const word2 = 'dog';

      const expected = 2;

      trie.insert(word1);
      trie.insert(word2);
      trie.count();
      const actual = trie.words;
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toBe(expected);
    });
  });

  describe('Suggest', () => {
    it('should return an array based on a passed prefix', () => {
      // setup
      const prefix = 'ca';
      const word1 = 'car';
      const word2 = 'cat';
      const expected = ['car', 'cat'];

      trie.insert(word1);
      trie.insert(word2);
      trie.suggest(prefix);
      const actual = trie.suggest(prefix);
      // expectation

      // console.log(util.inspect(trie, false, null));
      expect(actual).toEqual(expected);
    });
  });


  it('should delete a whole word from the trie', () => {
    // setup
    const word = 'car';

    const expected = {
      root: {
        key: null,
        child: {
          c: {
            key: 'c',
            child: {
              a: {
                key: 'a',
                child: {
                  r: {
                    key: 'r',
                    child: {},
                    wholeWord: null
                  }
                },
                wholeWord: null
              }
            },
            wholeWord: null
          }
        },
        wholeWord: null,
      },
      words: 0
    };

    trie.insert(word);
    trie.delete(word);
    const actual = trie;
    // expectation

    // console.log(util.inspect(trie, defaultOptions, null));
    expect(actual).toEqual(expected);
  });

  it('should delete correct child nodes', () => {
    // setup
    const word1 = 'car';
    const word2 = 'cut';

    const expected = {
      root: {
        key: null,
        wholeWord: null,
        child: {
          c: {
            key: 'c',
            wholeWord: null,
            child: {
              a: {
                key: 'a',
                wholeWord: null,
                child: {
                  r: {
                    key: 'r',
                    wholeWord: 'car',
                    child: {}
                  }
                }
              },
              u: {
                key: 'u',
                wholeWord: null,
                child: {
                  t: {
                    key: 't',
                    wholeWord: null,
                    child: {}
                  }
                }
              }
            }
          }
        }
      },
      words: 1
    };

    trie.insert(word1);
    trie.insert(word2);
    trie.delete(word2);
    const actual = trie;
    // expectation

    // console.log(util.inspect(trie, defaultOptions, null));
    expect(actual).toEqual(expected);
  });
});