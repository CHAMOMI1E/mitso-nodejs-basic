import * as fs from 'node:fs';

const create = async () => {
    const path = 'src/fs/files/FreshText.txt';
    
    if (!fs.existsSync(path))
    {
        fs.writeFileSync(path, "I'm fresh file!!!", 'utf8');
    }
    else
    {
        console.error("create file problem");
    }
   
};

await create();