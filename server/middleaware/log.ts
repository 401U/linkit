export default defineEventHandler(async (event) => {
    console.log(`[${event.method}] ${event.path}`)
    return
})