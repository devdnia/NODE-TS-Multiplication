import { yarg as argv } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

( async () => {
    await main();
    

})();


async function main() {
   
    const { b:base, l:limit, s:showTable, n: fileName, d: fileDestination} = argv;
    
    ServerApp.run({
        base,
        limit,
        showTable,
        fileDestination,
        fileName
    });


}

