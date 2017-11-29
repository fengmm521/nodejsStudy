var testVar = 'this is testMode var.'
exports.testVar = testVar
if (module == require.main) {
    console.log('is main module ')
}else{
    console.log('is not main module')
}
