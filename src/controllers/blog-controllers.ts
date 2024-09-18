import { Request, Response } from "express";
import prisma from "../core/config/prisma";
import { HttpCode } from "../core/constants";

const blog_controllers = {
    create_one_blog: async(req: Request, res: Response) => {
        try {
            const {name, content, slug, vue} = req.body

            const new_blog = await prisma.blog.create({
                data: {
                    name, content, slug, vue: parseInt(vue)
                }
            })
            if(!new_blog) return res.status(HttpCode.BAD_REQUEST).json({msg: "Une erreur a survenue lors du traitement"})

            res.status(HttpCode.CREATED).json({msg: "creer"})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    create_many_blog: async(req: Request, res: Response) => {
        try {
            const {name, content, slug, vue} = req.body

            const blog = await prisma.blog.createMany({
                data: [{name, content, slug, vue}]
            })
            if(blog.count === 0) 
                return res.
                    status(HttpCode.BAD_REQUEST).
                    json({msg: "Une erreur a survenue lors du traitement"})

            res.status(HttpCode.CREATED).json({msg: `${blog.count} cré" avec succes`})
        } catch (error) {
            console.error(error)
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    get_one_blog: async(req: Request, res: Response) => {
        try {
            const {id} = req.params

            const blog = await prisma.blog.findUnique({
                where: {id}
            })
            if(!blog) return res.status(HttpCode.BAD_REQUEST).json({msg: "Une erreur a survenue lors du traitement"})

            res.status(HttpCode.OK).json({msg: blog})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    get_many_blog: async(req: Request, res: Response) => {
        try {
            const blogs = await prisma.blog.findMany();
            
            res.status(HttpCode.OK).json({msg: blogs})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    ubdate_blog: async(req: Request, res: Response) => {
        try {
            const {id} = req.params
            const {name, content, slug, vue} = req.body

            const new_blog = await prisma.blog.update({
                where: {id},
                data: {
                    name, content, slug, vue: parseInt(vue)
                }
            })
            if(!new_blog) return res.status(HttpCode.BAD_REQUEST).json({msg: "Une erreur a survenue lors du traitement"})

            res.status(HttpCode.OK).json({msg: "OK"})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    delete_one_blog: async(req: Request, res: Response) => {
        try {
            const {id} = req.params
            await prisma.blog.delete({where: {id}})

            res.status(HttpCode.OK).json({msg: "OK"})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    },

    delete_many_blog: async(req: Request, res: Response) => {
        try {
            await prisma.blog.deleteMany()
            res.status(HttpCode.CREATED).json({msg: "delete !"})
        } catch (error) {
            console.error(error)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).json({msg: error})
        }
    }
}

export default blog_controllers;