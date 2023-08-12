const fs = require('fs');

const readpath = './docs/big-text.txt'
const writepath = './docs/big-text-created.txt'

const read_stream  = fs.createReadStream(readpath, {encoding: 'utf-8'});

const write_stream = fs.createWriteStream(writepath);

// read_stream.on('data',(chunk) => {
//     console.log('-----New Chunk-----');
//     console.log(chunk);

//     write_stream.write('\n NEW CHUNK \n')
//     write_stream.write(chunk)
// })

// piping
read_stream.pipe(write_stream)

