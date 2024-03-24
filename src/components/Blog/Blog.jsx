import PropTypes from 'prop-types';
import { FaBookmark  } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='space-y-4 mt-10'>
            <img className='rounded-2xl' src={cover} alt="" />
            <div className='flex justify-between mt-2 p-2'>
                <div className='flex space-x-4'>
                    <div>
                        <img className='w-16 rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>{author}</h1>
                        <h1 className='text-xl font-normal'>{posted_date}</h1>
                    </div>
                </div>
                <div className='space-x-8'>
                    <span className='text-xl font-semibold'>{reading_time} read</span>
                    <button onClick={handleAddToBookmark} className='text-2xl text-red-400'><FaBookmark ></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold pl-4">{title}</h1>
            <div className=' font-semibold my-4 pl-4'>
                <h1>{hashtags}</h1>
            </div>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;