let divisores = 0

for (let count = 1; count <= 50; count++) {
  if (50 % count == 0) divisores++

  if (divisores == 2 && divisores % 2 == 0) {
    console.log(`${count} Par Primo`)
  } else if (divisores == 2 && divisores % 2 != 0) {
    console.log(`${count} Impar Primo`)
  } else if (divisores != 2 && divisores % 2 == 0) {
    console.log(`${count} Par`)
  } else {
    console.log(`${count} Impar`)
  }
}