function constructNote(message, letters) {
  var frequency = {}; // Frequency map for characters in 'letters'
  var frequencyM = {}; // Frequency map for characters in 'message'

  // Build frequency map for letters
  for (let i = 0; i < letters.length; i++) {
    // Increment the count of each character in 'letters'
    frequency[letters[i]] = (frequency[letters[i]] || 0) + 1;
  }

  // Build frequency map for message
  for (let i = 0; i < message.length; i++) {
    // Increment the count of each character in 'message'
    frequencyM[message[i]] = (frequencyM[message[i]] || 0) + 1;
  }

  // Compare the frequencies of characters in the message with those in letters
  for (let k in frequencyM) {
    // If a required character doesn't exist in letters, return false
    if (!frequency[k]) return false;

    // If the required count of a character is more than available, return false
    if (frequencyM[k] > frequency[k]) return false;
  }

  // If all characters are available in sufficient quantity, return true
  return true;
}

function constructNote(message, letters) {
  // If message is longer than letters, it's impossible to construct
  if (message.length > letters.length) return false;

  const letterFreq = {};

  // Build a frequency counter for available letters
  for (let char of letters) {
    letterFreq[char] = (letterFreq[char] || 0) + 1;
  }

  // Check if each character in the message can be fulfilled by available letters
  for (let char of message) {
    if (!letterFreq[char]) {
      return false; // Character not available or used up
    }
    letterFreq[char]--;
  }

  return true;
}
