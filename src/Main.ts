export class Main {
  public static greet(name: string): string {
    return `Hello ${ name }!`;
  }

  public greet(name: string): string {
    return `Hello ${ name }!`;
  }
}

if (process.env.NODE_ENV === 'debug') {
  // Artificial wait to allow debugger to attach
  setTimeout(() => {
    Main.greet('Bob');
  }, 10000);
}
