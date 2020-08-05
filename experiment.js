//alters positions of variable references and declarations to help explain how scope affects outcomes.

let something = "outside the function";

function thing () {
  let something = "outside the if statement";
  
  if (true) {
      let something = "inside the if statement";
      console.log(something);
    }

    console.log(something);
  }

  thing();

  console.log(something)
  