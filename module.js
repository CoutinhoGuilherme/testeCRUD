const productdb = (dbname,table) => {
const db = new Dexie(dbname)
db.version(1).stores(table);
db.open();
return db;

}

const bulkcreate = (dtable, data) => {
    let flag =empty(data);
    if (flag){
    dbtable.bulkAdd([data]);
console.log("data inserted successfully");   
}else{
    console.log("Please provide data");
}
return flag;
}

const empty = object => {
    let flag = false;

    for (const value in object){
        if([object] != "" && object.hasOwnProperty(value)){
            flag = true;
        } else{
            flag = false;
        }
    }
    return flag;
}

export default productdb;
export {
    bulkcreate
}