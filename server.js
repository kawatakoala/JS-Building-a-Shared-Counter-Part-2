const spawn = require('child_process').spawn;
const liveServer = require('live-server')
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
async function main() {
    spawn('npx', ['json-server', '--watch', '--port', '9001', 'db.json'], { stdio: 'inherit' });
    await sleep(1000) // <-- Wait one second, so that the json-server has started by the time the live-server opens.
    liveServer.start({
        port: 9000,
        logLevel: 0,
        root: './public'
    })
}
main()