import React,{useCallback, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from "../index"
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title : post?.title || "",
            slug : post?.slug || "",
            content : post?.content || "",
            status : post?.status || "active"
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            data.image[0] ? appwriteService.uploadFile(data.image[0]) : null        // Add new img file

            if (file) appwriteService.deleteFile(post.image)        //If image file exists, delete
        }

        const dbPost = await appwriteService.updatePost(post.$id, {...data, image: file ? file.$id : undefined})
        
        if (dbPost) navigate(`/post/${db.Post.$id}`)
        else {
            const file = await appwriteService.uploadFile(data,image[0])

            if (file) {
                const fileId = file.$id
                data.image = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (dbPost) navigate(`/post/${db.Post.$id}`)
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g, "-")       // Replaces special char with -
        }
        return ""
    }, [])

    useEffect(()=>{
        const subscription = watch((name, {value}) => {
            if (name === "title") {
                setValue('slug', slugTransform(value.title, {shouldValidate: true}))
            }
        })

        return () => subscription.unsubscribe()     // for memory management/ optimization
    },[watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  )
}

export default PostForm