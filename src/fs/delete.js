import * as fs from 'node:fs';

const remove = async () => {
    if(fs.existsSync('src/fs/files/fileToRemove.txt'))
    {
        fs.unlink('src/fs/files/fileToRemove.txt', err => {
            if(err) throw err; // не удалось скопировать файл
            console.log('Файл успешно удален');
        });
    }
    else
    {
        console.error("Файл не существует");
    }
};

await remove();