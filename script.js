function showAbout() {

    const output = document.getElementById("terminal-output");

    output.innerHTML = `
        <p><strong>$ about</strong></p>

        <p>
        Hey there! I'm the person behind this web!
        </p>

        <p>
        I'm just a random teen, learning programming, web development,
        Linux and cybersecurity, planning to improve my skills over time.
        </p>
    `;
}


function showSocials() {

    const output = document.getElementById("terminal-output");

    output.innerHTML = `
        <p><strong>$ socials</strong></p>

        <p>
        🌐 GitHub:
        <a href="https://github.com/larpylarplarp" target="_blank">
        Open
        </a>
        </p>

        <p>
        📸 Tiktok:
        <a href="https://www.tiktok.com/@b.fujiwara?lang=en" target="_blank">
        Open
        </a>
        </p>
        <p>discord: Sleepy_bananaLeclerc-_-</p>
    `;
}


function showProjects() {

    const output = document.getElementById("terminal-output");

    output.innerHTML = `
        <p><strong>$ projects</strong></p>

        <p>💻 Coder's Lair</p>
        <p>🐍 Python experiments</p>
        <p>🌐 Web development</p>
    `;
}


function showContact() {

    const output = document.getElementById("terminal-output");

    output.innerHTML = `
        <p><strong>$ contact</strong></p>

        <p>
        📧 Email:
        <a href="mailto:Opetisyraf@gmail.com">
        Send me an email
        </a>
        </p>
    `;
}