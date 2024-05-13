import  multer from 'multer';
import path from 'path';



const storage = multer.diskStorage({
    
    filename: (req, file, cb)=>{
        cb(null, Date.now() + String(Math.floor(Math.random() * 1000)) + path.extname(file.originalname));
    },

    destination(req, file, cb) {
        let folder: string = '';

        if (req.baseUrl.includes('users')) {
            folder = 'users';

        } else if(req.baseUrl.includes('students')){
            folder = 'students';

        } else if(req.baseUrl.includes('teachers')){
            folder = 'teachers';
        }

        cb(null, `public/images/${folder}` );

    },
    
})

export const uploadImage = multer({storage: storage});