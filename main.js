const exec = require('child_process').exec;

// terraform init
async function tfinit(){
    await exec('terraform init', (err,stdout,stderr) => {
        
        if (err){
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

setTimeout(tfinit, 5000);

// unzip
async function unzipo(){
    await exec('unzip -o gc-test.zip', (err,stdout,stderr) => {
        if (err){
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

setTimeout(unzipo, 5000);


async function tfapply(){
    await exec('terraform apply -auto-approve', (err,stdout,stderr) => {
        
        if (err){
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}
setTimeout(tfapply, 5000);

/*
//remove main.tf
async function rmMain(){
    await cp('rm main.tf', (err,stdout,stderr) => {
        if (err){
            console.error(err);
            return;
        }
    console.log(stdout)
    
    });
}

rmMain();

async function rmvar(){
    await cp('rm variables.tf', (err,stdout,stderr) => {
        if (err){
            console.error(err);
            return;
        }
        console.log(stdout)
        
    });
    }
rmvar();

async function rmBackend(){
    await cp('rm backend.hcl', (err,stdout,stderr) => {
        if (err){
            console.error(err);
            return;
        }
        console.log(stdout);
        
    });
    }
rmBackend();
*/
