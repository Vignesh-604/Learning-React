import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Creating Post
    async createPost({title, slug, content, image, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,                               // Document ID (can use ID.unique())
                {title, content, image, status, userId}
            )
        } catch (error) {
            console.log(error);
        }
    }

    // Updating Post
    async updatePost(slug, {title, content, image, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, content, image, status}
            )
        } catch (error) {
            console.log(error);
        }
    }

    // Delete Post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // Fetch to display post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // Get multiple posts
    async getPosts(){               // can pass parameters: query = [Query.equal(["status", "true"])]
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal(["status", "true"])]               // query
            )
        } catch (error) {
            console.log(error);
        }
    }

    // Upload image file
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
        }
    }

    // Delete Image file
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    
    // File preview
    getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileID)
    }
}

const service = new Service()
export default service