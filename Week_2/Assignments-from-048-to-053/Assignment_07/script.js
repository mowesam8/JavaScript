let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start; i < mix.length; i++) {
  if (mix[i] == true || typeof mix[i] !== "number") continue;
  else console.log(mix[i]);
}
// Output
// 2
// 3
// 4