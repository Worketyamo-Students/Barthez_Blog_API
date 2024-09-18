import { Router } from "express";
import { BLOG_ROUTE } from "../utils/mocks/blog-mock-route";
import blog_controllers from "../controllers/blog-controllers";

const Blog = Router();

// Create one blog
Blog.post(
    BLOG_ROUTE.CREATE_ONE_BLOG, 
    blog_controllers.create_one_blog
)

// Create many blog
Blog.post(
    BLOG_ROUTE.CREATE_MANY_BLOG, 
    blog_controllers.create_many_blog
)

// get one blog
Blog.get(
    BLOG_ROUTE.GET_ONE_BLOG, 
    blog_controllers.get_one_blog
)

// get many blog
Blog.get(
    BLOG_ROUTE.GET_MANY_BLOG, 
    blog_controllers.get_many_blog
)

// updtate one blog
Blog.put(
    BLOG_ROUTE.UPDATE_ONE_BLOG, 
    blog_controllers.ubdate_blog
)

// deete one blog
Blog.delete(
    BLOG_ROUTE.DELETE_BLOG, 
    blog_controllers.delete_one_blog
)

// deete one blog
Blog.delete(
    BLOG_ROUTE.DELETE_MANY_BLOG, 
    blog_controllers.delete_many_blog
)

export default Blog;