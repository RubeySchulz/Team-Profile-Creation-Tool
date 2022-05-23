const { writeFile, copyFile } = require('./generate-site');

const generatePage = (manager, engineers, interns) => {
    const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>team roster</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        <section class="cards">
            ${generateCards(manager, engineers, interns)}
        </section>
    </body>
</body>
</html>
    `

    writeFile(content)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

const generateCards = (manager, engineers, interns) => {
    let cards = `
<div class="card">
    <div class="top-card">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>    
    </div>
    <div class="bottom-card">
        <div class="bottom-card-content">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>    
        </div>
    </div>
</div>
`;

    engineers.forEach(engineer => {
        cards += `
        <div class="card">
            <div class="top-card">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>    
            </div>
            <div class="bottom-card">
                <div class="bottom-card-content">
                    <p>ID: ${engineer.id}</p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>Github: ${engineer.github}</p>    
                </div>
            </div>
        </div>
        `
    })

    interns.forEach(intern => {
        cards += `
        <div class="card">
            <div class="top-card">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>    
            </div>
            <div class="bottom-card">
                <div class="bottom-card-content">
                    <p>ID: ${intern.id}</p>
                    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p>School: ${intern.school}</p>    
                </div>
            </div>
        </div>
        `
    })

    return cards;
}

module.exports = generatePage;