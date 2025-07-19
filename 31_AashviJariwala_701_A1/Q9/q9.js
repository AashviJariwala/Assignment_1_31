var fs = require('fs');

fs.writeFile('../files/file1.txt', 'Hello file1!', function (err) {
  if (err) throw err;
  console.log('Write file!');
}); 

fs.appendFile('../files/file1.txt', ' This is file1 content.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 

fs.readFile('../files/file1.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

fs.rename('../files/file1.txt', '../files/f1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.unlink('../files/f1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});