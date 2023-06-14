function receivesAFunction(anotherFunc) {
  // should take a callback function as an argument
  // should call the callback function
  // it doesn't matter what this function returns, so long as it calls the callback function
  anotherFunc();
}

function returnsANamedFunction() {
  // This function should take no arguments and return a named function
  return function my_name() {};
}

function returnsAnAnonymousFunction() {
  // This function should take no arguments and return an anonymous function
  return () => {};
}
