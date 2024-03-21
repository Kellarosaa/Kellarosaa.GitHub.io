/**
 * Represents a player in the number game.
 */
class Player {
  private score: number;

  constructor() {
    this.score = 0;
  }

  /**
   * Get the player's current score.
   * @returns {number} The player's score.
   */
  getScore(): number {
    return this.score;
  }

  /**
   * Update the player's score.
   * @param {number} points - Points to add to the player's score.
   */
  updateScore(points: number): void {
    this.score += points;
  }
}

/**
 * Simulates a round of the number game.
 * Each player rolls a random number and the player with the higher number wins.
 * If it's a tie, no points are awarded.
 * @param {Player} player1 - The first player.
 * @param {Player} player2 - The second player.
 */
function playRound(player1: Player, player2: Player): void {
  const player1Number = Math.floor(Math.random() * 1000) + 1;
  const player2Number = Math.floor(Math.random() * 1000) + 1;

  if (player1Number > player2Number) {
    player1.updateScore(player1Number);
  } else if (player2Number > player1Number) {
    player2.updateScore(player2Number);
  }
}

// Create two players
const player1 = new Player();
const player2 = new Player();

// Simulate 25 rounds of the game
for (let i = 1; i <= 25; i++) {
  console.log(`Round ${i}:`);
  console.log(`Player 1 score: ${player1.getScore()}`);
  console.log(`Player 2 score: ${player2.getScore()}`);

  // Assume a button click starts the round
  console.log("Start Round button clicked!");

  playRound(player1, player2);
}

// Display final scores
console.log("Final Scores:");
console.log(`Player 1 score: ${player1.getScore()}`);
console.log(`Player 2 score: ${player2.getScore()}`);
