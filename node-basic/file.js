const fs = require('fs')

// // reading files
// fs.readFile('./docs/opening.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// })


// // writing files
// fs.writeFile('./docs/hello-world.txt', 'hello world', () => {
//     console.log("file is written")
// })


// fs.writeFile('./docs/hello-2.txt', 'hello world', () => {
//     console.log("file is written")
// })

// // directories
// // check first if directory exist
// const new_folder_path = './assets'

// if (!fs.existsSync(new_folder_path)){

//     // make directory
//     fs.mkdir(new_folder_path,(err) => {
//         if(err) {
//             console.log(err);
//         }
    
//         console.log("folder is created")
//     })
// } else {
//     // remove directory
//     fs.rmdir(new_folder_path,(err) => {
//         if(err) {
//             console.log(err);
//         }
    
//         console.log("folder is deleted")
//     })
// }


// deleting files
const new_file_path = './docs/dummy.txt'
if (fs.existsSync(new_file_path)){

    // make directory
    fs.unlink(new_file_path,(err) => {
        if(err) {
            console.log(err);
        }
    
        console.log("file is deleted")
    })
} else {
    // remove directory
    fs.writeFile(new_file_path, "this is a dummy text",(err) => {
        if(err) {
            console.log(err);
        }
    
        console.log("file is created")
    })
}