import * as fs from 'node:fs';

const rename = async () => {
    if(!fs.existsSync('src/fs/files/properFilename.md'))
    {
        fs.rename('src/fs/files/wrongFilename.txt','src/fs/files/properFilename.md', err => {
            if(err) throw err;
            console.log('Файл успешно переименован');
        });
    }
    else{
        console.error("Файл уже переименован!");
    }
};

await rename();