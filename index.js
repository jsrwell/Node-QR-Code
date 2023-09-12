import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
        message: "Insert the data you want to transform in a QR-Code:",
        name: "URL"
    },
    {
        message: "Inser the name of the image:",
        name: "name"
    }])
    .then((answers) => {
        // Create QR-Code Based on Answers
        var qr_svg = qr.image(answers.URL);
        qr_svg.pipe(fs.createWriteStream(`${answers.name}.png`));

        // Write a file with the text of QR-Code
        fs.writeFile(`${answers.name}.txt`, data, (err) => {
            if (err) throw err;
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });