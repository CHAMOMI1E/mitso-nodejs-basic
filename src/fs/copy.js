import * as fs from 'node:fs';

const copy = async () => {
    if (!fs.existsSync('src/fs/files_copy/copy_file.txt'))
    {
        fs.copyFile('src/fs/files/FreshText.txt', 'src/fs/files_copy/copy_file.txt', err => {
        if(err) throw err; // не удалось скопировать файл
        console.log('Файл успешно скопирован');
    });

}
else{
    console.error("Файл уже есть =)");
}
};

await copy();
