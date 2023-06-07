import PocketBase from 'pocketbase';

const globalForPocket = global as unknown as {pocket : PocketBase}
// Singleton design pattern
export const pocket = globalForPocket.pocket || new PocketBase(process.env.POCKET_BASE_URL);

if(process.env.NODE_ENV !=='production') globalForPocket.pocket=pocket;

export default pocket;