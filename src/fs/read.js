import fs from 'fs/promises';

const read = async () => {
    try{
    const fileContent = await fs.readFile("src/fs/files/dontLookAtM.txt", "utf8");
    console.log(fileContent);}
    catch (err) {
        console.error(err.message);
      }
};

await read();