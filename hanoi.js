
class Hanoi {
  constructor() {
    this.allPegs = {};
    this.allPegs.A = [];
    this.allPegs.B = [];
    this.allPegs.C = [];
  }

  getSparePeg(peg1, peg2) {
    const pegs = [peg1, peg2];
    const keys = Object.keys(this.allPegs);
    const sparePeg = keys.filter(e => !pegs.includes(e));
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
      this.move(peg1, peg2);
    } else {
      const sparePeg = this.getSparePeg(peg1, peg2);
      this.run(count - 1, peg1, sparePeg);
      this.run(1, peg1, peg2);
      this.run(count - 1, sparePeg, peg2);
    }
  }

  move(peg1, peg2) {
    const peg = this.allPegs[peg1].pop();
    this.allPegs[peg2].push(peg);
    console.log(`${peg1}->${peg2} A:${this.allPegs.A} B:${this.allPegs.B} C:${this.allPegs.C}`);
  }
}

module.exports = Hanoi;
