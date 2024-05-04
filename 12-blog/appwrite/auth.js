import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    account

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    };
    
    // Below async tasks are future proof code; not appwrite dependent (can change backend service ex. firebase)
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.login(email, password)  // If acc is created, login
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // Current user
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()

/*
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);
*/
export default authService