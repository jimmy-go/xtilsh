var s = process.argv[2]
var res = JSON.stringify(JSON.parse(s))
res = res.replace(/\\n/g, '')
res = res.replace(/\\r/g, '')
res = res.replace(/\\t/g, '')
res = res.replace(/\\/g, '')
res = res.replace(/\ /g, '')
res = res.replace('"{', '{')
res = res.replace('}"', '}')
console.log(res)
