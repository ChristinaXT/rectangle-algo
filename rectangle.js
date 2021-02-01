// The Min Perimeter Rectangle challenge brings us back to a lot of math.
// I had a gut feeling on this one and I only checked with a few examples
// but the minimum perimeter of a rectangle for a given area happens when the rectangle is in fact a square.
//
// For those of you who want a to be 100% sure of this, here is a proper demonstration.
//
// So all we need to do in this case is to find the closest integer number to the square root which is a dividing factor for the given area.

function solution(N) {
  for (let i = Math.floor(Math.sqrt(N)); i > 0; i--) {
    if (N % i === 0) {
      return (i + N / i) * 2;
    }
  }
}

console.log(solution(4))
