export class Fighter {
  constructor(private name?: string, private viktKlass?: string, private rankNr?: number, private showRank?: boolean) {
  }

  get ShowRank() {
    return this.showRank;
  }
  set ShowRank(n: boolean) {
    this.showRank = n;
  }

  get Name() {
    return this.name;
  }
  set Name(n: string) {
    this.name = n;
  }

  get ViktKlass() {
    return this.viktKlass;
  }
  set ViktKlass(n: string) {
    this.viktKlass = n;
  }
  get RankNr() {
    return this.rankNr;
  }
  set RankNr(n: number) {
    this.rankNr = n;
  }

}
