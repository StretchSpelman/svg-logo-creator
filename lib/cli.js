const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");

class CLI {
  constructor() {
    this.title = "";
    this.shape = "";
  }

  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          message: "What shape would you like?",
          choices: ["Triangle", "Square", "Rectangle"],
        },
      ])
      .then(({ shape }) => {
        this.shape = shape;

        if (shape === "Square") {
          return inquirer.prompt([
            {
              type: "input",
              name: "text",
              message: "Enter at most three characters:",
              validate: function (input) {
                if (input.length <= 3) {
                  return true;
                } else {
                  return "Please enter no more than three characters.";
                }
              },
            },
            {
              name: "shapeColor",
              type: "input",
              message:
                "What color would you like for the shape? Please use either color keyword or hexadecimal values.",
            },
            {
              name: "textColor",
              type: "input",
              message:
                "What color would you like for the text? Please use either color keyword or hexadecimal values.",
            },
            {
              name: "sideLength",
              type: "input",
              message: "What is the side length of the square?",
              validate: (input) => {
                if (input < 300) {
                  return "Please use a side length greater than or equal to 300";
                } else {
                  return true;
                }
              },
            },
            {
              type: "input",
              name: "name",
              message: "What is the name of the svg?",
            },
          ]);
        } else {
          
          return inquirer.prompt([
            {
              type: "input",
              name: "text",
              message: "Enter at most three characters:",
              validate: function (input) {
                if (input.length <= 3) {
                  return true;
                } else {
                  return "Please enter no more than three characters.";
                }
              },
            },
            {
              name: "shapeColor",
              type: "input",
              message:
                "What color would you like for the shape? Please use either color keyword or hexadecimal values.",
            },
            {
              name: "textColor",
              type: "input",
              message:
                "What color would you like for the text? Please use either color keyword or hexadecimal values.",
            },
            {
              name: "width",
              type: "input",
              message: "What is the width of the shape?",
            },
            {
              name: "height",
              type: "input",
              message: "What is the height of the shape?",
            },
            {
              type: "input",
              name: "name",
              message: "What is the name of the svg?",
            },
          ]);
        }
      })
      .then(
        ({ name, text, width, height, textColor, shapeColor, sideLength }) => {
          // Modify width and height based on the selected shape
          if (this.shape === "Square") {
            width = sideLength;
            height = sideLength;
          }

          return writeFile(
            join(__dirname, "..", "examples", `${name}.svg`),
            createDocument(
              this.shape,
              text,
              width,
              height,
              textColor,
              shapeColor
            )
          );
        }
      )
      .then(() => console.log("Your svg has been created!"))
      .catch((err) => {
        console.error(err);
        console.error("Something Went Wrong!");
      });
  }
}

module.exports = CLI;