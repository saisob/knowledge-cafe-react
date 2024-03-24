
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-6xl">blogs{blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;