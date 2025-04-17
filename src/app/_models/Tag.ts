export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly HTML = new Tag('HTML', 'orange');
  static readonly CSS = new Tag('CSS', 'blue');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'green');
  static readonly JAVASCRIPT = new Tag('Javascript', 'pink');
  static readonly TYPESCRIPT = new Tag('Typescript', 'purple');
  static readonly API = new Tag('Api', 'lightgreen');
  static readonly SCSS = new Tag('SCSS', 'lightblue');
  static readonly LOCALSTORAGE = new Tag('Local Storage', 'teal');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
