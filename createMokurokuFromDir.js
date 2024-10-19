const fs = require('fs');

const text = fs.readFileSync("./list.txt", 'utf-8');

let tmp = "";
let tmpkey = "";
let tmptile = "";

text.split("\n").forEach( line => {
  
  if(line.match("ディレクトリ")){
    const m = line.match(/^\s+(.*)\\(\d+)\\(\d+) のディレクトリ/);
    console.log(m);
    if(!m) return;
    tmpkey = `${m[1]}`;
    tmptile = `${m[2]}/${m[3]}`;
    //if(!tmp[tmpkey]) tmp[tmpkey] = "";
  }
  
  const d = line.match(/\s(\d+)\./);
  if(!d) return;
  
  tmp += tmpkey + "," + tmptile + "/" + d[1] + "\n";
  
});

fs.writeFileSync("mokuroku.csv", tmp);



