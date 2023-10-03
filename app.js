function isLoggedInAndSubscribed(loggedIn, subscribed) {
  return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
