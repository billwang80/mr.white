import words from "../data/gameWords";

const shuffle = (arr) => {
  var n = arr.length, temp, i;

  while(n) {
    i = Math.floor(Math.random() * n);
    n--;

    temp = arr[n];
    arr[n] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

const getWords = (roles) => {
  const roles_n = roles.length;
  const words_n = words.length;
  
  const word_group = shuffle(words[Math.floor(Math.random() * words_n)]);
  const selected_words = word_group.slice(0, 2);
  let word_arr = new Array(roles_n);

  roles.forEach((role, i) => {
    if (role === 0) {
      word_arr[i] = "Mr. White";
    } else if (role === 1) {
      word_arr[i] = selected_words[0]
    } else {
      word_arr[i] = selected_words[1]
    }
  })
  
  return word_arr;
}

const getRoles = (players, n_imposters) => {
  const n = players.length;

  if (n_imposters === undefined) {
    n_imposters = Math.floor((n - 1) / 2);
  } 

  let roles = new Array(n);

  // mr white = 0, imposter = -1, villager = 1
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      roles[i] = 0
    } else if (i <= n_imposters) {
      roles[i] = -1
    } else {
      roles[i] = 1
    }
  }

  roles = shuffle(roles);
  players = shuffle(players);
  const words_arr = getWords(roles);

  players.forEach((player, i) => {
    player['role'] = roles[i];
    player['word'] = words_arr[i];
    players[i] = player;
  })

  return players;
}

export default getRoles;
