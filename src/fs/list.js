import * as fs from 'node:fs';

const list = async () => {
    fs.readdir('src/fs/files', (err, files) => {
        if(err) throw err; // не прочитать содержимое папки
        console.log('В папке находятся файлы:' + files);
     });
};

await list();