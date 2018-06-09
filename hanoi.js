
class Hanoi {
  constructor() {
    this.allPegs = ['A', 'B', 'C'];
  }

  getSparePeg(peg1, peg2) {
    const pegs = [peg1, peg2];
    const sparePeg = this.allPegs.filter(e => !pegs.includes(e));
    return sparePeg[0];
  }

  testGetSparePeg() {
    console.log(this.getSparePeg('A', 'B'));
    console.log(this.getSparePeg('B', 'A'));
    console.log(this.getSparePeg('B', 'C'));
    console.log(this.getSparePeg('C', 'B'));
    console.log(this.getSparePeg('A', 'C'));
    console.log(this.getSparePeg('C', 'A'));
  }

  run(count, peg1, peg2) {
    if (count === 1) {
      Hanoi.move(peg1, peg2);
    } else {
      const sparePeg = this.getSparePeg(peg1, peg2);
      this.run(count - 1, peg1, sparePeg);
      this.run(1, peg1, peg2);
      this.run(count - 1, sparePeg, peg2);
    }
  }

  static move(peg1, peg2) {
    console.log(`${peg1}->${peg2}`);
  }
}

module.exports = Hanoi;
