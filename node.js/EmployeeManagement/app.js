import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const filePath = path.join("reports", "employees.txt");

await fs.mkdir("reports", { recursive: true });

const server = http.createServer(async (request, response) => {

    if (request.url === "/") {

        response.end("Welcome to Employee Management System");

    }

    else if (request.url === "/add") {

        const employeeData = `
ID : 101
Name : John
Department : IT

ID : 102
Name : David
Department : HR

`;

        await fs.appendFile(filePath, employeeData);

        response.end("Employee Added Successfully");

    }

    else if (request.url === "/employees") {

        const data = await fs.readFile(filePath, "utf-8");

        response.end(data);

    }

    else if (request.url === "/system") {

        const info = `
Operating System : ${os.platform()}

Architecture : ${os.arch()}

Home Directory : ${os.homedir()}

Total Memory : ${os.totalmem()}

Free Memory : ${os.freemem()}
`;

        response.end(info);

    }

    else {

        response.end("404 Page Not Found");

    }

});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});