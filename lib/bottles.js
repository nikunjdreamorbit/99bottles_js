export class Bottles {

  verse(n) {
    return `${this.getFirstLine(n)}, ${this.getSecondLine(n)}`;
  }

  verses(from, to) {
    // 1 Liner return Array.from({ length: from - to + 1 }, (_, i) => this.verse(from - i)).join('\n');
    const verseArray = [];
    for (let i = from; i >= to; i--) {
      verseArray.push(this.verse(i));
    }

    return verseArray.join('\n');
  }

  song() {
    return this.verses(99, 0);
  }

  // Helpers
  getFirstLine(n) {
    if(n === 1) {
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around';
    }
    else if(n === 0) {
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more'
    }
    else {
        return `${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around`
    }
  }

  getSecondLine(n) {
    return `${this.getLeftBottles(n)} of beer on the wall.\n`;
  }

  getLeftBottles(n) {
    switch(true) {
        case (n === 0):
            return '99 bottles';
        case (n-1 === 1):
            return '1 bottle';
        case (n-1 === 0):
            return 'no more bottles';
        default:
            return `${n-1} bottles`;
    }
  }
}
