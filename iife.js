// IIFE => Immediately Invoked Functions Expressions
// e.g.
// Most used to create safe scopes
// Largely used by framework
// Avoids errors by overwriting attributes in Global Scope
(function(name) {
  console.log(name);
}('Arthur'))