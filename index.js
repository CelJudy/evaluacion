const xlsx = require('xlsx');
const db = require('./connection');

const workbook = xlsx.readFile("./evaluacion.xlsx");

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const data = xlsx.utils.sheet_to_json(worksheet,{ header: 1 });

//console.log(data[1]);

data.forEach(async row => {
    await insert(row);
});
//insert(data[2]);

async function insert(row){
    let insert=[];
    let x=8;
    
    
    for(let i=1;i<11;i++){
        if(row[x]!=null){
            insert[0]=row[x];
            x+=2;

            for(let y=0;y<10;y++){//preguntas de la 1 a la 10
                //console.log(`pregunta ${y+1}`);
                x+=2;
                if(row[x]!=null){
                    //console.log("7");
                    insert[y+1]="7";
                }
                x+=2;
                if(row[x]!=null){
                    //console.log("8");
                    insert[y+1]="8";
                }
                x+=2;
                if(row[x]!=null){
                    //console.log("9");
                    insert[y+1]="9";
                }
                x+=2;
                if(row[x]!=null){
                    //console.log("10");
                    insert[y+1]="10";
                }
            }
            x+=1;
            insert[11]=row[x];
            x+=3;
            insert[12]=(row[x]==null?"":row[x]);
            //console.log(insert);
        
            try {
                const result = await db.query(
                    `insert into evaluacion values (default, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, 
                    insert
                );
            } catch (err) {
                console.error(err);
            }

            insert=[]
            x+=6;
        }
    }
}