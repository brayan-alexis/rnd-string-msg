const messages = [
    "This is where it all begins... again",
    "Coding like a caffeinated squirrel",
    "Git: Making history, one commit at a time",
    "CTRL + S is my superpower",
    "Sudo make me a sandwich",
    "Code so clean, it sparkles",
    "Committing changes like a boss",
    "May the code be with you",
    "Debugging: When reality doesn't match expectations",
    "404: Sense of humor not found",
    "I'm not lazy, I'm on energy-saving mode",
    "Coding marathon: fueled by snacks and determination",
  ];
  
  const rndCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    rndCommit
  };